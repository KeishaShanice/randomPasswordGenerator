/*
    generate two passwords when the user clicks the button
    each password should be 15 characters long
    push:
    set password length
    add "copy on click"
    toggle symbols and numbers on/off
*/

//characters for password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersSansSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersSansNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersOnlyCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//connect html elements to javascript
let passwordOne = document.getElementById("passwordOne-el");
let passwordTwo = document.getElementById("passwordTwo-el");
let passwordButton = document.getElementById("button-el");


//add event listener to button
passwordButton.addEventListener("click", generatePassword);


//fuction to generate random password with variable amount of characters
function generatePassword(){
    let length =document.querySelector('#passwordLength').value;
    let numbers =document.querySelector('#numbers').value.toLowerCase();
    let symbols = document.querySelector("#symbols").value.toLowerCase();
    let randomPasswordOne = "";
    let randomPasswordTwo = "";

    

    if (length) {
        if((numbers === "no") && (symbols === "no") ) {
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersOnlyCharacters[Math.floor(Math.random() * charactersOnlyCharacters.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersOnlyCharacters[Math.floor(Math.random() * charactersOnlyCharacters.length)]
                        console.log(randomPasswordTwo)
                    }
                }  else if ((numbers === "yes") && (symbols === "no") ) {
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
                        console.log(randomPasswordTwo)
                    }
                } else if ((numbers === "yes") && (symbols === "") ) {
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
                        console.log(randomPasswordTwo)
                    }
                } else if ((numbers === "") && (symbols === "no") ) {
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
                        console.log(randomPasswordTwo)
                    }
                } else if((numbers === "no") && (symbols === "yes")){
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
                        console.log(randomPasswordTwo)
                    }
                } else if((numbers === "") && (symbols === "yes")){
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
                        console.log(randomPasswordTwo)
                    }
                } else if((numbers === "no") && (symbols === "")){
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
                        console.log(randomPasswordTwo)
                    }
                } else {
                    for(let i = 1; i <= length; i++){
                        randomPasswordOne += characters[Math.floor(Math.random() * characters.length)];
                        console.log(randomPasswordOne)
                        randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
                        console.log(randomPasswordTwo)
            
                    }
                }
        // for(let i = 1; i <= length; i++){
        //     randomPasswordOne += characters[Math.floor(Math.random() * characters.length)];
    
        //     randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
        // }

        
    } else { //15 characters
        if((numbers === "no") && (symbols === "no") ) {
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersOnlyCharacters[Math.floor(Math.random() * charactersOnlyCharacters.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersOnlyCharacters[Math.floor(Math.random() * charactersOnlyCharacters.length)]
                console.log(randomPasswordTwo)
            }
        } else if ((numbers === "yes") && (symbols === "no") ) {
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
                console.log(randomPasswordTwo)
            }
        } else if ((numbers === "") && (symbols === "no") ) {
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
                console.log(randomPasswordTwo)
            }
        } else if ((numbers === "yes") && (symbols === "") ) {
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
                console.log(randomPasswordTwo)
            }
        } else if((numbers === "no") && (symbols === "yes")){
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
                console.log(randomPasswordTwo)
            }
        } else if((numbers === "") && (symbols === "yes")){
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
                console.log(randomPasswordTwo)
            }
        } else if((numbers === "no") && (symbols === "")){
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
                console.log(randomPasswordTwo)
            }
        } else {
            for(let i = 1; i <= 15; i++){
                randomPasswordOne += characters[Math.floor(Math.random() * characters.length)];
                console.log(randomPasswordOne)
                randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
                console.log(randomPasswordTwo)
    
            }
        }
        
        // for(let i = 1; i <= 15; i++){
        //     randomPasswordOne += characters[Math.floor(Math.random() * characters.length)];
    
        //     randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
        // }

    }
    passwordOne.textContent = randomPasswordOne;
    passwordTwo.textContent = randomPasswordTwo;

    clear()
}

//clear textbox
function clear(){
    document.getElementById('passwordLength').value = "";
    document.getElementById('numbers').value = "";
    document.getElementById('symbols').value = "";
}

//use textbox to select for numbers and symbols

//function to generate random password based on numbers and symbols
// let length = document.querySelector('#passwordLength').value;
// let numbers = document.querySelector("#numbers").addEventListener('click', check)
// let symbols = document.querySelector("#symbols");

// function check(){
//     let numbers = document.querySelector("#numbers").addEventListener('click', check)
//     if(numbers.checked === true) {
//         numbers.checked = false
//     } else {
//         numbers.checked = true
//     }
//     console.log(numbers.checked)
// }


// function generatePassword(){
//     console.log("clicked")
//     let length = document.querySelector('#passwordLength').value;

//     let randomPasswordOne = "";
//     let randomPasswordTwo = "";

//     if((numbers.checked === false) && (symbols.checked === false) ) {
//         for(let i = 1; i <= length; i++){
//             randomPasswordOne += charactersOnlyCharacters[Math.floor(Math.random() * charactersOnlyCharacters.length)];
//             console.log(randomPasswordOne)
//             randomPasswordTwo += charactersOnlyCharacters[Math.floor(Math.random() * charactersOnlyCharacters.length)]
//             console.log(randomPasswordTwo)
//         }
//     } else if ((numbers.checked === true) && (symbols.checked === false) ) {
//         for(let i = 1; i <= length; i++){
//             randomPasswordOne += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)];
//             console.log(randomPasswordOne)
//             randomPasswordTwo += charactersSansSymbols[Math.floor(Math.random() * charactersSansSymbols.length)]
//             console.log(randomPasswordTwo)
//         }
//     } else if((numbers.checked === false) && (symbols.checked === true)){
//         for(let i = 1; i <= length; i++){
//             randomPasswordOne += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)];
//             console.log(randomPasswordOne)
//             randomPasswordTwo += charactersSansNumbers[Math.floor(Math.random() * charactersSansNumbers.length)]
//             console.log(randomPasswordTwo)
//         }
//     } else {
//         for(let i = 1; i <= length; i++){
//             randomPasswordOne += characters[Math.floor(Math.random() * characters.length)];
//             console.log(randomPasswordOne)
//             randomPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
//             console.log(randomPasswordTwo)

//         }
//     }
    
//     passwordOne.textContent = randomPasswordOne;
//     passwordTwo.textContent = randomPasswordTwo;
// }