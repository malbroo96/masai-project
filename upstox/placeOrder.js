// placeOrder.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const ACCESS_TOKEN = process.env.SANDBOX_ACCESS_TOKEN;

const BASE_URL = "https://api-sandbox.upstox.com/v3/order/place";

const orderPayload = {
  quantity: 1,
  product: "D", // 'D' = Delivery, 'I' = Intraday
  validity: "DAY", // ✅ Correct field name
  price: 0,
  tag: "sandbox_test",
  instrument_token: "NSE_EQ|INE002A01018", // RELIANCE (sandbox)
  order_type: "MARKET",
  transaction_type: "BUY",
  disclosed_quantity: 0,
  trigger_price: 0,
  is_amo: false
};

async function placeOrder() {
  try {
    const response = await axios.post(BASE_URL, orderPayload, {
      headers: {
        "Api-Version": "2.0",
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    console.log("✅ Order Placed Successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error placing order:");
    console.error(error.response?.data || error.message);
  }
}

// placeOrder();

async function getAllOrders() {
  try {
    const response = await axios.get("https://api-sandbox.upstox.com/v3/order/history", {
      headers: {
        "Api-Version": "2.0",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      }
    });

    console.log("📋 All Orders:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching orders:");
    console.error(error.response?.data || error.message);
  }
}

getAllOrders();
