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

function sanitize(Var){
    let sanificata
    if (Var!=isNaN){
        sanificata =  Var.trim().toLowerCase();
    }
    
    return sanificata
}

function generateRandomInteger(min=1, max=100){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    num = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return num
}


//PROGRAMMA PRINCIPALE
let tentativi = 5
let contatore = 0
let indovinato = false
let numEFFETIVO = 0
let numeroInserito  = 0

numEFFETIVO = parseInt(numEFFETIVO)
numeroInserito = parseInt(numeroInserito)
numEFFETIVO = generateRandomInteger()
while (contatore<=5 && indovinato===false){
    console.log("Benvenuto a 'INDOVINA IL NUMERO!'")
    console.log("Hai ancora" + tentativi + " tentativi")
    do{
        numeroInserito = prompt("Inserisci un numero")
    }while(numeroInserito===isNaN===false)

        if(numeroInserito>numEFFETIVO){
            console.log("Troppo grande")
            tentativi--
            contatore++
            }else if(numeroInserito<numEFFETIVO){
                console.log("Troppo piccolo")
                tentativi--
                contatore++
            }else if(numeroInserito===numEFFETIVO){
                console.log("Bravo, hai vinto!")
                indovinato=true
            }
}