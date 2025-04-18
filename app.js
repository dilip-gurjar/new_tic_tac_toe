let new_g_btn=document.querySelector("#new-gamebtn");
let msgcntnr=document.querySelector(".msg_container");
let msgpara=document.querySelector("#msg")
let boxes=document.querySelectorAll(".box");
console.log(boxes);
let resetbtn=document.querySelector("#reset-btn");
let turn0=true;


const resetgame=()=>{
     turn0=true;
    enableboxes();
    
        msgcntnr.classList.add("hide");
};
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];




    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("box was clicked ");
            if (turn0===true){
                box.innerText="O"
                turn0=false;
            }else{
                box.innerText="X"
                turn0=true;
            } ;
            
             box.disabled=true;

             checkwinner();
        })
       
    });
    
const checkwinner=()=>{
    for (let pattern of winPattern){
        // console.log (pattern)
      let pos1val= boxes[pattern[0]].innerText;
     let pos2val= boxes[pattern[1]].innerText;
      let pos3val =boxes[pattern[2]].innerText;

       if(pos1val!=""&&pos2val!=""&&pos3val!="")
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
           
        }
}
    }


    const showwinner=(winner)=>{
msgpara.innerText=`congratulations winner is:${winner}`;
msgcntnr.classList.remove("hide");
disabled();
    }
    const disabled=()=>{
        for (let box of boxes){
            box.disabled=true;
        }
    }

    new_g_btn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);


    
   
    // for (box of boxes){
        
    //     box.addEventListener("click",()=>{
    //         console.log("box was clicked ");
    //     });
    // }