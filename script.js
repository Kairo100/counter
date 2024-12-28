let count =0;
const buttons = document.querySelectorAll(".btn-counter");
const counter= document.querySelector(".counter-machine");
const  counterContainer = document.querySelectorAll(".counter");
 
buttons.forEach(function(button){
    button.addEventListener('click',function(){
       if (button.classList.contains("btn-decrease")){
        count--;
       }
       else if(button.classList.contains("btn-Increase")){
        count++;
       }

       counter.textContent=count;


       if(count>0){
        counterContainer.forEach(update);
        
       }
       else if(count<0){
        counterContainer.forEach((counterContainer)=> counterContainer.classList.remove("positive"));
      
        counterContainer.forEach((counterContainer)=> counterContainer.classList.add("negative"));
      
       }
       else {
        counterContainer.forEach((counterContainer)=> counterContainer.classList.remove("negative","positive"));
       }

     
    })






})();
function update (){

    counterContainer.forEach((counterContainer)=> counterContainer.classList.remove("negative"));
        counterContainer.forEach((counterContainer)=> counterContainer.classList.add("positive"));
      
}









function  buttonChanger(){
   
}