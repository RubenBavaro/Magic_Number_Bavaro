//Qui scriviamo il codice JS
/*
Scrivere una funzione che generi un numero casuale intero compreso fra un minimo e un max

function generateRandomInteger(min, max){
    // qui devo usare Math.random
}

Usare questa funzione per sviluppare il gioco "indovina il numero":
generare un numero casuale compreso fra 1 e 100 
chiedere in input all'utente un numero finchè non esaurisce 5 tentativi
fare sanitize dell'input
se il numero inserito dall'utente è maggiore del numero generato stampa in console la stringa "Troppo grande"
se il numero inserito dall'utente è minore del numero generato stampa in console la stringa "Troppo piccolo"
se il numero inserito dall'utente è uguale del numero generato stampa in console la stringa "Bravo, hai vinto"
Il gioco finisce se l'utente esaurisce i 5 tentativi o se indovina
*/


function generateRandomInteger(min=1, max=100){
    num = Math.floor(Math.random() * (max - min) + min);
    return num
}

function sanitize(Var){
    let sanificata
    if (!isNaN(Var)){
        sanificata =  parseInt(Var.trim());
    } else {
        sanificata = NaN;
    }
    return sanificata
}

//PROGRAMMA PRINCIPALE
let tentativi = 5
let contatore = 0
let indovinato = false
let numEFFETIVO = generateRandomInteger()
let numeroInserito 
console.log("Benvenuto a 'INDOVINA IL NUMERO!'")
while (contatore<5 && indovinato===false){
    console.log("Hai ancora " + tentativi + " tentativi")
    do{
        let input = prompt("Inserisci un numero")
        numeroInserito = sanitize(input)
        if (isNaN(numeroInserito)) {
            console.log("Inserisci un numero valido")
        } else {
            break;
        }
    }while(true)

    if(numeroInserito>numEFFETIVO){
        console.log("Il numero '" + numeroInserito + "' è troppo grande")
        tentativi-=1
        contatore+=1
    }else if(numeroInserito<numEFFETIVO){
        console.log("Il numero '" + numeroInserito + "' è troppo piccolo")
        tentativi-=1
        contatore+=1
    }else if(numeroInserito===numEFFETIVO){
        console.log("Bravo, hai vinto!")
        indovinato=true
    }
}
if (!indovinato) {
    console.log("Mi dispiace, hai perso. Il numero era " + numEFFETIVO);
}