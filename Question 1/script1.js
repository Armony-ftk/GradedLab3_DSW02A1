/* 
by: FATAKI NA
on: 3/11/2026

QUESTION 1 
*/

const executeButton = document.getElementById("Execute");

executeButton.addEventListener("click", function () {
  const userInput = document.getElementById("sentence").value;
  let output = "",
    count = 0;
  let words = userInput.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/[^A-Za-z0-9_-]/g, "");
    if (word !== "") {
      output += "<u>" + word + "</u>" + " ";
      count++;
    }
  }
  document.getElementById("words").innerHTML = output;
  document.getElementById("sent-count").value = count;
});
