// let textbox = document.getElementById("textBox")
// let repeat = document.getElementById("echo")

// function Echoer () {
//     alert(textbox.value);
//     repeat.innerText = textbox.value;
// }

// textbox.addEventListener("keyup", Echoer)

let string = "Hello World"
let regStr = "El"

let regex = new RegExp(regStr, "i")

let match =  string.match(regex);

if (match == null){
    console.log("No Match")
}

else {
    console.log("Match Found")
};

console.log(match)