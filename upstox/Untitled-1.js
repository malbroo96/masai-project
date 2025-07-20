// breakout.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); // Load API credentials from .env file

// Load credentials
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const SYMBOL = 'NSE_EQ|RELIANCE'; // Change as per your requirement
const INTERVAL = '1minute'; // 1min data for breakout detection
const FROM_DATE = '2024-07-01';  // Customize range
const TO_DATE = '2024-07-10';

const BASE_URL = 'https://api.upstox.com/v2/historical-candle';

async function fetchCandles(symbol, interval, from, to) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        instrument_key: symbol,
        interval: interval,
        from_date: from,
        to_date: to
      },
      headers: {
        'Api-Version': '2.0',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    });

    const candles = response.data.data.candles;
    if (!candles || candles.length === 0) {
      console.log('No candle data returned. Check symbol or date range.');
      return [];
    }

    console.log(`✅ Fetched ${candles.length} candles`);
    return candles.map(([time, open, high, low, close, volume]) => ({
      time, open, high, low, close, volume
    }));
  } catch (err) {
    console.error('❌ Error fetching candles:', err.response?.data || err.message);
    return [];
  }
}

// --- Breakout Logic ---
function detectBreakouts(candles) {
  let wins = 0, losses = 0;
  let capital = 200000;
  const slPercent = 0.5;  // Stop loss: 0.5%
  const targetPercent = 1; // Target: 1%

  for (let i = 1; i < candles.length; i++) {
    const prev = candles[i - 1];
    const curr = candles[i];

    const breakout = curr.high > prev.high;

    if (breakout) {
      const entry = curr.high;
      const sl = entry - entry * slPercent / 100;
      const target = entry + entry * targetPercent / 100;
      const nextClose = curr.close;

      if (nextClose >= target) {
        wins++;
        capital *= 1 + targetPercent / 100;
      } else if (nextClose <= sl) {
        losses++;
        capital *= 1 - slPercent / 100;
      }
    }
  }

  const totalTrades = wins + losses;
  const winRate = totalTrades ? (wins / totalTrades) * 100 : 0;

  console.log(`📊 Total Trades: ${totalTrades}`);
  console.log(`✅ Wins: ${wins}`);
  console.log(`❌ Losses: ${losses}`);
  console.log(`🏁 Win Rate: ${winRate.toFixed(2)}%`);
  console.log(`💰 Final Capital: ₹${capital.toFixed(2)}`);
}

// Add instrument keys for Nifty 50 stocks (replace with actual keys from Upstox instrument master)
const nifty50InstrumentKeys = [
  "NSE_EQ|INE002A01018", // RELIANCE
  "NSE_EQ|INE467B01029", // TCS
  "NSE_EQ|INE009A01021", // INFY
  "NSE_EQ|INE040A01034", // HDFCBANK
  "NSE_EQ|INE090A01021", // ICICIBANK
  "NSE_EQ|INE237A01028", // KOTAKBANK
  "NSE_EQ|INE062A01020", // SBIN
  "NSE_EQ|INE238A01034", // AXISBANK
  "NSE_EQ|INE154A01025", // ITC
  "NSE_EQ|INE397D01024", // BHARTIARTL
  "NSE_EQ|INE018A01030", // LT
  "NSE_EQ|INE021A01026", // ASIANPAINT
  "NSE_EQ|INE296A01024", // BAJFINANCE
  "NSE_EQ|INE030A01027", // HINDUNILVR
  "NSE_EQ|INE075A01022", // WIPRO
  "NSE_EQ|INE752E01010", // POWERGRID
  "NSE_EQ|INE101A01026", // NTPC
  "NSE_EQ|INE239A01016", // NESTLEIND
  "NSE_EQ|INE155A01022", // TATAMOTORS
  "NSE_EQ|INE481G01011", // ULTRACEMCO
  "NSE_EQ|INE305A01010", // JSWSTEEL
  "NSE_EQ|INE044A01036", // SUNPHARMA
  "NSE_EQ|INE585B01010", // MARUTI
  "NSE_EQ|INE669C01036", // TECHM
  "NSE_EQ|INE423A01024", // ADANIENT
  "NSE_EQ|INE047A01021", // GRASIM
  "NSE_EQ|INE860A01027", // HCLTECH
  "NSE_EQ|INE280A01028", // TITAN
  "NSE_EQ|INE213A01029", // ONGC
  "NSE_EQ|INE522F01014", // COALINDIA
  "NSE_EQ|INE089A01023", // DRREDDY
  "NSE_EQ|INE361B01024", // DIVISLAB
  "NSE_EQ|INE158A01026", // HEROMOTOCO
  "NSE_EQ|INE038A01020", // HINDALCO
  "NSE_EQ|INE081A01020", // TATASTEEL
  "NSE_EQ|INE029A01011", // BPCL
  "NSE_EQ|INE918I01018", // BAJAJFINSV
  "NSE_EQ|INE059A01026", // CIPLA
  "NSE_EQ|INE066A01013", // EICHERMOT
  "NSE_EQ|INE123A01016", // SBILIFE
  "NSE_EQ|INE095A01012", // INDUSINDBK
  "NSE_EQ|INE628A01036", // UPL
  "NSE_EQ|INE437A01024", // APOLLOHOSP
  "NSE_EQ|INE795G01014", // HDFCLIFE
  "NSE_EQ|INE917I01010", // BAJAJ-AUTO
  "NSE_EQ|INE216A01030", // BRITANNIA
  "NSE_EQ|INE070A01015", // SHREECEM
  "NSE_EQ|INE765G01017", // ICICIGI
  "NSE_EQ|INE742F01042"  // ADANIPORTS
];



// Daily data for Nifty 50 for breakout detection
const instrumentKey = "NSE_INDEX|Nifty 50";
const interval = "day";
const fromDate = "2024-07-01";
const toDate = "2024-07-15";

const url = "https://api.upstox.com/v2/historical-candle";

const response = await axios.get(url, {
  params: {
    instrument_key: instrumentKey,
    interval: interval,
    from_date: fromDate,
    to_date: toDate
  },
  headers: {
    "Api-Version": "2.0",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

console.log(response.data);

// Example: Loop through all Nifty 50 stocks and run your breakout logic
async function main() {
  for (const symbol of nifty50InstrumentKeys) {
    const candles = await fetchCandles(symbol, INTERVAL, FROM_DATE, TO_DATE);
    if (candles.length > 0) {
      console.log(`\n=== ${symbol} ===`);
      detectBreakouts(candles);
    } else {
      console.log(`\nNo data for ${symbol}`);
    }
  }

  // Fetch Nifty 50 candles
  const niftyCandles = await fetchCandles(niftyKey, interval, from, to);

  // Fetch Bank Nifty candles
  const bankCandles  = await fetchCandles(bankNiftyKey, interval, from, to);

  console.log("Nifty 50 candles:", niftyCandles);
  console.log("Bank Nifty candles:", bankCandles);
}

main();