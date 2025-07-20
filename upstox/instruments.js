import fs from 'fs';

function extractNifty50InstrumentKeys() {
  const nifty50Symbols = [
    "RELIANCE", "HDFCBANK", "ICICIBANK", "INFY", "TCS", "LT", "SBIN", "ITC", "AXISBANK", "KOTAKBANK",
    "BHARTIARTL", "HINDUNILVR", "BAJFINANCE", "ASIANPAINT", "MARUTI", "HCLTECH", "SUNPHARMA",
    "ULTRACEMCO", "WIPRO", "POWERGRID", "ONGC", "NTPC", "TITAN", "TECHM", "ADANIENT", "ADANIPORTS",
    "JSWSTEEL", "GRASIM", "TATASTEEL", "CIPLA", "HDFCLIFE", "BPCL", "DIVISLAB", "DRREDDY", "INDUSINDBK",
    "BAJAJFINSV", "SBILIFE", "EICHERMOT", "HEROMOTOCO", "COALINDIA", "BRITANNIA", "APOLLOHOSP",
    "UPL", "TATACONSUM", "HINDALCO", "BAJAJ-AUTO", "NESTLEIND", "M&M", "SHREECEM"
  ];

  try {
    const mtfData = JSON.parse(fs.readFileSync('./MTF.json', 'utf-8'));

    const instrumentKeys = mtfData
      .filter(item => nifty50Symbols.includes(item.trading_symbol))
      .map(item => item.instrument_key);

    console.log("✅ Nifty 50 Instrument Keys:");
    console.log(instrumentKeys);

    return instrumentKeys;
  } catch (error) {
    console.error("❌ Error reading or parsing MTF.json:", error.message);
    return [];
  }
}

extractNifty50InstrumentKeys();
