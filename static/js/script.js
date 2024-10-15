
/*
    Come accedere ad un elemento in Javascript
    Accedo ad un elemento in JS tramite il metodo querySelector
    che fa parte dell'oggetto document
    --> document.querySelector()
    querySelector è un metodo (funzione) dell'oggetto document
    a cui voglio accedere come stringa
    -restetuisce l'elemento del DOM "matchato" dal selettore
    --> possiamo asssegnare una variabile
    --> querySelector mi restituisce un oggetto di tipo Element
    (un elemento HTML); nel caso degli elementi <input>
    posso accedere agli attributi del campo utilizzando il punto
    es. -->
    let userField = document.querySelector("#guess")
    console.log(userField.value) --> logga in console il cont

Per gestire l'evento che poi andrà ad avviare il controlli sui numeri
inseriti dell'utente ha bisogno di 3 cose:
    1 - l'elemento che scatenerà l'evento (il button nel nostro caso)
    2 - il nome dell'evento
    3 - le cose da fare dopo che l'evento è stato scatenato

    1 --> è il button --> uso querySelector per accedere all'elemento
    2 --> l'evento che scatenerà il flusso di gioco è il click
    3 --> sanitize if/else per controllo numero e console.log

    per gestire un evento su un elemento HTML posso usare una funzione
    che si chiama addEventListener

        let btn = document.querySelector("#guessBtn") --> elemento al punto 1
        function handleClick(event){
        console.log(event)
        } --> cose da fare (punto 3)
        btn.addEventListener("click" handleClick)

addEventListener è un metodo (funzione) dell'elemento HTML al punto 1 
    parametri:
        - il nome dell'evento come stringa
        - la funzione da eseguire al verificarsi dell'evento (DEVE avere come oggetto argomento EVENT)

nella funzione handleClick avrò tutti i controlli del gioco:
    - prendo il valore inserito dall'utente
    -sanitize dell'input
    - parseInt dell'input
    if/else con console.log
*/



function generateRandomInteger(min=0, max=100){
    let num = Math.floor(Math.random() * (max - min) + min);
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

function handleClick(event) {
    let input = document.querySelector("#guess").value;
    numeroInserito = sanitize(input);

    if (isNaN(numeroInserito)) {
        console.log("Inserisci un numero valido");
        elem1.innerHTML = `Non hai inserito nessun numero!`;
        elem2.innerHTML = `Inserisci un numero valido.`
    } else {
        if (numeroInserito > numEFFETIVO) {
            console.log("Il numero '" + numeroInserito + "' è troppo grande");
            tentativi -= 1;
            contatore += 1;
            console.log("Hai ancora " + tentativi + " tentativi");
            elem1.innerHTML = `Il numero <strong>${numeroInserito}</strong> è troppo grande!`;
            elem2.innerHTML = `Hai ancora a dispozione <strong>${tentativi}</strong> tentativi.`
        } else if (numeroInserito < numEFFETIVO) {
            console.log("Il numero '" + numeroInserito + "' è troppo piccolo");
            tentativi -= 1;
            contatore += 1;
            console.log("Hai ancora " + tentativi + " tentativi");
            elem1.innerHTML = `Il numero <strong>${numeroInserito}</strong> è troppo piccolo!`;
            elem2.innerHTML = `Hai ancora a dispozione <strong>${tentativi}</strong> tentativi.`
        } else if (numeroInserito === numEFFETIVO) {
            console.log("Bravo, hai vinto!");
            win+=1;
            elem1.innerHTML = `Bravo, hai vinto! Hai usato <strong>${contatore+1}</strong> tentativi.`;
            elem2.innerHTML = `Il numero è effetivamente <strong>${numeroInserito}</strong>.`
            indovinato = true;
            document.querySelector("#guess").disabled = true;
            document.querySelector("#guessBtn").disabled = true;
        }
    }
    if (tentativi === 0 && !indovinato) {
        console.log("Mi dispiace, hai perso. Il numero era " + numEFFETIVO);
        elem1.innerHTML = `Mi dispiace, hai perso.`;
        elem2.innerHTML = `Il numero era <strong>${numEFFETIVO}</strong>.`
        userField.disabled = true;
        btn.disabled = true;
    }

    if (tentativi > 3){
        back.style.background = "#CCFFC5";
    } else if (tentativi >= 1) {
        back.style.background = "yellow";
    } else if (tentativi === 0 && !indovinato) {
        back.style.background = "#fa3232";
    }  
    if(indovinato){
        back.style.background = "#a2e3f2";
    }
}


function handleClick2(event) {
    tentativi = 5
    contatore = 0
    indovinato = false;
    back.style.background = "#CCFFC5";
    userField.disabled = false;
    btn.disabled = false;
    numEFFETIVO = 0
    numEFFETIVO = generateRandomInteger()
    reset+=1
    if (reset===1){
        if(win===1){
            elem3.innerHTML = `Hai resettato il gioco ${reset} volta. Hai vinto ${win} volta.`
            elem1.innerHTML = `Non hai ancora inserito un numero.`;
            elem2.innerHTML = `Hai a disposizione 5 tentativi.`
        }
        elem3.innerHTML = `Hai resettato il gioco ${reset} volta. Non hai mai vinto il gioco.`
        elem1.innerHTML = `Non hai ancora inserito un numero.`;
        elem2.innerHTML = `Hai a disposizione 5 tentativi.`
    }else{
        if(win>1){
        elem3.innerHTML = `Hai resettato il gioco per un totale di ${reset} volte. Hai vinto ${win} volte.`
        elem1.innerHTML = `Non hai ancora inserito un numero.`;
        elem2.innerHTML = `Hai a disposizione 5 tentativi.`
        }else if(win===1){
            elem3.innerHTML = `Hai resettato il gioco per un totale di ${reset} volte. Hai vinto ${win} volta.`
            elem1.innerHTML = `Non hai ancora inserito un numero.`;
            elem2.innerHTML = `Hai a disposizione 5 tentativi.`
        }else
        elem3.innerHTML = `Hai resettato il gioco per un totale di ${reset} volte. Non hai mai vinto il gioco.`
        elem1.innerHTML = `Non hai ancora inserito un numero.`;
        elem2.innerHTML = `Hai a disposizione 5 tentativi.`
    }
}

//PROGRAMMA PRINCIPALE
console.log("Benvenuto a 'INDOVINA IL NUMERO!'");
let win = 0
let elem1 = document.querySelector("#message1")
let elem2 = document.querySelector("#message2")
let elem3 = document.querySelector("#message3")
let back = document.querySelector("body")
let numeroInserito
let tentativi = 5
let contatore = 0
let indovinato = false
let reset = 0
let numEFFETIVO = generateRandomInteger()
let userField = document.querySelector("#guess")
let btn = document.querySelector("#guessBtn")
    btn.addEventListener("click", handleClick)

let btn2 = document.querySelector("#clickRetry")
    btn2.addEventListener("click", handleClick2)

