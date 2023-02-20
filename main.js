let container = document.querySelector(".container");
let mainDiv = document.querySelector(".mainDiv");
let h1 = document.querySelector("h1");
let lastanswer1 = document.createElement("p");

let count =10;

let interalId=setInterval(function () {
    confirmButton.addEventListener("click", function () {
        clearInterval(interalId); 
    
        mainDiv.innerHTML = "";
        if (someInput.value == x + y) {
            mainDiv.appendChild(lastanswer1);
            lastanswer1.innerText="Your answer is correct!";
            lastanswer1.style.fontSize="40px";
    
            
        }else{
            mainDiv.appendChild(lastanswer1);
            lastanswer1.innerText="Your answer is incorrect!";
            lastanswer1.style.fontSize="40px";
        }
    
    })
    h1.innerHTML="Time left: " + count;
    
    if (count === 0) {
        mainDiv.innerHTML = "";
        clearInterval(interalId); 
        mainDiv.appendChild(lastanswer1);
        lastanswer1.innerText="You're out of time!";
        lastanswer1.style.fontSize="40px";  
      }
      count--;
  }, 1000);


let x = Math.floor(Math.random() * 101);
let y = Math.floor(Math.random() * 101);;
let someP = document.createElement("p");
mainDiv.appendChild(someP);
someP.innerHTML = "How much is  " + x + " + " + y + " ?";
someP.style.fontSize = "50px";

let answerP = document.createElement("p");
mainDiv.appendChild(answerP);
answerP.innerHTML = "Your answer: ";
answerP.style.fontSize = "50px";

let someInput = document.createElement("input");
someInput.classList.add("someInput");
mainDiv.appendChild(someInput);
someInput.style.fontSize = "40px";
someInput.style.textAlign = "center";



let confirmButton = document.createElement("button");
confirmButton.classList.add("confirmButton");
mainDiv.appendChild(confirmButton);
confirmButton.innerHTML = "Confirm";
confirmButton.style.fontSize = "30px";



// confirmButton.addEventListener("click", function () {
    
//     mainDiv.innerHTML = "";
//     if (someInput.value == x + y) {
//         mainDiv.appendChild(lastanswer1);
//         lastanswer1.innerText="Your answer is correct!";
//         lastanswer1.style.fontSize="40px";

        
//     }else{
//         mainDiv.appendChild(lastanswer1);
//         lastanswer1.innerText="Your answer is incorrect!";
//         lastanswer1.style.fontSize="40px";
//     }

// })