
function romanNumercalChecker(input) {
    // var input = document.getElementById('number').value

    if (typeof input === 'string') {

        const romanValues = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

        let convertedRoman = 0;
        let previousValue = 0;

        for (var i = input.length - 1; i >= 0; i--) {
            const currentRoman = input[i];
            const currentValue = romanValues[currentRoman];


            if (currentValue < previousValue) {
                convertedRoman -= currentValue;
            } else {
                convertedRoman += currentValue;
                previousValue = currentValue;
            }
        }
        document.getElementById('result').innerHTML = convertedRoman
        return convertedRoman;
    }
    else if (typeof input === 'number') {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ]

        let result = '';

        let remainingValue = input;

        for (const { value, numeral } of romanNumerals) {

            while (remainingValue >= value) {

                result += numeral;

                remainingValue -= value;
            }

        }
        document.getElementById('result').innerHTML = result
        return result;
    }
}


function isNumberOrString() {
    var input = document.getElementById('number').value;
    var isNumericInput = !isNaN(Number(input));
    var result;
    
    if (isNumericInput) {
        const numberInput = parseInt(input, 10);
        result = romanNumercalChecker(numberInput);
    } else {
        result = romanNumercalChecker(input);
    }

    document.getElementById('result').innerHTML = result;
}

