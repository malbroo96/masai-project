const transactions = [
  { id: 1, type: "income", category: "Salary", amount: 5000, date: "2024-01-10" },
  { id: 2, type: "expense", category: "Groceries", amount: 1200, date: "2024-01-12" },
  { id: 3, type: "expense", category: "Rent", amount: 2000, date: "2024-01-05" },
  { id: 4, type: "income", category: "Freelance", amount: 1500, date: "2024-01-20" },
  { id: 5, type: "expense", category: "Utilities", amount: 500, date: "2024-01-25" }
];


const totalincome=transactions.filter(({type})=> type ==="income").map(({amount})=>amount).reduce((cur,acc)=>cur+acc,0)
const totalexpence=transactions.filter(({type})=> type ==="expense").map(({amount})=>amount).reduce((cur,acc)=>cur+acc,0)
const Netbalance=totalincome-totalexpence


console.log("Total Income:",totalincome)
console.log("Total Expence:",totalexpence)
console.log("Net Balance:",Netbalance)