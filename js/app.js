document.addEventListener("DOMContentLoaded", function () {

    var left = '';
    var right = '';
    var memory = '';
    var screen = document.querySelector('.screen');
    var operator = '';
    screen.innerHTML = '0';

    // function screenMaxLength(number) {
    //     if (number.length > 12) {
    //         number = '';
    //         screen.innerHTML = ('Too long!');
    //     }
    // }

    var numButtons = document.querySelectorAll('.numbers');

    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', function() {
            if (screen.innerHTML == '0') {
                if (this.innerHTML == '0') {
                    left = '0'
                } else if (this.innerHTML == '.') {
                    left = '0.'
                    screen.innerHTML = left;
                } else {
                    left = this.innerHTML;
                    screen.innerHTML = left;
                }     
            } else {
                if (memory === '') {
                    left += this.innerHTML;
                    screen.innerHTML = left;
                } else {
                    right += this.innerHTML;
                    screen.innerHTML = right;
                    if (operator === '+') {
                        memory = (parseFloat(left) + parseFloat(right)).toString();
                   }
                   else if (operator === '-') {
                        memory = (parseFloat(left) -  parseFloat(right)).toString();
                   }
                   else if (operator === 'x') {
                        memory = (parseFloat(left) *  parseFloat(right)).toString();
                   }
                   else if (operator === '\u00F7') {
                        memory = (parseFloat(left) /  parseFloat(right)).toString();
                   }
                }
                
            } 
        });
    }

    var clearButton = document.querySelector('.clear');

    clearButton.addEventListener('click', function() {
        left = '';
        right = '';
        memory = '';
        screen.innerHTML = '0';
    });

    var operators = document.querySelectorAll('.operators');

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
            if (right === '') {
                operator = this.innerHTML;
                memory = operator;
                screen.innerHTML += operator;
            } else {
                screen.innerHTML = memory;
                operator = this.innerHTML;
                left = memory;
                screen.innerHTML += operator;
                right = '';
            }
        });
    }

    var equals = document.querySelector('.equals');

    equals.addEventListener('click', function() {
        if (operator === '+') {
            memory = (parseFloat(left) + parseFloat(right)).toString();
       }
       else if (operator === '-') {
            memory = (parseFloat(left) -  parseFloat(right)).toString();
       }
       else if (operator === 'x') {
            memory = (parseFloat(left) *  parseFloat(right)).toString();
       }
       else if (operator === '\u00F7') {
            memory = (parseFloat(left) /  parseFloat(right)).toString();
       }

        screen.innerHTML = memory;
        left = '';
        right = '';
        memory = '';
    });     
});