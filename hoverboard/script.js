const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 1000
const signature = [];

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', (e) => {
        setColor(square);
        signature.push(i);
    })

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}
console.log(signature);
while(signature.length > 0){
    for(let i = 0; i < SQUARES; i++) {
        console.log("why not print");
        if(i in signature){
            console.log(i);
            const square = document.createElement('div')
            square.classList.add('square')
            setColor(square);
            removeColor(square);
        }
    }
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}