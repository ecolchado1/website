//Function for clicking on the "bigger" button
function bigAlert() {
    alert("Increasing Font Size to 24pt");
    document.getElementById("textArea").style.fontSize = "4em";
}

function upperCase() {
    alert("MOOO")
    let textArea = document.getElementById("textArea");
    let text = textArea.value;
    let sentance = text.split(".");

    //For each sentance add "-Moo"
    for (let i = 0; i < sentance.length; i++) {
        let words = sentance[i].split(" ");
        words[words.length-1] = words[words.length-1] + "-Moo";
        sentance[i] = words.join(" ");
    }

    //Join sentences back together
    textArea.value = sentance.join(".");
}

//Functions for radio buttons
function makeFancy() {
    alert("Make it Fancy!");
    let textArea = document.getElementById("textArea");
    textArea.style.backgroundColor = "pink";
    textArea.style.color = "blue";
    textArea.style.fontWeight = "bold";
    textArea.style.textDecoration = "underline";
}

function makeBoring() {
    let textArea = document.getElementById("textArea");
    textArea.style.backgroundColor = "";
    textArea.style.color = "";
    textArea.style.fontWeight = "";
    textArea.style.textDecoration = "";
}

document.getElementById("fancyRadio").addEventListener("change", makeFancy);
document.getElementById("boringRadio").addEventListener("change", makeBoring);
document.getElementById("bigButton").addEventListener("click", bigAlert);
document.getElementById("mooButton").addEventListener("click", upperCase);