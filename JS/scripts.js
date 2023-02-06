const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    } 
    addDigit(digit) {
        
        this.currentOperation = digit
        this.updateScreen()
    }

    processOperation(operation) {
        
        let operationValue;
        const previous = +this.previousOperationText.innerText;
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+": 
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;



               
                
        }

    }

    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
        ) {

            if(operationValue === null) {
                this.currentOperationText.innerText += this.currentOperation;
            } else {
                // verifica se o valor é zero, se for apenas adiciona o valor atual
                if(previous === 0) {
                    operationValue = current
                }
                    this.previousOperationText.innerText = `${operationValue} ${operation}` 
                    this.currentOperationText.innerText = "";
            } 
    }
} 

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});
