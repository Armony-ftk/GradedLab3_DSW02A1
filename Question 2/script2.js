/* 
by: FATAKI NA
on: 3/11/2026

QUESTION 2
Please note that the requirement in the case study says that "EACH WORD of the user input phrase should be added to the list". Which makes the output different than the output snippet given on the question paper.
*/

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const userInput = document.getElementById("item");
const userList = document.getElementById("list");

const removedArea = document.createElement("div");
removedArea.id = "removed-items";
const removedCounter = document.createElement("p");
removedCounter.id = "removed-count";
document.body.appendChild(removedCounter);
document.body.appendChild(removedArea);

let removedCount = 0;

addButton.addEventListener("click", function () {
  let text = userInput.value.trim();

  if (text.length === 0) {
    alert("You didn't enter anything.");
    return;
  }

  let words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      let listitem = document.createElement("li");
      listitem.textContent = words[i];
      userList.appendChild(listitem);
    }
  }

  changeColors();

  userInput.value = "";
});

removeButton.addEventListener("click", function () {
  let text = userInput.value.trim().toLowerCase();
  let items = userList.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.toLowerCase() === text) {
      let removedWord = items[i].textContent;

      list.removeChild(items[i]);

      let removedDiv = document.createElement("div");
      removedDiv.textContent = removedWord;
      removedDiv.style.color = "red";
      removedDiv.style.fontWeight = "bold";

      removedArea.appendChild(removedDiv);

      removedCount++;

      removedCounter.textContent = "Items removed: " + removedCount;
      removedCounter.style.color = "green";

      break;
    }
  }

  changeColors();

  userInput.value = "";
});

function changeColors() {
  let items = userList.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      items[i].style.backgroundColor = "white";
    } else {
      items[i].style.backgroundColor = "yellow";
    }
  }
}
