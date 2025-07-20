// backtest‑upstox.js
// Usage: node backtest‑upstox.js SYMBOL YYYY‑MM‑DD‑HH:mm YYYY‑MM‑DD‑HH:mm

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// --- CONFIGURATION ---
// put your Upstox credentials in a .env file
const API_KEY     = process.env.UPSTOX_API_KEY
const API_SECRET  = process.env.UPSTOX_API_SECRET
const ACCESS_TOKEN= process.env.UPSTOX_ACCESS_TOKEN

// --- UTILITY: fetch historical candles from Upstox ---
// async function fetchCandles(symbol, from, to, resolution = '15MIN') {
//   const url = `https://api.upstox.com/historical/candles`
//   const params = { symbol, resolution, from, to }
//   const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` }

//   const resp = await axios.get(url, { params, headers })
//   // resp.data.candles is an array of [timestamp, open, high, low, close, volume]
//   return resp.data.candles.map(c => ({
//     time:   new Date(c[0]),
//     open:   c[1], high: c[2], low: c[3], close: c[4],
//     volume: c[5]
//   }))
// }

async function fetchCandles(symbol, from, to, interval = '15minute') {
  const url = `https://api.upstox.com/v3/historical-candle`;

  const params = {
    instrument_key: symbol,
    interval,
    from_date: from,
    to_date: to
  };

  const headers = {
    'Api-Version': '2.0',
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  };
  try {
    const resp = await axios.get(url, { params, headers });

    const candles = resp.data.data?.candles || [];

    return candles.map(c => ({
      time:   new Date(c[0]),
      open:   c[1],
      high:   c[2],
      low:    c[3],
      close:  c[4],
      volume: c[5]
    }));
  } catch (err) {
    console.error(`❌ Error fetching candles for ${symbol}:`, err.response?.data || err.message);
    return [];
  }
}

// --- STRATEGY: support‑resistance range trading ---
function backtestSideways(candles) {
  // find support & resistance over the entire period (or a lookback)
  const lows  = candles.map(c => c.low)
  const highs = candles.map(c => c.high)
  const support    = Math.min(...lows)
  const resistance = Math.max(...highs)

  let trades = 0, wins = 0

  for (let i = 1; i < candles.length; i++) {
    const price = candles[i].close

    // enter long when price nears support
    if (price <= support * 1.01) {
      trades++
      const entry  = price
      const sl     = entry * 0.995
      const target = entry * 1.01
      let result   = 'loss'

      // simulate next up to 10 candles
      for (let j = i + 1; j < Math.min(candles.length, i + 11); j++) {
        if (candles[j].low <= sl) {
          break       // stop‑loss hit
        }
        if (candles[j].high >= target) {
          result = 'win'
          break
        }
      }
      if (result === 'win') wins++
    }

    // similarly, you could implement a short entry near resistance...
  }

  console.log(`Total trades: ${trades}`)
  console.log(`Wins:         ${wins}`)
  console.log(`Win rate:     ${(wins / trades * 100).toFixed(2)}%`)
}

// --- MAIN ---
;(async () => {
  const [ , , symbol, from, to ] = process.argv
  if (!symbol || !from || !to) {
    console.error('Usage: node backtest‑upstox.js SYMBOL FROM TO')
    console.error(' e.g.: node sideways.js NSE_EQ:RELIANCE 2025-07-01-09:15 2025-07-19-15:30')
    process.exit(1)
  }

  try {
    const candles = await fetchCandles(symbol, from, to)
    console.log(`Fetched ${candles.length} candles for ${symbol}`)
    backtestSideways(candles)
  } catch (err) {
    console.error('Error fetching data:', err.response?.data || err.message)
  }
})()
