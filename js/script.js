// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Creo array per i numeri
var num = []






// Creo il ciclo per i numeri casuali

for (let i = 1; i < 6; i++) {
    var randomNum = Math.floor((Math.random() * 50) + 1)
    num.push(randomNum)
    console.log(num)
}

alert(num);

// imposto il timer per l'alert

// var clock = setInterval(myFunction, 3000);

// function myFunction() {
// alert('Hello');
// }
    // setTimeout(myTimeout1, 30000)



    // function myTimeout1() {
    //     alert(num);
    //   };
