
let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame (){
    window.location.reload()
    document.getElementById('newGameButton')
}

function init () {
   computerNumber = Math.floor(Math.random() * 100 + 1) 
   console.log(computerNumber) // teste de numero randomico
}

function compareNumbers(){
   const userNumber =  Number(document.getElementById('inputBox').value)
   userNumbers.push(' '+userNumber)
   document.getElementById('guesses').innerHTML = userNumbers

   if (attempts < maxGuesses){

    if(userNumber > computerNumber){
        document.getElementById('textOutput').innerHTML = ' Seu numero é Alto !'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
       }
       else if (userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'Seu Numero é baixo ! '
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts
        
       }
       else {
        document.getElementById('textOutput').innerHTML = ' Você venceu!!!'
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('readonly', 'readonly')
       }
   }
   else {
        document.getElementById('textOutput').innerHTML = ' Você perdeu! o numero do computador era: ' + computerNumber
        document.getElementById('inputBox').setAttribute('readonly', 'readonly')
   }
   
}
