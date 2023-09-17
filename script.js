// document.getElementById("count-el").innerText = 5;


// intialixe the count 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 


// let gitDoc = document.getElementById("welcome-el")

// let name = "David Cody Hawley"
// let greeting = "Hi my name is "
// let totalGreeting = greeting + name;


// gitDoc.innerText = totalGreeting

// gitDoc.innerText += "🤝"

let count = 0;
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("save-l")



function increment(){
    count += 1;
    countEl.innerText = count 
    console.log(count)
}

function save(){
    let newCount = ` ${count + " - "}`
    saveBtn.innerText += newCount 
    countEl.innerText = 0 
    count = 0;
}
