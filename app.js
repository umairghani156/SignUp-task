const btn = document.getElementById('btn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('Cpassword');
 function myhandle(){
      if(firstName.value == "" ||
          lastName.value == "" ||
          email.value == "" ||
          password.value == "" ||
          cPassword.value == "" ){
            alert('Plz fill the form correctly')
        
      }else if(password.value <= ){
        alert('Password should 8 charac')
      }else{
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(email.value);
        console.log(password.value);
        console.log(cPassword.value);
      }
      
 }
  
 
 

