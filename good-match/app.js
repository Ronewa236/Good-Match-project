//
const person1 = document.querySelector("[data-person-one]");
const person2 = document.querySelector("[data-person-two]");
const resulttag = document.querySelector("[data-result]");
const matchBtn = document.querySelector("[data-match-btn]");
const csv = document.querySelector("[data-load-csv]");
const csvOutput = document.querySelector("[data-csv-output]");
const downloadLink = document.querySelector("[data-file-download]");

// hide download link until user uploads csv file
downloadLink.style.display = "none";

/* 
    Get how many times each character occured in the sentence
*/
function getNumberOfChars(input) {
  let occurance = "";
  let checked = [];
  let sentence = input.split("").filter((x) => x !== " ");

  for (let a = 0; a < sentence.length; a++) {
    counter = 0;

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[a] === sentence[i] && !checked.includes(sentence[i])) {
        counter++;
      }
    }

    checked.push(sentence[a]);
    if (counter > 0) {
      occurance = occurance + "" + counter;
    }
    counter = 0;
  }
  return occurance;
}

/*
    Reduce that number to a 2 digit
*/

const reduceToTwo = (input) => {
  let characterNumbers = input;
  let toReturn = "";

  while (characterNumbers.length > 2) {
    const first = characterNumbers[0];
    const last = characterNumbers[characterNumbers.length - 1];
    toReturn = toReturn + (parseInt(first) + parseInt(last));

    if (characterNumbers.length == 3) {
      characterNumbers = characterNumbers.substring(1, 2);
    }

    characterNumbers = characterNumbers.substring(
      1,
      characterNumbers.length - 1
    );
  }

  if (characterNumbers.length === 1) {
    toReturn = toReturn + characterNumbers;
  }

  if (characterNumbers.length === 2 && toReturn == "") {
    return characterNumbers;
  }
  if (characterNumbers.length === 2 && toReturn.length > 0) {
    const first = characterNumbers[0];
    const last = characterNumbers[characterNumbers.length - 1];
    toReturn = toReturn + (parseInt(first) + parseInt(last));
    characterNumbers = "";
  }

  return reduceToTwo(toReturn);
};

/* 
    When clicking Find Match button
*/
matchBtn.addEventListener("click", () => {
  if (person1.value.length > 1 && person1.value !== "") {
    const input = `${person1.value} matches ${person2.value}`.toLowerCase();

    const perc = reduceToTwo(getNumberOfChars(input));

    resulttag.textContent = outputResults(input, perc);
  } else {
    alert("Enter valid names");
  }
});

const outputResults = (input, perc) => {
  if (parseInt(perc) > 80) {
    return `${input} ${perc}%, good match`;
  } else {
    return `${input} ${perc}%`;
  }
};

/*
    When you upload a CSV file
*/
let csvData = [];
let csvMales = [];
let csvFemales = [];
let csvOverallResults = [];

const matchCsvData = (set1, set2) => {
  let textToFile = "";
  for (let i = 0; i < set1.length; i++) {
    const heading = document.createElement("h3");
    heading.classList.add("output-heading");
    heading.innerText = `${getName(set1[i])} matches`;
    csvOutput.appendChild(heading);
    textToFile = `${textToFile}\n${getName(set1[i])} matches:`;

    for (let j = 0; j < set2.length; j++) {
      const input = `${getName(set1[i])} matches ${getName(
        set2[j]
      )}`.toLowerCase();
      const perc = reduceToTwo(getNumberOfChars(input));

      const paragraph = document.createElement("p");
      paragraph.innerHTML = outputResults(input, perc);
      csvOutput.appendChild(paragraph);
      textToFile = `${textToFile}\n${outputResults(input, perc)}`;
    }
  }

  console.log(textToFile);
  makeTextFile(textToFile);
};

let fileHandle;

/* 
    Write results of CSV file to text file
*/
const makeTextFile = async function (text) {
  async function getNewFileHandle() {
    const options = {
      types: [
        {
          description: "Text Files",
          accept: {
            "text/plain": [".txt"],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    return handle;
  }

  fileHandle = await getNewFileHandle();

  const stream = await fileHandle.createWritable();
  await stream.write(text);
  await stream.close();
};
/* 
    When you click to pick csv file from system
*/
csv.addEventListener("change", (e) => {
  readFile = function () {
    var reader = new FileReader();
    reader.onload = function () {
      csvData = reader.result.split("\r\n");

      csvData.forEach((item) => {
        if (item.substring(item.length - 1) == "f") {
          if (!csvFemales.includes(item)) {
            csvFemales.push(item);
          }
        } else {
          if (!csvMales.includes(item) && item != "") {
            csvMales.push(item);
          }
        }
      });

      console.log("Females: /n", csvFemales);
      console.log("Males: /n", csvMales);

      matchCsvData(csvMales, csvFemales);
    };
    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsBinaryString(e.target.files[0]);
  };

  readFile();
});

const getName = (text) => {
  const index = text.indexOf(",");
  text = text.substring(0, index);
  return text;
};
