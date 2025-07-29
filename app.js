let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("clciked");
        if(turno){
            box.innerHTML="O";
            turno=false;
        }else{
            box.innerHTML="X";
            turno=true;
        }
        box.ariaDisabled=true; /*if we enter one time cant enter again */

        checkwinner();
    });
});

const resetGame =() =>{
    turno=true;
enableBoxes();
msgcontainer.classList.add("hide");

}


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner =(winner)=>{
   msg.innerHTML = `congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () =>{
 for(let pattern of winpattern){
  let pos1val=boxes[pattern[0]].innerHTML;
  let pos2val=boxes[pattern[1]].innerHTML;
  let pos3val=boxes[pattern[2]].innerHTML;


  if(pos1val != "" && pos2val != "" && pos3val !=""){
    if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner",pos1val);
    
        showwinner(pos1val);
    }
  }
 }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);