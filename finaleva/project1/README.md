# Wealthy - Personal Finance Web App

This is a simple personal finance project built with **HTML, CSS, and JavaScript**, and deployed on **Netlify**.  
It also uses **Firebase** for authentication and database storage.

🔗 Live Demo: [Wealthy on Netlify](https://delightful-sprinkles-8e91a9.netlify.app/index.html)

---

## 📌 Features

- **Login & Register** page
  - Connected with Firebase authentication
- **Home Page**
  - Fetches and displays live **Finance News** from the [NewsData.io API](https://newsdata.io/)
  - API endpoint used:
    ```js
    const baseUrl = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&category=business&language=en`;
    ```
- **Personal Finance Tracker**
  - Input monthly salary and expenses
  - Automatically generate spending breakdown using charts
  - Compare with the **50-30-20 budgeting rule**
- **Investments Page**
  - Quick links to Demat Account, Google Pay, Digital Gold, and Mutual Funds
- **Basic Chatbot Integration**
  - Test chatbot built using **Hugging Face Inference API**
  - Model endpoint:
    ```js
    const HF_API_URL =
      "https://api-inference.huggingface.co/models/facebook/bart-large-mnli";
    ```
- **Firebase Integration**
  - Stores user authentication and user data

---

## 🛠️ Tech Stack

- **HTML** – Page structure
- **CSS** – Styling and layouts
- **JavaScript** – Functionality (charts, form handling, API integration, Firebase logic)
- **Firebase** – Authentication and database
- **NewsData.io API** – Fetching finance news
- **Hugging Face API** – Test chatbot integration
- **Netlify** – Deployment

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone <your-repo-link>
   Open the project folder.
   ```

Update Firebase configuration in firebase.js with your own Firebase project credentials.

Add your NewsData.io API Key and Hugging Face API Key in the respective JS files.

Open index.html in your browser.
(No backend server needed since it’s a static app.)

⚙️ Config File Setup

Create a config.js file at the root of your project and provide your keys.

Sample:

```
// config.js
const HF_API_TOKEN = "your_huggingface_api_token_here";
const HF_API_URL =
"https://api-inference.huggingface.co/models/facebook/bart-large-mnli";

const NEWS_API_KEY = "your_newsapi_key_here";

const firebaseConfig = {
apiKey: "ABCD",
authDomain: "wealthy-cac7b.firebaseapp.com",
projectId: "wealthy-cac7b",
storageBucket: "wealthy-cac7b.appspot.com",
messagingSenderId: "819937615061",
appId: "1:819937615061:web:0b36637c108535a56e565c",
measurementId: "G-9GF1PS2LHZ",
};
```

📂 Project Structure
.
├── index.html # Login / Register page
├── home.html # Homepage with news
├── personalfinance.html # Personal Finance Tracker with charts
├── investment.html # Investment links

🌐 Live Demo

👉 [Wealthy on Netlify](https://delightful-sprinkles-8e91a9.netlify.app/index.html)

📧 Contact

For any queries, reach out at: akhiljoseph225292@gmail.com
