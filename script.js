var guessInt = 7;

var guessStr = "Tries Left: " + guessInt;

function getWord() {
    var words = ["CRAZIEST", "MARCHED", "AUTHENTIC", "SIGNIFICANT", "REFRIGERATE",  ];

    var index = Math.floor(Math.random() * words.length);

    return words[index];
}

function getDisplay(word) {
    var display = "";

    for (i = 0; i < word.length; i++) {
        display = display + "-";
    }

    return display;

}

function isLetterInWord(word, letter) {
    if (word == null || guessInt == 0) {
        return;
    }
    else {
        if (word.search(letter) != -1) {
            setLetter(word, letter, document.getElementById("theDashes").innerHTML);
        }
        else {
            guessInt = guessInt - 1;
            guessStr = "Tries Left: " + guessInt;
            var guessesVar = document.getElementById("guesses");
            guessesVar.innerHTML = guessStr;
        }

        isFinished(word, document.getElementById("theDashes").innerHTML, guessInt);

    }
        if (guessInt == 6) {
            document.getElementById("photo").src = " img/hangman1.jpg";
        }

        if (guessInt == 5) {
            document.getElementById("photo").src = " img/hangman2.jpg";
        }

        if (guessInt == 4) {
            document.getElementById("photo").src = " img/hangman3.jpg";
        }

        if (guessInt == 3) {
            document.getElementById("photo").src = " img/hangman4.jpg";
        }

        if (guessInt == 2) {
            document.getElementById("photo").src = " img/hangman5.jpg";
        }

        if (guessInt == 1) {
            document.getElementById("photo").src = " img/hangman6.jpg";
        }

        if (guessInt == 0) {
            document.getElementById("photo").src = " img/hangman7.jpg";
        }


}

function setLetter(word, letter, display) {
    if (word == null || guessInt == 0) {
        return;
    }
    else {
        while (word.search(letter) != -1) {
            var index = word.search(letter);
            display = display.substr(0, index) + letter + display.substr(index + 1);
            word = word.substr(0, index) + "-" + word.substr(index + 1);
        }

        var theDashesVar = document.getElementById("theDashes");
        theDashesVar.innerHTML = display;
    }
}

function isFinished(word, display, left) {
    if (left > 0) {
        if (word == display) {

            var theStatusVar = document.getElementById("theStatus");
            theStatusVar.innerHTML = "Winner!";


        }
    }
    else {
        var theStatusVar = document.getElementById("theStatus");
        theStatusVar.innerHTML = "Time to hang for your failures, the word was: " + word;
    }

}

function start() {

    guessInt = 7;

    guessStr = "Tries Left: " + guessInt;

    var word = getWord();

    var display = getDisplay(word);

    document.getElementById("guesses").innerHTML = guessStr;

    document.getElementById("theWord").innerHTML = word;

    document.getElementById("theDashes").innerHTML = display;

    document.getElementById("theStatus").innerHTML = "";

    document.getElementById('keyboard').style.display ="block";

    document.getElementById('start-button').style.display ="none";



}
