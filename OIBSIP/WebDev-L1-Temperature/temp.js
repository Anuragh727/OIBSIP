let tempInput = document.getElementById("temperature");
let unitSelect = document.getElementById("unit");
let convUnitSelect = document.getElementById("convert-to");
let clearBtn = document.getElementById("clear-btn");
let convertBtn = document.getElementById("convert-btn");
let resultDiv = document.getElementById("result");

clearBtn.addEventListener("click", () => {
    tempInput.value = "";
    unitSelect.value = "";
    convUnitSelect.value = "";
    resultDiv.textContent = "";
});

convertBtn.addEventListener("click", () => {
    let temperature = parseFloat(tempInput.value);
    let unit = unitSelect.value;
    let convertTo = convUnitSelect.value;

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid temperature.";
        return;
    }

    let convertedTemp;

    if (unit === "celsius" && temperature < -273.15) {
        resultDiv.textContent = "Please enter a valid temperature in Celsius.";
        return;
    }
    if (unit === "fahrenheit" && temperature < -459.67) {
        resultDiv.textContent = "Please enter a valid temperature in Fahrenheit.";
        return;
    }
    if (unit === "kelvin" && temperature < 0) {
        resultDiv.textContent = "Please enter a valid temperature in Kelvin.";
        return;
    }


    if (unit === "celsius") {
        if (convertTo === "fahrenheit") {
            convertedTemp = (temperature * 9/5) + 32;
        } else if (convertTo === "kelvin") {
            convertedTemp = temperature + 273.15;
        }
    } else if (unit === "fahrenheit") {
        if (convertTo === "celsius") {
            convertedTemp = (temperature - 32) * 5/9;
        } else if (convertTo === "kelvin") {
            convertedTemp = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (unit === "kelvin") {
        if (convertTo === "celsius") {
            convertedTemp = temperature - 273.15;
        } else if (convertTo === "fahrenheit") {
            convertedTemp = (temperature - 273.15) * 9/5 + 32;
        }
    }

    resultDiv.textContent = `${convertedTemp.toFixed(2)} ${convertTo.charAt(0).toUpperCase() + convertTo.slice(1)}`;
});
