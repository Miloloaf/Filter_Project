// const aboutUsImg = document.getElementById("aboutUsImage");

function Food (url, name, price, x, y) {
    this.url = url;
    this.name = name;
    this.price = price;
    this.x = x;
    this.y = y;
}

var div =  document.createElement("div");

let item2 = new Food("https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"Cupcake Item", "£10", 0, 0)

function moveBorder() {
    document.getElementById("aboutUsImageBorder").classList.add("static")
}

function removeBorder() {
    document.getElementById("aboutUsImageBorder").classList.remove("static");
}

function createCard() {
    let inventory = document.getElementById("inventory");
    let item = "item2";
    div.setAttribute("id", item);
    inventory.appendChild(div);
    document.getElementById(item).classList.add("inventoryItemCard")
    document.getElementById(item).classList.add("foodBackground")

}

function test(){
    document.body.addEventListener("click", () => {alert("Test");})
}

document.getElementById("aboutUsImage").addEventListener("mouseenter", moveBorder);
document.getElementById("aboutUsImage").addEventListener("mouseleave", removeBorder);