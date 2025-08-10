// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey, I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const header_3 = document.createElement("h3");
header_3.classList.add("header3");
header_3.textContent = "I'm the blue h3!";
header_3.style.color = "blue";

container.appendChild(header_3);

const diver = document.createElement("div");
diver.classList.add("diver");
diver.style.cssText = "background: pink; border: 1px solid black";

const header_1 = document.createElement("h1");
header_1.classList.add("header_1");
header_1.textContent = "I'm in a div";

const paragraph_2 = document.createElement("p");
paragraph_2.classList.add("paragraph_2");
paragraph_2.textContent = "ME TOO";

diver.appendChild(header_1);
diver.appendChild(paragraph_2);

container.appendChild(diver);

// // the JavaScript file
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// the JavaScript file
const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

  