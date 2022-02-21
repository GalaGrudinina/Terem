//2.3
alert("Привет, мир");

//2.1
function hideHeader(){
  const targetDiv= document.querySelector(".header")
  const displaySetting= targetDiv.style.display;
  const button = document.querySelector(".btn-outline-primary");
  if(displaySetting== "block"){
    targetDiv.style.display="none";
  } else{
    targetDiv.style.display="block";
}
};

//2.2
const newParent = document.querySelector('.block1');
const oldParent = document.querySelector('.block2');
const btn = document.querySelector(".btn-outline-secondary");
btn.addEventListener('click',()=>{
     if(oldParent.childNodes.length > 0 && newParent.childNodes.length>0 ){
        newParent.appendChild(oldParent.childNodes[0]) && 
        oldParent.appendChild(newParent.childNodes[0])
      }
  }
    );


    
       













  

















   






