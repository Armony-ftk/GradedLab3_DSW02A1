/* 
by: FATAKI NA
on: 3/11/2026

QUESTION 2
*/

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

addButton.addEventListener("click", function() {
    let input = document.getElementById("item");
    let userInput = input.value;
    let userList = document.getElementById("list");
    if (userInput !== null & userInput.trim().length !== 0) {
        let newItem = document.createElement("li");
        newItem.textContent = userInput;
        userList.appendChild(newItem);
    }
    else {
        alert("You didn't enter anything.")
    }

    input.value = "";
});

removeButton.addEventListener("click", function() {
    
});