let helloBtn = "";
let helloBox = "";
let userGreeting = "";
let terminal = "";

//const is an unchanging variable, while let allows a varbiable to change. 

document.addEventListener("DOMContentLoaded", () => {
  //console.log("DOM ready!");

  initDomStuff();
  addListeners();
});

function initDomStuff() {
  // grab all dom stuff in vars
  helloBtn = document.querySelector("#hello-btn");
  helloBox = document.querySelector("#hello-box");
  userGreeting = document.querySelector("#user-greeting");
  terminal = document.querySelector("#terminal");
  console.log("dom variables initialized. godspeed. ");
}

function addListeners() {
  //console.log("whats in hellBox variable", helloBox);

  helloBtn.addEventListener("click", () => {

    sessionStorage.setItem("userName", helloBox.value);

    console.log("hellobx valueu", helloBox.value);

    console.log("hellobx value from session", sessionStorage.getItem("userName"));
    // alert("hellodsfasdfsa!");
    userGreeting.textContent = "hi there, " + helloBox.value + "!";

    const line = document.createElement("p");

    line.textContent = helloBox.value;

    terminal.appendChild(line);
  });
}

function functionName(userName, income) {

  let sum = 2 + 2;
  console.log('sum is, ', sum);

  return sum; 
}

() => {return 4;}

// console.log("whats in hellBox variable", helloBox);

// helloBtn.addEventListener("click", () => {
//   console.log("hellobx valueu", helloBox.value);
//   // alert("hellodsfasdfsa!");
//   userGreeting.textContent = "hi there, " + helloBox.value + "!";

//   const line = document.createElement("p");

//   line.textContent = helloBox.value;

//   terminal.appendChild(line);
// });

// document.getElementById("hello-btn").addEventListener('click',

// 	function(){alert('hello there')}

// )
