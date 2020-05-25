// const aboutUsImg = document.getElementById("aboutUsImage");
let itemNumber = 2

function Food (url, name, price, x, y, type) {
    this.url = url;
    this.name = name;
    this.price = price;
    this.x = x;
    this.y = y;
    this.type = type;
    this.number = itemNumber;
    itemNumber += 1; 
}



let item2 = new Food("https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"Cupcake Item", "£10", 0, 0, "Cupcake");

let item3 = new Food ("https://images.unsplash.com/photo-1509474458352-109268893243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
"Doughnut Item", "£7.50", 0, 0, "Doughnut");

function moveBorder() {
    document.getElementById("aboutUsImageBorder").classList.add("static")
}

function removeBorder() {
    document.getElementById("aboutUsImageBorder").classList.remove("static");
}

function createCard(foodItem) {
    let inventory = document.getElementById("inventory");
    let item = "item" + toString(foodItem["number"]);

    let foodCard =  document.createElement("div");
    foodCard.setAttribute("id", item);
    foodCard.setAttribute("class", "inventoryItemCard")

    inventory.appendChild(foodCard);

    let cardImage = document.createElement("div");

    cardImage.setAttribute("id", item+"foodBackground")
    cardImage.setAttribute("class", "foodBackground")
    cardImage.setAttribute("foodType", foodItem["type"])
    cardImage.style.backgroundImage = "url("+foodItem["url"]+")"
    foodCard.appendChild(cardImage);

    let foodTextContainer = document.createElement("div");
    let foodTextName = document.createElement("div");
    let foodPrice = document.createElement("div");

    foodTextContainer.setAttribute("id", item+"foodText");
    foodTextContainer.setAttribute("class", "foodText");

    foodTextName.setAttribute("id", item+"foodTextName");
    foodTextName.setAttribute("class", "foodTextName");
    foodTextName.textContent = foodItem["name"]

    foodPrice.setAttribute("id", item+"foodPrice");
    foodPrice.setAttribute("class", "foodPrice");
    foodPrice.textContent = foodItem["price"];

    foodTextContainer.appendChild(foodTextName);
    foodTextContainer.appendChild(foodPrice);
    foodCard.appendChild(foodTextContainer);

}

function testGridText () {
    let inventory = document.getElementById("inventory");

    let test = document.createElement("div")
    test.textContent = "123 Test";
    test.style.width = "300px";
    test.style.height ="300px";
    test.style.backgroundColor = "blue"

    inventory.appendChild(test)
}


function populateInventory() {
    createCard(item2);
    createCard(item3);
}

function test(){
    document.body.addEventListener("click", () => {alert("Test");})
}

document.getElementById("aboutUsImage").addEventListener("mouseenter", moveBorder);
document.getElementById("aboutUsImage").addEventListener("mouseleave", removeBorder);