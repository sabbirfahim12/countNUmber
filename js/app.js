const buttonAll=document.querySelectorAll('.counterBtn');
//queryselectorall diya sob tag newa jay na class newa jay
let count =0;
buttonAll.forEach(function(button){
  //buttonall taki button tag 2 ta nilam mane counterbutton class taki  
button.addEventListener("click",function(){
if(button.classList.contains('prevBtn')){
  count--;
}else if(button.classList.contains('nextBtn')){
  count++;
}
 const counter=document.getElementById("counter");
 counter.innerText=count
if(count<0){
  counter.style.color="red";
}else{
  counter.style.color="green";
}



})


})
