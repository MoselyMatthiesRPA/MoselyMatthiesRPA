let chance = 50;
let chancePercent;

function showAlert() {
  var randomNumber = Math.floor(Math.random() * chance) + 1;
  chance *= 1.05;
  chancePercent = 100 / chance;
  console.log("Chance: ", chancePercent);
  if (randomNumber === 1) {
    alert("play stupid games, win stupid prizes");
  }
}
function addNumbers() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var sum = Number(num1) + Number(num2);
  document.getElementById("result").innerText = "Result: " + sum;
}
