const grid = document.querySelector('.grid')
const btnGrid = document.querySelector('.btnGrid')
const btnRainbowMode = document.querySelector('.rainbowMode')
const exitRainbowMode = document.querySelector('.closeRainbowMode')

let numberOfSquaresPerSide = 10
let rgbValue = '0,7,75'
let randomColor= false



function makeRainbow(){

    let colors = []
    let rgb = ''

    for(i=1;i<=3;i++){
        let random = Math.floor(Math.random()*255)
        colors.push(String(random))
    }

    for(i=0;i<colors.length;i++){

        let str = colors[i]

        if(i === 2){
            rgb += `${str}`
        }else{
            rgb += `${str},`
        }
    }
    return rgb

}

function addSquares(squareGrid,rgb,randomize){

    const gridWidth = grid.offsetWidth 
    const squareWidth = gridWidth / squareGrid
    for(i=1;i<=(squareGrid * squareGrid);i++){
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.width = `${squareWidth}px`
        square.style.height = `${squareWidth}px`
        square.addEventListener('mouseover', ()=>{

            if(randomize){
                rgb = makeRainbow()
                square.style.background = `rgb(${rgb})`
            }else{
                square.style.background = `rgb(${rgb})`
            }

            
        })
        grid.appendChild(square)
    }

}

addSquares(numberOfSquaresPerSide,rgbValue)

btnGrid.addEventListener('click',()=>{
    numberOfSquaresPerSide = parseInt(prompt('Enter the number of square pixels'))
    if(numberOfSquaresPerSide > 60){
        prompt('enter a value below 20')
    }
    grid.textContent = ''
    addSquares(numberOfSquaresPerSide,rgbValue,randomColor)
})

btnRainbowMode.addEventListener('click',()=>{
    randomColor = true
    grid.textContent = ''
    addSquares(numberOfSquaresPerSide,rgbValue,randomColor)
})

exitRainbowMode.addEventListener('click',()=>{
    randomColor = false
    grid.textContent = ''
    addSquares(numberOfSquaresPerSide,rgbValue,randomColor)

})