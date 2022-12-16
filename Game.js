const computerChoice=document.getElementById("computer-choice");
const yourChoice=document.getElementById("your-choice");
const result=document.getElementById("result");
let userId

const Rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors");

 let computerOfComputer


const possibleChoice=document.querySelectorAll("button");
possibleChoice.forEach(buttons=>{
    buttons.addEventListener("click",(e)=>{
       userId=e.target.id;
    //    yourChoice.innerHTML=userId;
    if(userId === "rock"){
        yourChoice.src="pic.jpg/rock.jpg";
    }
    if(userId === "paper"){
        yourChoice.src="pic.jpg/paper.jpg";
    }
    if(userId=== "scissors"){
        computerChoice.src="pic.jpg/scissors.jpg"
    }
       generateComputerChoice()
       Result()
    })
});
function generateComputerChoice(){
    const Random=Math.floor(Math.random() * possibleChoice.length);
   
   /* if(Random=== 0){
        computerOfComputer= "rock";
        alert("yes")
    }
    if(Random=== 1){
       computerOfComputer= "paper"; 
       alert("no")
    }
    if(Random=== 2){
       computerOfComputer="scissors";
        alert("come")
    }*/
    switch(Random){
        case 0:
            computerChoice.src= "pic.jpg/rock.jpg";
            break;
        case 1:
            computerChoice.src= "pic.jpg/paper.jpg";
            break;
        case 2:
            computerChoice.src="pic.jpg/scissors.jpg"
            break;
    }
    computerChoice.innerText=computerOfComputer;

}
function Result(e){
    console.log(e.target)
     if(yourChoice.src === computerChoice.src){
        result.innerText="its a draw!"
    }
    if(yourChoice.src ===  "pic.jpg/rock.jpg" && computerChoice.src=== "pic.jpg/paper.jpg"){
        result.innerText="you win!"
        alert("hello")
    }
    if(yourChoice.src ===  "pic.jpg/rock.jpg" && computerChoice.src=== "pic.jpg/scissors.jpg"){
        result.innerText="you lost!"
        alert("hello")
    }
    if(yourChoice.src === "pic.jpg/paper.jpg" && computerChoice.src==="pic.jpg/scissors.jpg"){
        result.innerText="you win!"
        alert("hello")
    }
    if(yourChoice.src ===  "pic.jpg/paper.jpg" && computerChoice.src=== "pic.jpg/rock.jpg"){
        result.innerText="you lost!"
    }
    if(yourChoice.src === "pic.jpg/scissors.jpg" && computerChoice.src=== "pic.jpg/rock.jpg"){
        result.innerText="you win!"
    }
    if(yourChoice.src === "pic.jpg/scissors.jpg" && computerChoice.src===  "pic.jpg/paper.jpg"){
        result.innerText="you win!"
    }
    console.log(computerChoice.src)
console.log(yourChoice.src)


}
/*console.log(computerChoice.src)
console.log(yourChoice.src)*/
