
document.querySelector('.btn').addEventListener ('click', calcutor)

let number = document.querySelector('#numbers');
let output = document.querySelector('#otp')

let x;


const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };


  let newList = '';

  function calcutor () {    
      let input_num = number.value;

    if(input_num < 0 || input_num > 3000) {
        return alert('Please enter a number between 0-3000')
    } 
     
    
    let result = ''
    for (const x in roman ) {
       let result = Math.floor(input_num / roman[x]);
       input_num = input_num % roman[x];
       newList += x.repeat(result)
      }

      output.innerHTML = newList
      newList = '';
      number.value = '';
      number.focus()
            
    }

   
  

 






 