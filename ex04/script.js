function task1() {
  let myArray = ["one",
    "two",
    "three"];
  // This will run when you click the button.
  let target = document.querySelector('#task-1-target')

  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}
  let newEl = document.createElement("li")

function task2A() {
  // Write your code in here
 let target = document.querySelectorAll("#color-list li")
 console.log(target)
}

function task2B() {
  // Writ your code in here
let target =   document.querySelectorAll("#name-list li")
console.log(target)

target.forEach(el => {
  console.log("HI " + el.innerText)
})
}

function task3() {
  // Write your code in here
let target = document.querySelectorAll("#")
}
