
// inputs 
const days = document.getElementById('day');
const months = document.getElementById('month');
const years = document.getElementById('year');
let resetForm = document.getElementById('form-reset');

// OutPut

let  dayOutPut = document.getElementById('D');
let  monthOutPut = document.getElementById('M');
let  yearOutPut = document.getElementById('Y');




 const form = document.getElementById('form');

 form.addEventListener("submit", handleSubmit);



const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();


const allMonths = [31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31];



function validate (){

  const inputs = document.querySelectorAll('input');
  let validator = true;
  inputs.forEach( (i) =>{
    const parent = i.parentElement;
    if(!i.value){
        i.style.borderColor= 'red';
        parent.querySelector('small').innerText = 'This field is required';
        validator = false;
    }else if(months.value > 12) {
        months.style.borderColor = 'red';
        months.parentElement.querySelector('small').innerText = 'Must be a valid month.'
        validator = false;
    }else if(days.value > 31) {
        days.style.borderColor = 'red';
        days.parentElement.querySelector('small').innerText = 'Must be a valid day.'
        validator = false;
    }else{
        i.style.borderColor = 'black';
        parent.querySelector('small').innerText = '';
        validator = true;
    }

  }); 

  return validator;

}




function handleSubmit (e) {
    e.preventDefault();
    if( validate()) {
        if(days.value > day){

            day = day + allMonths[month - 0];
            month = month - 1;
        }

        if(months.value > month) {
            month = month =+ 12;
            year = year - 1;
        }

        const d = day - days.value;
        const m = month - months.value;
        const y = year - years.value;



        dayOutPut.innerHTML = d;
        monthOutPut.innerHTML = m;
        yearOutPut.innerHTML = y;
    }

   
   
    


}
