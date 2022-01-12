// 1.1 Add a button to the html file and print in console the event when clicking it
const newBtn = document.querySelector('#btnToClick');
newBtn.addEventListener('click', () => {
    console.log(event);
});

// 1.2 Add a focus event that prints by console the value of the input.
const focusInput = document.querySelector('.focus');
focusInput.addEventListener("focus", (event) => { 
    console.log(event.target.value);
});

// 1.3 Add an input event that prints by console the value of the input.
const valueInput =  document.querySelector('.input');
valueInput.addEventListener('input',(event) =>{
    console.log(event.target.value)
})