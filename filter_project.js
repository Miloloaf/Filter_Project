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
    div.setAttribute("id", item); //not required to append ID here
    div.setAttribute("class", "inventoryItemCard")
    // div.innerHTML = "<div class="inventoryItemCard"> <div class="foodBackground"></div> <div class="foodText"> <div class="foodTextName">Cake Item</div> <div class="foodPrice">£5</div>";
    inventory.appendChild(div);
    let inventoryCard = document.getElementById(item)
    alert(document.getElementById(item).classList);
    // document.getElementById(item).classList.add("inventoryItemCard")
    // alert(div)
    let cardImage = document.createElement("div");
    cardImage.setAttribute("id", item+"foodBackground")
    cardImage.setAttribute("class", "foodBackground")
    inventoryCard.appendChild(cardImage);

    let foodTextContainer = document.createElement("div");
    let foodTextName = document.createElement("div");
    let foodPrice = document.createElement("div");

    foodTextContainer.setAttribute("id", item+"foodText");
    foodTextContainer.setAttribute("class", "foodText");

    foodTextName.setAttribute("id", item+"foodTextName");
    foodTextName.setAttribute("class", "foodTextName");
    foodTextName.textContent = "Foo"

    foodPrice.setAttribute("id", item+"foodPrice");
    foodPrice.setAttribute("class", "foodPrice");
    foodPrice.textContent = "Bar"

    foodTextContainer.appendChild(foodTextName);
    foodTextContainer.appendChild(foodPrice);
    inventoryCard.appendChild(foodTextContainer)

    // alert(document.getElementById(item).classList);

}

function test(){
    document.body.addEventListener("click", () => {alert("Test");})
}

document.getElementById("aboutUsImage").addEventListener("mouseenter", moveBorder);
document.getElementById("aboutUsImage").addEventListener("mouseleave", removeBorder);