function generatePin() {
  const randomNumber = Math.round(Math.random() * 1000000);
  const randomNumberToString = "" + randomNumber;
  const numberLength = randomNumberToString.length;
  if (numberLength == 6) {
    document.getElementById("show-random-secret-key").value = randomNumber;
  }
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  console.log(event.target.innerText);
  if (
    event.target.innerText != "CLEAR" &&
    event.target.innerText != "X" &&
    event.target.innerText != "SUBMIT" &&
    event.target.innerText.length < 2
  ) {
    setInput(event.target.innerText);
  } else if (event.target.innerText == "CLEAR") {
    document.getElementById("typed-numbers").value = "";
  } else if (event.target.innerText == "X") {
    const typedF = document.getElementById("typed-numbers");
    let typedNumbers = typedF.value;
    typedF.value = typedNumbers.slice(0, typedNumbers.length - 1);
  }
});

function setInput(input) {
  const typedField = document.getElementById("typed-numbers");
  const typedInput = typedField.value;
  if (typedInput.length < 6) {
    let typedNumber = typedField.value + input;
    typedField.value = typedNumber;
  }
}

function verifyPin() {
  const randomNumber = document.getElementById("show-random-secret-key").value;
  const typedNumber = document.getElementById("typed-numbers").value;
  document.getElementById("notify-success").style.display = "none";
  document.getElementById("notify-fail").style.display = "none";
  if (randomNumber != "" && typedNumber != "") {
    if (randomNumber == typedNumber) {
      document.getElementById("notify-success").style.display = "inline";
    } else {
      document.getElementById("notify-fail").style.display = "inline";
    }
  }
}
