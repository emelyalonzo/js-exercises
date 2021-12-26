function setBackground() {
    const paragraph = document.body.querySelectorAll('p');
    paragraph[0].style.backgroundColor = 'red';
    paragraph[1].style.backgroundColor = 'blue';
    
}
const dogs = [
    { name: "balto", type: "chihuaha" },
    { name: "loli", type: "puddle" },
];
function addElements() {
    for (let i = 0; i < dogs.length; i++) {
        let newElem = document.createElement('h1');
        newElem.textContent = dogs[i].name + " es un " + dogs[i].type;
        let body = document.querySelector('body'); 
        body.appendChild(newElem);
    }
  }