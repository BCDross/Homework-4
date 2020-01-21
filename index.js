let words = Array();
let swappedWords = Array();

function enterWords() {
  words = [];
  let remove = document.getElementById("unswappedList");
  let child = document.getElementById("unswappedList").firstChild;
  if (remove.hasChildNodes()) {
    remove.removeChild(child);
  }

  for (var i = 0; i < 3; i++) {
    words.push(prompt("Please enter a word"));
  }

  let wordListContainer = document.createElement("div"),
    wordListElement = document.createElement("ul"),
    numberOfWords = words.length,
    listWord;

  document.getElementById("unswappedList").appendChild(wordListContainer);
  wordListContainer.appendChild(wordListElement);

  for (i = 0; i < numberOfWords; i++) {
    listWord = document.createElement("li");
    let text = document.createTextNode(words[i]);
    listWord.appendChild(text);
    wordListElement.appendChild(listWord);
  }

  document.getElementById("wordWorkspace").style.display = "block";
  document.getElementById("letterSwappedBoard").style.display = "none";
}

function swapLetters() {
  swappedWords = [];
  let remove = document.getElementById("swappedList");
  let child = document.getElementById("swappedList").firstChild;
  if (remove.hasChildNodes()) {
    remove.removeChild(child);
  }

  swappedWords = words.map(word => swap(word));

  let swappedWordListContainer = document.createElement("div"),
    swappedWordListElement = document.createElement("ul"),
    numberOfWords = swappedWords.length,
    listSwappedWord;

  document.getElementById("swappedList").appendChild(swappedWordListContainer);
  swappedWordListContainer.appendChild(swappedWordListElement);

  for (let i = 0; i < numberOfWords; i++) {
    listSwappedWord = document.createElement("li");
    let text = document.createTextNode(swappedWords[i]);
    listSwappedWord.appendChild(text);
    swappedWordListElement.appendChild(listSwappedWord);
    console.log(numberOfWords);
    console.log(swappedWords[i]);
  }

  document.getElementById("wordWorkspace").style.display = "none";
  document.getElementById("letterSwappedBoard").style.display = "block";
}

function swap(word) {
  let first = word.substring(0, 1);
  let last = word.substring(word.length - 1, word.length);
  let middle = word.substring(1, word.length - 1);

  let newWord = last.concat(middle, first);

  return newWord;
}
