// document.getElementById("count-el").innerText = 5;


// intialixe the count 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 

let count = 0;
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("count-p")



function increment(){
    count = count + 1;
    countEl.innerText = count 
   
    console.log(count)
}

function save(){
    count = count;
    saveBtn.innerText = count

}
