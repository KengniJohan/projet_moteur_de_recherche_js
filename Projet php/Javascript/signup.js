const  form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input");

form.onsubmit = (e)=>{
  e.preventDefault();//preventing form submitting 

}

continueBtn.onclick = ()=>{

//let's start Ajax
let xhr = new XMLHttpRequest();//creating XML object
xhr.open("POST", "php/signup.php", true);
xhr.onload = ()=>{
   if(xhr.readState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        let date = xhr.response;
        console.log(data);
      }
    }

  }
  //we have to send the form data through ajax to php
  let formData = new FormData(form);
  xhr.send(formData);
 
}