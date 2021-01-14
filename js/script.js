// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Creo array per i numeri
var num = [];

var secondi = 30;

var numUtente = [];

var tempo = setInterval(myTimer, 30000);

// Creo il ciclo per i numeri casuali

while (num.length < 5) {
    var randomNum = generaRandom(1, 50)
    num.push(randomNum)
}
console.log(num)

alert(num);



var j = 0;
function myTimer () {
    
    while (j <= 4) {
        var guessed = parseInt(prompt('Inserisci i numeri precedentemente visti'));
        var goodGuess = verify(guessed, numUtente);
        if (num.includes(guessed)) {
            console.log('Hai indovinato il numero ', guessed );
            j++;
        } 
        else {
            j++;
            
        };
        
    };
};
console.log("Guessed numbers: ", numUtente);


function verify(inpt, arr) {
    if (isNaN(inpt)) {
        var not = alert("Devi inserire un numero da 1 a 50");
    }
    else if (arr.includes(inpt)) {
        not = alert("Il numero non può essere scritto più di una volta");
    }
    else if (inpt <= 0 || inpt > 50) {
        not = alert("Devi inserire un numero da 1 a 50");
    }
    else {
        arr.push(inpt);
    }
};


    function generaRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    