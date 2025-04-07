// No 1
function first() {
    var userInput = firstInput.value.toLowerCase()
    if(userInput == ""){
        alert("Pls fill in the address")
    }
    else{
        firstShow.innerHTML = "Your House address is: " + userInput
    }
}

// no 2

var listOfBooks = []
function second() {
    var secondUserInput = secondInput.value.toLowerCase()
    if(secondUserInput == ""){
        secondShow.innerHTML = "Pls fill in the address"
        alert("Pls fill in the address")
    }
    else if(listOfBooks == secondUserInput){
        secondShow.innerHTML = "Book Title already choosen"
        alert("Book Title already choosen")
    }
    else{
        listOfBooks += secondUserInput
        secondShow.innerHTML = "Your new book title is: " + secondInput.value
        alert("Your new book title is: " + secondInput.value)
    }
}


// no 3

function third() {
    var spaceRemove = thirdInput.value
    if (spaceRemove == ""){
        thirdShow.innerHTML = "pls input value"
        alert("Pls input value")
    }
    else{
        var convert = spaceRemove.replace(/\s+/g, " ")
        thirdShow.innerHTML = "Corrected sentence is: " + convert
        alert("Corrected sentence is: " + convert)
    }
}


// no 5

function fourth() {
    var fourthInput = fourthInputValue.value
    var proccessed = parseInt(fourthInput)
    if (fourthInputValue.value == ""){
        fourthShow.innerHTML = "pls enter value"
        alert("pls enter value")
    }
    if(proccessed % 2 == 0 ){
        fourthShow.innerHTML = "You've got a discount of 20%"
        alert("You've got a discount of 20%")
    }
    else{
        fourthShow.innerHTML = "You're not given a discount, pls try again"
        alert("You're not given a discount, pls try again")
    }
}


// no 6

function fifth() {
    var fifthInput = parseInt(fifthInputValue.value)
    if (fifthInputValue.value == ""){
        fifthShow.innerHTML = "Pls enter your temperature degree"
        alert("Pls enter your temperature degree")
    }
    else if (fifthInput > 28){
        fifthShow.innerHTML = "The weather is Hot"
        alert("The weather is Hot")
    }
    else if (fifthInput >= 20 && fifthInput <= 28){
        fifthShow.innerHTML = "The weather is worm"
        alert("The weather is worm")
    }
    else if (fifthInput >0 && fifthInput < 20){
        fifthShow.innerHTML = "The weather is cold"
        alert("The weather is cold")
    }
    else{
        fifthShow.innerHTML = "Pls provide right information"
        alert("Pls provide right information")
    }
}