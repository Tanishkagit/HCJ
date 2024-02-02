let button=document.querySelector(".btn");
let mode="light";
button.addEventListener("click",()=>{
  if(mode==="light"){
    mode="dark";
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    mode="light"
    document.querySelector("body").style.backgroundColor="white";
  }
})
