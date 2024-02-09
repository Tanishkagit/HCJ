let allbuttons=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".reset");
let playero=true;
const winnerpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
allbuttons.forEach((val)=>{
    val.addEventListener("click",()=>{
        console.log("box");
        if(playero){
            val.innerText="O";
            playero=false;
        }
        else{
            val.innerText="X";
            playero=true;
        }
        val.disabled=true;
    })
})
