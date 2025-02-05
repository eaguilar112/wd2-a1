function openTab(tabId) {
    let tabs = document.querySelectorAll('div[id^="tab"]');
    tabs.forEach(tab => tab.style.display = "none");

    document.getElementById(tabId).style.display = "block";
}

const getConversion = (from) => {

    const convert = (value) => {
        switch (from) {
            case "cToF":
                return (value * 9 / 5) + 32;
            case "fToC":
                return (value - 32) * 5 / 9;

            case "kmToMi":
                return value / 1.60934;
            case "miToKm":
                return value * 1.60934;

            case "kgToLb":
                return value * 2.20462;
            case "lbToKg":
                return value / 2.20462;
        }
    };

    return (values) => {

        return values.map(val => convert(val));
    };
}

function convertTemperature() {
    let input = parseFloat(document.getElementById('temperature-input').value);
    if (isNaN(input)) return alert("Please enter a valid number");

    let conversionType = document.getElementById('temperature-unit').value;
    
    let convertFunc = getConversion(conversionType);
    let result = convertFunc([input])[0];

    let [from, to] = conversionType.split('To');
    document.getElementById('temperature-output').innerText = 
        `${input}° ${from.toUpperCase()} = ${result.toFixed(2)}° ${to.toUpperCase()}`;
}
