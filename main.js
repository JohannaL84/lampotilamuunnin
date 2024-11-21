function celsiuksestaFahrenheitiksi(celsius) { 
    return (celsius * 9/5) + 32; 
} 

function fahrenheitistaCelsiukseksi(fahrenheit) { 
    return (fahrenheit - 32) * 5/9; 
} 

function convertTemperature() { 
    const lämpötila = parseFloat(document.getElementById("temperature").value); 
    const unit = document.querySelector('input[name="unit"]:checked').value; 
    const decimals = parseInt(document.querySelector('input[name="decimals"]:checked').value); 
    
    if (unit === "C" && lämpötila < -273.15) { 
        document.getElementById("result").innerText = "Virhe: Lämpötila ei voi olla alle absoluuttisen nollapisteen (-273,15 °C)."; return; 

        } else if (unit === "F" && lämpötila < -459.67) { 
            document.getElementById("result").innerText = "Virhe: Lämpötila ei voi olla alle absoluuttisen nollapisteen (-459,67 °F)."; return; }
    
    let result; 
    if (unit === "C") { 
        result = celsiuksestaFahrenheitiksi(lämpötila); 

    } else { result = fahrenheitistaCelsiukseksi(lämpötila); 

    }
   
    result = result.toFixed(decimals); 
    document.getElementById("result").innerText = "Tuloksena: " + result + " " + (unit === "C" ? "°F" : "°C");
        
    console.log
}



