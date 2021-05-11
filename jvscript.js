var code = document.getElementById("codes");
var play = document.getElementById("btn1");
var remove = document.getElementById("btn2");
var result = document.getElementById("result");

play.onclick= () =>{
    result.innerHTML=code.value;
    localStorage.setItem("local" ,code.value);
}
remove.onclick= ()=>{
    result.innerHTML="";
}
onload =()=>{
  code.value =  localStorage.getItem("local");
  result.innerHTML=code.value;
}

