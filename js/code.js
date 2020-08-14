const messages = ["Vous aimez les maths et aussi parler d'enfants.", 
"Vous aimez le SQL et aussi plus de SQL.", 
"Vous aimez parler de servers et aussi les Shadows.", 
"Vous aimez Python et aussi les exercices alambiqués.", 
"Vous aimez chercher des stages et aussi les potits chiens.", 
"Ce n'est pas un chiffre correct. Faut apprendre à lire.", 
"Allez, la bonneuh journée!"];

const createMessage = (answer) => {
    let message = '';
    if (answer == 1) {
        message = messages[0];
    } else if (answer == 2) { 
        message = messages[1];
    } else if (answer == 3) { 
        message = messages[2];
    } else if (answer == 4) { 
        message = messages[3];
    } else if (answer == 5) { 
        message = messages[4];
    } else if (answer < 1) {
        message = messages[5];
    } else if (answer > 5) {
        message = messages[5];
    } else {
        message = messages[6];
    } return `Ah! ${message} `;
  };
 

const form = document.getElementById("my-form");
console.log(form);
  
const message = document.getElementById("ia-message");
const counter = document.getElementById("counter");
let count = 0;
  
form.addEventListener("submit", (event) => {
    const input = form.querySelector("#user-answer");
    answer = input.value
    message.innerHTML = createMessage(answer);
    count = count += 1
    counter.innerHTML = count;
  });
  