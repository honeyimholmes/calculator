document.addEventListener("DOMContentLoaded", function () {

    var number = '';
    var newNumber = '';
    var screen = document.querySelector('.screen');
    var operator = '';
    screen.innerHTML = '0';

    function screenMaxLength(number) {
        if (number.length > 12) {
            number = '';
            screen.innerHTML = ('Too long!');
        }
    }

    var numButtons = document.querySelectorAll('.numbers');

    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', function() {
            if (number == '0') {
                if (this.innerHTML == '0') {
                    number = '0'
                } else if (this.innerHTML == '.') {
                    number = '0.'
                } else {
                    number = this.innerHTML
                }     
            } else {
                number += this.innerHTML;
            }
            screen.innerHTML = number;
            screenMaxLength(number);
        });
    }

    var clearButton = document.querySelector('.clear');

    clearButton.addEventListener('click', function() {
        number = '0';
        screen.innerHTML = number;
    });

    var operators = document.querySelectorAll('.operators');

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
            operator = this.innerHTML;
            newNumber = number;
            number = '';
            screen.innerHTML += operator;
        });
    }

    var equals = document.querySelector('.equals');

    equals.addEventListener('click', function() {
        if (operator === '+') {
             number = (parseFloat(newNumber) + parseFloat(number)).toString();
        }
        else if (operator === '-') {
            number = (parseFloat(newNumber) -  parseFloat(number)).toString();
        }
        else if (operator === 'x') {
            number = (parseFloat(newNumber) *  parseFloat(number)).toString();
        }
        else if (operator === '\u00F7') {
            number = (parseFloat(newNumber) /  parseFloat(number)).toString();
        }
        screenMaxLength(number);
        screen.innerHTML = number;
        number = '';
        newNumber = '';
    });     
});