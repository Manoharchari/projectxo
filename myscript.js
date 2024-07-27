 let boxes= document.querySelectorAll(".Box")
 let rstBtn= document.querySelector(".rstBtn")
 let newBtn=document.querySelector(".winBtn");
 let winMsg= document.querySelector(".win-msg");
 let winnermsg  = document.querySelector(".winPara")
let dopO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


 let c=0;

  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Yes");
        c++;  
        console.log(c);
     if(dopO===true){
        box.innerText="O";
        box.style.color="red";
        dopO = false;  
     }
     else{
        box.innerText="X";
        box.style.color="blue";
        dopO = true; 

     }
     checkPattern(c);
     box.disabled=true;
     
    })
  })
  

const  rsetBtn = ()=>{
     let dopO = true;
     enable();
     winMsg.classList.add("hide");
     c=0;
}

const enable = ()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";

    }
 }




const disable = ()=>{
   for(let box of boxes){
    box.disabled=true;
   }
}



  const showWinner = (p1) => {
    
    
    winnermsg.innerText=`Congartulations Winner is ${p1}`;
    if(p1==='O'){
     winMsg.style.color="red"
    }else{
        winMsg.style.color="blue"    
    }

    
    winMsg.classList.remove("hide");
    disable();
  }
  


  
  const checkPattern = (c)=> {
    let isWinner = false;
    for (let pat of winPatterns){
       let p1 = boxes[pat[0]].innerText;
       let p2 = boxes[pat[1]].innerText;
       let p3 = boxes[pat[2]].innerText;
       console.log(c);
       if(p1 != "" &&  p2 != "" && p3 != ""){
        if(p1===p2 && p2 === p3){
          console.log("winner");
          showWinner(p1);
          isWinner= true;
          break;
        }
        
      }
    }
    if(c===9 && !isWinner){
      console.log(isWinner);
      winMsg.classList.remove("hide");
      winnermsg.innerText="Game Draw";
      winMsg.style.color="Green";
     }
  };

  // rstBtn.addEventListener("click",()=>{
  //   console.log("restrat");
  // })


rstBtn.addEventListener("click",rsetBtn);
newBtn.addEventListener("click",rsetBtn);

  