function convertTemperature() {

    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    let celsius = document.getElementById("celsius");
    let fahrenheit = document.getElementById("fahrenheit");
    let kelvin = document.getElementById("kelvin");

    error.innerHTML = "";

    if (temp === "") {
        error.innerHTML = "Please enter a temperature.";
        return;
    }

    temp = Number(temp);

    let c, f, k;

    switch (unit) {

        case "celsius":

            if (temp < -273.15) {
                error.innerHTML = "Temperature cannot be below Absolute Zero (-273.15°C)";
                return;
            }

            c = temp;
            f = (temp * 9 / 5) + 32;
            k = temp + 273.15;
            break;

        case "fahrenheit":

            if (temp < -459.67) {
                error.innerHTML = "Temperature cannot be below Absolute Zero (-459.67°F)";
                return;
            }

            c = (temp - 32) * 5 / 9;
            f = temp;
            k = c + 273.15;
            break;

        case "kelvin":

            if (temp < 0) {
                error.innerHTML = "Temperature cannot be below Absolute Zero (0 K)";
                return;
            }

            c = temp - 273.15;
            f = (c * 9 / 5) + 32;
            k = temp;
            break;
    }

    celsius.innerHTML = c.toFixed(2) + " °C";
    fahrenheit.innerHTML = f.toFixed(2) + " °F";
    kelvin.innerHTML = k.toFixed(2) + " K";
}

function resetFields() {

    document.getElementById("temperature").value = "";
    document.getElementById("unit").selectedIndex = 0;

    document.getElementById("celsius").innerHTML = "-- °C";
    document.getElementById("fahrenheit").innerHTML = "-- °F";
    document.getElementById("kelvin").innerHTML = "-- K";

    document.getElementById("error").innerHTML = "";
}