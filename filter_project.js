// const aboutUsImg = document.getElementById("aboutUsImage");
let itemNumber = 1

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

let item1 = new Food("https://images.unsplash.com/photo-1551059429-355bd51f6972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
"Cake Item", "£4", 0, 0 , "Cake");

let item2 = new Food("https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
"Cupcake Item", "£10", 0, 0, "Cupcake");

let item3 = new Food ("https://images.unsplash.com/photo-1509474458352-109268893243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
"Doughnut Item", "£7.50", 0, 0, "Doughnut");

let item4 = new Food ("https://images.unsplash.com/photo-1568051243858-533a607809a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"Cookie Item", "£5", 0, 0, "Cookie");

let item5 = new Food ("https://images.unsplash.com/photo-1453499988014-b7b65cc79c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"Cupcake Item", "£6", 0, 0, "Cupcake");

let item6 = new Food ("https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"Cake Item", "£7", 0, 0, "Cake");

let item7 = new Food ("https://cdn.pixabay.com/photo/2014/02/17/15/34/donuts-268250_960_720.jpg",
"Doughnut Item", "£4", 0, 0, "Doughnut");

let item8 = new Food ("https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
"Cake Item", "£6", 0, 0, "Cake");

let item9 = new Food ("https://images.unsplash.com/photo-1563076429-c04cbe68da3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"Cupcake Item", "£5", 0, 0, "Cupcake")

let item10 = new Food ("https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"Doughnut Item", "£8", 0, 0, "Doughnut");

let item11 = new Food ("https://images.unsplash.com/photo-1544883930-924db8d63597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
"Cookie Item", "£5", 0, 0, "Cookie")

let item12 = new Food ("https://cdn.pixabay.com/photo/2019/06/13/14/13/cheesecake-4271724_960_720.jpg",
"Cake Item", "£7", 0, 0, "Cake")

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

    let cardImageWrapper = document.createElement("div");
    let cardImage = document.createElement("div");
    
    cardImageWrapper.setAttribute("id", item+"foodBGWrapper");
    cardImageWrapper.setAttribute("class", "foodBGWrapper");
    foodCard.appendChild(cardImageWrapper);

    cardImage.setAttribute("id", item+"foodBackground")
    cardImage.setAttribute("class", "foodBackground")
    cardImage.setAttribute("foodType", foodItem["type"])
    cardImage.style.backgroundImage = "url("+foodItem["url"]+")"
    cardImageWrapper.appendChild(cardImage);

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

function foodFilter(food) {
    foodFilterReset();
    let itemArray = document.getElementsByClassName("inventoryItemCard");
    fadeInventoryOut();
    // alert("Test Cookie Click");

    setTimeout(() =>{
        for (let i = 0; i< itemArray.length; i++){
            let card = itemArray[i];
            let foodType = itemArray[i].querySelector(".foodBackground").getAttribute("foodtype");
            
            if (foodType != food){
                card.style.display ="none";
            }
        }; }, 200);

    setTimeout(fadeInventoryIn, 200);

}

function foodFilterResetBtn() {
    foodFilterReset();
    fadeInventoryOut();
    setTimeout(fadeInventoryIn, 200);
}

function foodFilterReset() {
    let itemArray = document.getElementsByClassName("inventoryItemCard");
    for (let i = 0; i< itemArray.length; i++){
        itemArray[i].style.transition = "0s ease-in-out"
        itemArray[i].style.display = "block";
    }
}

function fadeInventoryOut() {
    let itemArray = document.getElementsByClassName("inventoryItemCard");
    for (let i = 0; i< itemArray.length; i++){
        
        setTimeout(() => {
            itemArray[i].style.transition = "0.5s ease-in-out"}, 100
        );

        itemArray[i].style.opacity = "0";
        
    }

}

function fadeInventoryIn() {
    let itemArray = document.getElementsByClassName("inventoryItemCard")
    
    for (let i = 0; i< itemArray.length; i++){
        itemArray[i].style.transition = "0.4s ease-in-out"
        setTimeout(() => {
            itemArray[i].style.opacity = "1";}, 10
        );
    }
}

function populateInventory() {
    for (let i = 1; i < itemNumber; i++){
        createCard(eval("item"+i));
    }
}
let foodImages = document.getElementsByClassName("foodBackground");

function test(){
    // let foodImages = document.querySelectorAll(".foodBackground");
    document.body.addEventListener("click", () => {alert(foodImages.length);})
}


function foodSearch() {
    let search = document.getElementById("inventorySearchBar").value
    // set delay so it doesnt have to run everytime on keyup?
    let itemArray = document.getElementsByClassName("inventoryItemCard");

    let regSearch = new RegExp(search, "i");
    
    for (let i = 0; i< itemArray.length; i++) {
        let card = itemArray[i];
        let foodname = itemArray[i].querySelector(".foodTextName").innerHTML;

        let match = foodname.match(regSearch);

        // let match = foodname.match(search)


        // Use Regex to figure this out

        if (match == null) {
            card.style.display = "none";
        }

        else {
            card.style.display = "block";
        }

    }

    // alert(itemArray[0]);

}

function closeModal() {
    document.getElementById("myModal").style.display="none";
}


function openModal(foodImage) {
    let target = event.target
    // event.target.style.backgroundSize = "800px";
    document.getElementById("myModal").style.display="block";
    document.getElementById("modal-image-display").style.backgroundImage = "URL("+foodImage+")"
    // alert(foodImage);
}

function addFoodImageEvents () {
    for (let i = 0; i < foodImages.length; i++){
        let currentFood = eval("item"+(i+1))["url"];
    foodImages[i].addEventListener("click", () => {
        openModal(currentFood);}
    );
    }
}

function modalPrevious(event) {
    let currentImg = document.getElementById("modal-image-display").style.backgroundImage;
    currentImg = currentImg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    let displayedFoods = getDisplayedFoods();
    let modalIndex = displayedFoods.indexOf(currentImg)
    let newModalImg = ""
    // Loop Around
    if (modalIndex == 0){
        modalIndex = displayedFoods.length - 1;
        newModalImg = displayedFoods[modalIndex];
        // alert(modalIndex)
        // alert("working")
        // alert(newModalImg)
    }

    else{
        modalIndex -= 1
        newModalImg = displayedFoods[modalIndex];
        // alert(newModalImg)
    }
    // alert(modalIndex);

    document.getElementById("modal-image-display").style.backgroundImage= "URL("+newModalImg+")"
    // alert(newModalImg)

    event.stopPropagation();

}

function modalNext(event){
    let currentImg = document.getElementById("modal-image-display").style.backgroundImage;
    currentImg = currentImg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    let displayedFoods = getDisplayedFoods();
    let modalIndex = displayedFoods.indexOf(currentImg)
    let newModalImg = ""

    if (modalIndex == displayedFoods.length - 1){
        modalIndex = 0
        newModalImg = displayedFoods[modalIndex];
        // alert(modalIndex)
        // alert("working")
        // alert(newModalImg)
    }

    else{
        modalIndex += 1
        newModalImg = displayedFoods[modalIndex];
        // alert(newModalImg)
    }
    // alert(modalIndex);
    document.getElementById("modal-image-display").style.backgroundImage= "URL("+newModalImg+")"
    event.stopPropagation();
}

function getDisplayedFoods() {
    document.getElementById("myModal").style.display="block";
    // let allFoods = document.querySelectorAll(".inventoryItemCard")
    let itemArray = document.getElementsByClassName("inventoryItemCard");
    let displayedFoods = []
    let testNum = 0
    // alert(itemArray[0].innerHTML);
    for (let i = 0; i < itemArray.length; i++){
        // alert(itemArray.length)
        // alert(1)
        
        let card = itemArray[i];
        let item = eval("item"+(i+1))
        // alert(window.getComputedStyle(card).display);
        // alert(card.style.backgroundImage)
        // alert(card.innerHTML)
        // alert(card.style.display)
        if (window.getComputedStyle(card).display === "block"){
            // Get the ID and then just get the item URL from what you've created before
            displayedFoods.push(item["url"]);
            testNum += 1
        }

    }  
    return displayedFoods
}


document.getElementById("aboutUsImage").addEventListener("mouseenter", moveBorder);
document.getElementById("aboutUsImage").addEventListener("mouseleave", removeBorder);
document.getElementById("inventorySearchBar").addEventListener("keyup", foodSearch);
document.getElementById("myModal").addEventListener("click", closeModal);
// document.getElementById("modalBack").addEventListener("click", function(event){
//     event.stopPropogation();
// });

// TODO
// Add click events to buttons on Modal
// Fix the Phone Number at the top