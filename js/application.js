//function createMessage(answer) {
//  output = (`La réponse de l'utilisateur est : <b>" ${answer} "</b>`);
//  return output
//}

const createMessage = (answer) => {
  return `La réponse de l'utilisateur est : ${answer} `
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
