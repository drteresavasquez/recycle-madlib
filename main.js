//This is the madlibs game words and riddle. To update, change the words to whatever part of speech you would like and change the riddle.
let madlibs = {
  // First word
  "1": "Adjective",
  //Second word
  "2": "Verb",
  //Third Word
  "3": "Adjective",
  //Fourth Word
  "4": "Noun",
  //Fifth Word
  "5": "Verb",
  //Sixth Word
  "6": "Adjective",
  //Seventh Word
  "7": "Noun",
  //Eighth Word
  "8": "Noun",
  //Nineth Word
  "9": "Noun",
  //Tenth Word
  "10": "Places",
  "11": "Verb",
  "12": "Plural noun",
  "13": "Verb",
  "14": "Noun",
  "15": "Noun",
  //replace all the words above with a "/" in yor riddle
  "riddle":
    "Recycling is a / habit, because it helps / our planet /. Recycling is important to keep landfills -- places where / is stored after we / it away -- from becoming too /. Not all items can be recycled, but /, /, and / are the most common. Many / allow people to / these items in special / to be recycled. If everyone /s in and recycles, this will mean less / and a better / for everyone."
};

// The code below places all of the elements that you see on the "Result" tab.

//This function starts the process by putting a heading and the first 2 paragraphs on the page.
function buildDOM() {
  $(".container").append(`
    <h3 class="page-heading">Recycling Fun...</h3>
    <div class="row">
        <div class="col code-app">            
        </div>
    </div>`);

  madlibsStart();
}
//Start the game by putting it on the webpage
buildDOM();

// This function builds the form to collect the users input and place it into the MadLibs riddle
function madlibsStart() {
  $(".code-app").html("");
  $(".code-app").append(`<div class="card mx-auto" style="width: 90%;">
        <div class="card-body">
            <h5 class="card-title">Enter Your Words...</h5>
            <p class="card-text word-inputs">     
            </p>
            <a href="#" id="code-button" class="btn btn-primary">Show Me The MadLib!</a>
        </div>
    </div>`);

  //randomly select a madlib from JSON file and add to DOM $(".word-inputs")
  generateMadlibs(madlibs);

  //get all user values and pass to printMadlibs() along with last element from JSON file (madlibs solution)
  $("#code-button").on("click", () => {
    let array = [
      $("#word1").val() ? $("#word1").val() : "",
      $("#word2").val() ? $("#word2").val() : "",
      $("#word3").val() ? $("#word3").val() : "",
      $("#word4").val() ? $("#word4").val() : "",
      $("#word5").val() ? $("#word5").val() : "",
      $("#word6").val() ? $("#word6").val() : "",
      $("#word7").val() ? $("#word7").val() : "",
      $("#word8").val() ? $("#word8").val() : "",
      $("#word9").val() ? $("#word9").val() : "",
      $("#word10").val() ? $("#word10").val() : "",
      $("#word11").val() ? $("#word10").val() : "",
      $("#word12").val() ? $("#word10").val() : "",
      $("#word13").val() ? $("#word10").val() : "",
      $("#word14").val() ? $("#word10").val() : "",
      $("#word15").val() ? $("#word10").val() : "",
      ""
    ];
    printMadlibs(array, lib);
  });
}

//This function takes the data from the madlibs object at the top of this file and manipulates it so that you can enter in your words.
function generateMadlibs(data) {
  let keys = Object.keys(data);
  let full = keys.pop();
  let value = data[full];

  // value.split("/") breaks the solution on "," to create array
  lib = value.split("/");

  keys.forEach(function(item) {
    $(".word-inputs").append(`
            <input type="text" class="form-control madlib-inputs" id="word${item}" placeholder="${data[item]}">`);
  });
}

//accepts array of user input and array of the solution to merge and print to DOM
function printMadlibs(array, lib) {
  $(".code-app").html("");
  $(".code-app").append(`<div class="card mx-auto" style="width: 90%;">
        <div class="card-body">
            <h5 class="card-title">Your Results</h5>
            <p class="card-text libs">
            </p>
            <a href="#" id="play-again-button" class="btn btn-primary">Play Again</a>
        </div>
    </div>`);

  lib.forEach((item, index) => {
    $(".card-text").append(`${item} <strong><u>${array[index]}<u></strong>`);
  });

  $("#play-again-button").on("click", () => {
    //start a new random madlib
    madlibsStart();
  });
}
