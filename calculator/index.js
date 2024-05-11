const display = document.getElementById("display");

function calculate() {
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        display.value = "ERROR";
    }
    
}

function addToDisplay(input) {
    display.value += input; 

}

function clearDisplay() {
    display.value = "";
}