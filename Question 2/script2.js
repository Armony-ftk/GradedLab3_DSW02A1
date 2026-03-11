/* 
by: FATAKI NA
on: 3/11/2026

QUESTION 2
Please note that the requirement in the case study says that "each word of the user input phrase should be added to the list". Which makes the output different than the output snippet given on the question paper.
*/

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const userInput = document.getElementById("item");
const userList = document.getElementById("list");

let removedCount = 0;

addButton.addEventListener("click", function() {
    
    let text = userInput.value.trim();
    
    if (text.length === 0) {
        alert("You didn't enter anything.");
        return;
    }

    let words = text.split(" ")

    for (let i=0; i < words.length; i++) {
        if (words[i] !== "") {
            let listitem = document.createElement("li");
            listitem.textContent = words[i];
            userList.appendChild(listitem);
        }
    }

    userInput.value = "";
});

removeButton.addEventListener("click", function() {
    let textLower = userInput.value.toLowerCase();
    let items = document.getElementsByTagName("li");

    for (i=0; i<items.length; i++) {
        if (items[i].textContent.toLocaleLowerCase() = textLower) {

            let removedWord = items[i].textContent;

            userList.removeChild(items[i]);

            
        }
    }
}); 
