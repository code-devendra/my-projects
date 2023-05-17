const textInput = document.querySelector("#text-input");
const charOutput = document.querySelector("#characters");
const wordOutput = document.querySelector("#words");
const reset = document.querySelector("#reset");

textInput.addEventListener("input", () => {
  if (textInput.value == "") {
    charOutput.textContent = "00";
    wordOutput.textContent = "00";
    return;
  }
  let input = textInput.value.trim();
  let words = input.split(" ");
  charOutput.textContent = input.length;
  wordOutput.textContent = words.length;
});

reset.addEventListener("click", () => {
  textInput.value = "";
  charOutput.textContent = "00";
  wordOutput.textContent = "00";
});
