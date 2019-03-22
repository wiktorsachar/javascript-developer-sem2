/* Write function that translates a text to Pig Latin and back. English is translated 
to Pig Latin by taking the first letter of every word, moving it to the end of the word and
adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.*/

let choiceOfTranslation = "not changed";
let text;

function translationChanger1() {
  choiceOfTranslation = 1;
  console.log("type1 activated");
}

function translationChanger2() {
  choiceOfTranslation = 2;
  console.log("type2 activated");
}

function textChanger() {
  text = document.getElementById("pig-latin").value;
  console.log(text);
}

function router() {
  if (choiceOfTranslation == 1) {
    pigLatinToEnglish(text);
    console.log("router to english");
  } else if (choiceOfTranslation == 2) {
    englishToPigLatin(text);
    console.log("router to latin");
  } else {
    console.log("choiceOfTranslation doesnt work");
    console.log(choiceOfTranslation);
  }
  console.log("router activated");
}

function pigLatinToEnglish(textToTranslate) {
  let arrayOfStrings = textToTranslate.split(" ");
  for (let i = 0; i < arrayOfStrings.length; i++) {
    let stringLowerCase = arrayOfStrings[i].toLowerCase();
    let stringSplit = stringLowerCase.split("");
    let firstLetter = stringSplit.splice(0, 1);
    stringSplit.push(firstLetter[0], "ay");
    arrayOfStrings[i] = stringSplit.join("");
  }
  let firstString = arrayOfStrings[0].split("");
  firstString[0] = firstString[0].toUpperCase();
  arrayOfStrings[0] = firstString.join("");
  let result = arrayOfStrings.join(" ");
  console.log("pigLatinToEnglish activated");
  document.getElementById("text-translated").innerHTML = result;
}

function englishToPigLatin(textToTranslate) {
  let arrayOfStrings = textToTranslate.split(" ");
  for (let i = 0; i < arrayOfStrings.length; i++) {
    let stringLowerCase = arrayOfStrings[i].toLowerCase();
    let stringSplit = stringLowerCase.split("");
    stringSplit.splice(stringSplit.length - 2, 2);
    let lastLetter = stringSplit.pop();
    stringSplit.unshift(lastLetter);
    arrayOfStrings[i] = stringSplit.join("");
  }
  let firstString = arrayOfStrings[0].split("");
  firstString[0] = firstString[0].toUpperCase();
  arrayOfStrings[0] = firstString.join("");
  let result = arrayOfStrings.join(" ");
  console.log("englishToPigLatin activated");
  document.getElementById("text-translated").innerHTML = result;
}
