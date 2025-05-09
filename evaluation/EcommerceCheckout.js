const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        if (typeof item.price !== 'number' || isNaN(item.price)) {
            console.log("Invalid price.");
            return;
        }
        this.items.push(item);
        this.total += item.price;
    },

    getTotal() {
        return `Total: $${parseFloat(this.total).toFixed(2)}`;
    }
};

// Fixing the first item by converting price to a number
checkout.addItem({ name: "Coffee Maker", price: 99.95 });
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Output: Total: $103.45
// Adding an item with a non-numeric price
checkout.addItem({ name: "Invalid Item", price: "Free" }); // Invalid price.