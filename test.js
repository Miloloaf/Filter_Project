function Food (url, name, price, x, y, type) {
    this.url = url;
    this.name = name;
    this.price = price;
    this.x = x;
    this.y = y;
    this.type = type;
}



let item2 = new Food("https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"Cupcake Item", "£10", 0, 0, "Cupcake");

function Test(foodName) {
    console.log(foodName)
}

Test(item2)