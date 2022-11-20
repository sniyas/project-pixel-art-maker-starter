let selectedColor = document.getElementById("colorPicker");
let sizePicker = document.getElementById("sizePicker");
let canvasTable = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
let submitBtn = document.getElementById("submitBtn");



function makeGrid() { //Function to create the grid pattern according to the user input

    if (canvasTable.firstElementChild) {

        canvasTable.firstElementChild.remove(); //To clear the existing grid if any
    }
    for (let i = 0; i < height; i++) {
        let newRow = canvasTable.insertRow(); //Adds a new row to the table
        for (let j = 0; j < width; j++) {
            let newCell = newRow.insertCell(); //Adds a new cell to the row
            newCell.addEventListener("click", function() {
                if (newCell.style.backgroundColor != '') {
                    newCell.style.backgroundColor = ''; // clears the cell of any background color
                } else {
                    newCell.style.backgroundColor = selectedColor.value; //Adds the selected color from the colorpicker to the cell
                }
            })
        }
    }

}

submitBtn.addEventListener("click", makeGrid);