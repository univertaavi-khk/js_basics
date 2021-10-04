// event elements

const form = document.querySelector("form");
const taskInput = document.querySelector("#task")

form.addEventListener("keydown", runEvent);
form.addEventListener("keyup", runEvent);
form.addEventListener("focus", runEvent);
form.addEventListener("blur", runEvent);
form.addEventListener("cut", runEvent);
form.addEventListener("paste", runEvent);
form.addEventListener("input", runEvent);

function runEvent(e) {
    console.log(`Event is ${e.type}`);
    console.log(e.target.value);
}