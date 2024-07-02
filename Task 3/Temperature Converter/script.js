function convertTemperature() {
    
    let temperature = document.getElementById('temperature').value.trim();
    let unit = document.getElementById('unit').value;

   
    if (temperature === '' || isNaN(temperature)) {
        alert('Please enter a valid temperature!');
        return;
    }

    temperature = parseFloat(temperature); 

    let result;
    switch (unit) {
        case 'celsius':
            result = {
                celsius: temperature,
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperature - 32) * 5/9,
                fahrenheit: temperature,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32,
                kelvin: temperature
            };
            break;
        default:
            alert('Invalid unit selection!');
            return;
    }

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `${temperature.toFixed(2)} ${unit.charAt(0).toUpperCase() + unit.slice(1)} is:<br>
                                ${result.celsius.toFixed(2)} Celsius<br>
                                ${result.fahrenheit.toFixed(2)} Fahrenheit<br>
                                ${result.kelvin.toFixed(2)} Kelvin`;
}
