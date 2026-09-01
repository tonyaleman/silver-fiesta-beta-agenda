const helloBtn = document.querySelector("#hello-btn");
const helloBox = document.querySelector("#hello-box");
const userGreeting = document.querySelector("#user-greeting");
const terminal = document.querySelector("#terminal");

console.log("whats in hello box variable", helloBox.value);

helloBtn.addEventListener("click", () => {
  console.log("helloBox value", helloBox.value);
  //alert('hello!')
  userGreeting.textContent = "hi there, " + helloBox.value;

    const line = document.createElement("p");

    line.textContent = helloBox.value;

    terminal.appendChild(line);

});
