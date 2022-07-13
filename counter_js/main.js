let x = 0;
const h = document.querySelector("h1");
const increment = ()=>{
   
    if(x<10){
    x++;
    h.innerHTML=x;

    checkStyle();
  }
}

const decrement=()=>{

    if(x>0){
    x--;
    h.innerHTML=x;
    checkStyle();
  }
}

const checkStyle=()=>{
if(x%2===0){
    
    h.className="even";
}
else{
    
    h.className=("odd");
}
}