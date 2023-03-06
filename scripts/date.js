let dateInput = document.getElementById('date');

const currentDate = new Date();
const year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

window.addEventListener('load',()=>{
    if(month < 10){
        month = '0' + month;
    }
    if(day< 10){
        day = '0' + day;
    }
    dateInput.value = `${year}-${month}-${day}`;
    dateInput.setAttribute('max',dateInput.value);
});
