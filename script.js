//Defines that input text and the output text
const output = document.getElementById("output");
const inputText = document.getElementById("inputText").value;

//Defines the team info in the teaminfo div
const teamnaam = document.getElementById("teamnaam");
const sport = document.getElementById("sport");
const beschrijving = document.getElementById("beschrijving");

//List of my favourite teams
const ferrari = {
    name: "Scuderia Ferrari",
    sport: "Formule 1",
    beschrijving: "Scuderia Ferrari is een race team in de Formule 1.",
};

const redbull = {
    name: "Red Bull Racing",
    sport: "Formule 1",
    beschrijving: "Red Bull Racing is een formule 1 team <br> gesponsored door Red Bull.",
};

const g2 = {
    name: "G2 ESports",
    sport: "LEC",
    beschrijving: "G2 is een League of Legends team die speelt in de LEC.",
};

const leinster = {
    name: "Leinster Rugby",
    sport: "Rugby Union",
    beschrijving: "Leinster Rugby is een rugby team die voornamelijk speelt in de URC",
};

//This function looks through the cases of teams and displays the team of name of the array list
function veranderTeam() {
    let x = document.getElementById("inputText").value;
    document.getElementById("output").innerHTML = x;

    const y = x.toLowerCase();
    switch(y) {
    case 'ferrari':
        output.innerHTML = ferrari["name"];
        break;
    case 'red bull':
        output.innerHTML = redbull.name;
        break;
    case 'g2':
        output.innerHTML = g2.name;
        break;
    case 'leinster':
        output.innerHTML = leinster.name;
        break;
    default:
        output.innerHTML = "Geen team";
    }
}

//This function displays my favourite teams in the array list and their detailed information
function toonInfo() {
    let x = document.getElementById("inputText").value;
    const y = x.toLowerCase();

    switch(y) {
    case 'ferrari':
        teamnaam.innerHTML = ferrari.name;
        sport.innerHTML = ferrari.sport;
        beschrijving.innerHTML = ferrari.beschrijving;
        document.getElementById("teaminfo").style.background = "red";
        break;
    case 'red bull':
        teamnaam.innerHTML = redbull.name;
        sport.innerHTML = redbull.sport;
        beschrijving.innerHTML = redbull.beschrijving;
        document.getElementById("teaminfo").style.background = "darkblue";
        break;
    case 'g2':
        teamnaam.innerHTML = g2.name;
        sport.innerHTML = g2.sport;
        beschrijving.innerHTML = g2.beschrijving;
        document.getElementById("teaminfo").style.background = "black";
        break;
    case 'leinster':
        teamnaam.innerHTML = leinster.name;
        sport.innerHTML = leinster.sport;
        beschrijving.innerHTML = leinster.beschrijving;
        document.getElementById("teaminfo").style.background = "blue";
        break;
    default:
        teamnaam.innerHTML = "Onbekend team";
        sport.innerHTML = "Onbekende sport"
        beschrijving.innerHTML = "Onbekende beschrijving"
        break;
    }
}