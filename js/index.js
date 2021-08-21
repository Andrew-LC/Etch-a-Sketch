const container = document.querySelector('.etch-canvas');
const clear = document.querySelector('#clear');
const submit = document.querySelector('#btn');
const row = document.querySelector('#row');
const column = document.querySelector('#column');
const color = document.querySelector('#color');



function createGrid(rows=16, columns=16){ 
    for(let i = 0; i <= rows*columns; i++){
        const newDiv = document.createElement('div');
        //Add a grid property to make the row a * b size
        container.style.display = "grid";
        container.style.gridTemplateColumns = `repeat(${columns}, minmax(1rem, 1fr))`;
        container.style.gridTemplateRows = `repeat(${rows}, minmax(2rem, 1fr))`;
        newDiv.setAttribute('class', 'pixel');
        newDiv.onmouseover = () => {for(let i = 0;  i <= container.childElementCount; i++){
            newDiv.style.backgroundColor = color.value;
        }}
        container.appendChild(newDiv);
    }
}

function deleteGrid(){
    container.innerHTML = "";
}

function newGrid(){
    return createGrid(row.value, column.value);
}


function eraseGrid(){
    for(let i = 0; i<= container.childElementCount; i++){
        container.childNodes[i].style.backgroundColor = "white";
    }
}


createGrid(); //create a default grid


clear.addEventListener('click', deleteGrid);
submit.addEventListener('click', newGrid);
erase.addEventListener('click', eraseGrid);

