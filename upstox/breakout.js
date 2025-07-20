// breakout.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const BASE_URL = 'https://api.upstox.com/v3/historical-candle';
const UNIT = 'minutes';       // 'minutes', 'hours', 'days', 'weeks', or 'months'
const INTERVAL = '15';         // numeric interval (e.g. "1" = 1 minute)
const TO_DATE = '2024-07-30'; // ending date, inclusive
const FROM_DATE = '2024-07-01';

// Example sandbox instrument key
const SYMBOLS = [
  'NSE_EQ|INE040A01034',
  //  'NSE_EQ|INE066A01021',
  // 'NSE_EQ|INE467B01029', 'NSE_EQ|INE860A01027',
  // 'NSE_EQ|INE095A01012', 'NSE_EQ|INE585B01010',
  // 'NSE_EQ|INE029A01011', 'NSE_EQ|INE090A01021',
  // 'NSE_EQ|INE239A01024', 'NSE_EQ|INE075A01022',
  // 'NSE_EQ|INE192A01025', 'NSE_EQ|INE628A01036',
  // 'NSE_EQ|INE669C01036', 'NSE_EQ|INE397D01024',
  // 'NSE_EQ|INE101A01026', 'NSE_EQ|INE154A01025',
  // 'NSE_EQ|INE044A01036', 'NSE_EQ|INE062A01020',
  // 'NSE_EQ|INE213A01029', 'NSE_EQ|INE047A01021',
  // 'NSE_EQ|INE280A01028', 'NSE_EQ|INE437A01024',
  // 'NSE_EQ|INE216A01030', 'NSE_EQ|INE158A01026',
  // 'NSE_EQ|INE018A01030', 'NSE_EQ|INE423A01024',
  // 'NSE_EQ|INE021A01026', 'NSE_EQ|INE009A01021',
  // 'NSE_EQ|INE522F01014', 'NSE_EQ|INE237A01028',
  // 'NSE_EQ|INE733E01010', 'NSE_EQ|INE917I01010',
  // 'NSE_EQ|INE742F01042', 'NSE_EQ|INE296A01032',
  // 'NSE_EQ|INE918I01026', 'NSE_EQ|INE238A01034',
  // 'NSE_EQ|INE081A01020', 'NSE_EQ|INE030A01027',
  // 'NSE_EQ|INE019A01038', 'NSE_EQ|INE059A01026',
  // 'NSE_EQ|INE481G01011', 'NSE_EQ|INE038A01020',
  // 'NSE_EQ|INE070A01015', 'NSE_EQ|INE089A01031',
  // 'NSE_EQ|INE361B01024', 'NSE_EQ|INE002A01018',
  // 'NSE_EQ|INE752E01010', 'NSE_EQ|INE123W01016',
  // 'NSE_EQ|INE795G01014'
]

async function fetchCandles(symbol) {
  const url = `${BASE_URL}/${encodeURIComponent(symbol)}/${UNIT}/${INTERVAL}/${TO_DATE}/${FROM_DATE}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    const candles = response.data.data?.candles;
    if (!candles?.length) {
      console.warn(`⚠️  No data for ${symbol}`);
      return [];
    }

    return candles.map(([time, open, high, low, close, volume, oi]) => ({
      time, open, high, low, close, volume, oi
    }));
  } catch (err) {
    console.error(`❌  Error fetching ${symbol}:`, err.response?.data || err.message);
    return [];
  }
}

// function detectBreakouts(candles) {
//   let wins = 0, losses = 0;
//   let capital = 200000;
//   const slPct = 0.5, tgtPct = 1;

//   for (let i = 1; i < candles.length; i++) {
//     if (candles[i].high > candles[i - 1].high) {
//       const entry = candles[i].high;
//       const sl = entry * (1 - slPct / 100);
//       const tgt = entry * (1 + tgtPct / 100);
//       const close = candles[i].close;

//       if (close >= tgt) {
//         wins++;
//         capital *= 1 + tgtPct / 100;
//       } else if (close <= sl) {
//         losses++;
//         capital *= 1 - slPct / 100;
//       }
//     }
//   }

//   const total = wins + losses;
//   const winRate = total ? (wins / total) * 100 : 0;

//   console.log(`📊 Trades: ${total}, ✅ Wins: ${wins}, ❌ Losses: ${losses}`);
//   console.log(`🏁 Win Rate: ${winRate.toFixed(2)}%, 💰 Final Capital: ₹${capital.toFixed(2)}`);
// }

function detectBreakouts(candles) {
  let wins = 0, losses = 0, capital = 200000;
  const riskPerTrade = 2000;
  const tgtPct = 0.8; // 8%
  const slPct = 0.4;  // 4%

  // Extract first 15-minute candle (9:15–9:30)
  const morningCandle = candles.find(c => {
    const d = new Date(c.time);
    return d.getHours() === 9 && d.getMinutes() === 30;
  });

  if (!morningCandle) return console.warn("🚫 Morning candle not found.");

  const morningHigh = morningCandle.high;

  // Calculate average volume of last 5 candles before breakout
  const volWindow = candles.slice(0, 5).map(c => c.volume);
  const avgVol = volWindow.reduce((a, b) => a + b, 0) / volWindow.length;

  // Calculate 50-period EMA
  const ema50 = candles.slice(0, 50).reduce((a, b) => a + b.close, 0) / 50;

  let tradeTaken = false;

  for (let i = 1; i < candles.length - 10; i++) {
    const c = candles[i];
    const d = new Date(c.time);
    if (d.getHours() < 9 || (d.getHours() === 9 && d.getMinutes() < 30)) continue;

    if (tradeTaken) break;

    const currVol = c.volume;
    const price = c.close;

    const entryCond = price > morningHigh && price > ema50 && currVol > 1.2 * avgVol;

    if (entryCond) {
      const entry = c.open;
      const sl = entry * (1 - slPct);
      const target = entry * (1 + tgtPct);

      // simulate next 10 candles (max hold window)
      let result = 'loss';
      for (let j = i; j < i + 10 && j < candles.length; j++) {
        const candle = candles[j];
        if (candle.low <= sl) break;
        if (candle.high >= target) {
          result = 'win';
          break;
        }
      }

      if (result === 'win') {
        wins++;
        capital += riskPerTrade * (tgtPct / slPct); // maintain R:R = 2:1
      } else {
        losses++;
        capital -= riskPerTrade;
      }

      tradeTaken = true;
    }
  }

  const total = wins + losses;
  const winRate = total ? (wins / total) * 100 : 0;

  console.log(`📊 Trades: ${total}, ✅ Wins: ${wins}, ❌ Losses: ${losses}`);
  console.log(`🎯 Win Rate: ${winRate.toFixed(2)}%`);
  console.log(`💰 Final Capital: ₹${capital.toFixed(2)}`);
}

function detectShortBreakouts(candles) {
  let wins = 0, losses = 0, capital = 200000;
  const riskPerTrade = 2000;
  const tgtPct = 0.008; // 0.8%
  const slPct = 0.004;  // 0.4%

  // Extract first 15-minute candle (9:15–9:30)
  const morningCandle = candles.find(c => {
    const d = new Date(c.time);
    return d.getHours() === 9 && d.getMinutes() === 30;
  });

  if (!morningCandle) return console.warn("🚫 Morning candle not found.");

  const morningLow = morningCandle.low;

  // Calculate average volume of last 5 candles before breakout
  const volWindow = candles.slice(0, 5).map(c => c.volume);
  const avgVol = volWindow.reduce((a, b) => a + b, 0) / volWindow.length;

  // Calculate 50-period EMA
  const ema50 = candles.slice(0, 50).reduce((a, b) => a + b.close, 0) / 50;

  let tradeTaken = false;

  for (let i = 1; i < candles.length - 10; i++) {
    const c = candles[i];
    const d = new Date(c.time);
    if (d.getHours() < 9 || (d.getHours() === 9 && d.getMinutes() < 30)) continue;

    if (tradeTaken) break;

    const currVol = c.volume;
    const price = c.close;

    const entryCond = price < morningLow && price < ema50 && currVol > 1.2 * avgVol;

    if (entryCond) {
      const entry = c.open;
      const sl = entry * (1 + slPct);
      const target = entry * (1 - tgtPct);

      // simulate next 10 candles (max hold window)
      let result = 'loss';
      for (let j = i; j < i + 10 && j < candles.length; j++) {
        const candle = candles[j];
        if (candle.high >= sl) break;
        if (candle.low <= target) {
          result = 'win';
          break;
        }
      }

      if (result === 'win') {
        wins++;
        capital += riskPerTrade * (tgtPct / slPct); // maintain R:R = 2:1
      } else {
        losses++;
        capital -= riskPerTrade;
      }

      tradeTaken = true;
    }
  }

  const total = wins + losses;
  const winRate = total ? (wins / total) * 100 : 0;

  console.log(`📉 Short Trades: ${total}, ✅ Wins: ${wins}, ❌ Losses: ${losses}`);
  console.log(`🎯 Win Rate: ${winRate.toFixed(2)}%`);
  console.log(`💰 Final Capital: ₹${capital.toFixed(2)}`);
}





function backtestSideways(candles) {
  const lows = candles.map(c => c.low)
  const highs = candles.map(c => c.high)
  const support = Math.min(...lows)
  const resistance = Math.max(...highs)

  let trades = 0, wins = 0, losses = 0
  let capital = 200000  // initial capital in INR
  const riskPerTrade = 2000

  for (let i = 1; i < candles.length; i++) {
    const price = candles[i].close

    // long entry near support
    if (price <= support * 1.01) {
      trades++
      const entry = price
      const sl = entry * 0.995
      const target = entry * 1.01
      let result = 'loss'

      for (let j = i + 1; j < Math.min(candles.length, i + 11); j++) {
        if (candles[j].low <= sl) {
          break // stop-loss hit
        }
        if (candles[j].high >= target) {
          result = 'win'
          break
        }
      }

      if (result === 'win') {
        wins++
        capital += riskPerTrade * 0.01  // profit = 1%
      } else {
        losses++
        capital -= riskPerTrade * 0.005 // loss = 0.5%
      }
    }

    // Optionally: short near resistance
  }

  console.log(`Total trades: ${trades}`)
  console.log(`Wins:         ${wins}`)
  console.log(`Losses:       ${losses}`)
  console.log(`Win rate:     ${(wins / trades * 100).toFixed(2)}%`)
  console.log(`Final capital: ₹${capital.toFixed(2)}`)
}

function calculateVWAP(candles) {
  let cumulativePV = 0;
  let cumulativeVol = 0;

  for (const c of candles) {
    const typicalPrice = (c.high + c.low + c.close) / 3;
    cumulativePV += typicalPrice * c.volume;
    cumulativeVol += c.volume;
  }

  return cumulativePV / cumulativeVol;
}


function testVWAPBreakout(candles) {
  let capital = 200000;
  let riskPerTrade = 2000;
  let rr = 1; // Risk:Reward 1:1
  let wins = 0, losses = 0;

  let tradeTaken = false;

  for (let i = 20; i < candles.length - 10; i++) {
    // VWAP Calculation up to current candle
    const vwap = calculateVWAP(candles.slice(0, i));

    const candle = candles[i];
    const price = candle.close;
    const vol = candle.volume;

    const prevHigh = candles[i - 1].high;
    const prevLow = candles[i - 1].low;

    // Entry Condition: Price breakout above prev high + price above VWAP
    const entryCond = price > prevHigh && price > vwap;

    if (entryCond && !tradeTaken) {
      const entry = candle.open;
      const sl = prevLow;
      const target = entry + (entry - sl) * rr;

      let result = "loss";
      for (let j = i; j < i + 10; j++) {
        const c = candles[j];
        if (c.low <= sl) break;
        if (c.high >= target) {
          result = "win";
          break;
        }
      }

      if (result === "win") {
        wins++;
        capital += riskPerTrade * rr;
      } else {
        losses++;
        capital -= riskPerTrade;
      }

      tradeTaken = true; // Only one trade per day/session
    }
  }

  const total = wins + losses;
  const winRate = total ? (wins / total) * 100 : 0;

  console.log(`📊 Trades: ${total}, ✅ Wins: ${wins}, ❌ Losses: ${losses}`);
  console.log(`🎯 Win Rate: ${winRate.toFixed(2)}%`);
  console.log(`💰 Final Capital: ₹${capital.toFixed(2)}`);
}



(async () => {
  for (const sym of SYMBOLS) {
    const candles = await fetchCandles(sym);
    if (candles.length) {
      console.log(`\n=== ${sym} ===`);
      testVWAPBreakout(candles);
      // detectShortBreakouts(candles);
      // backtestSideways(candles);
      // detectBreakouts(candles);
    }
  }
})();
