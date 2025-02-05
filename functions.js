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

document.getElementById("calc").addEventListener("click", (event) => {
    event.preventDefault();

    const cToFValue = (document.getElementById("cToF").value);
    const fToCValue = (document.getElementById("fToC").value);

    let result3 = [];

    const isCToF = document.getElementById("default-radio-1").checked;

    if (isCToF) {
        const cValues = cToFValue.split(',').map(val => parseFloat(val.trim()))
        if (cValues.every(val => !isNaN(val))) {
            const cToFConverter = getConversion("cToF");
            result3 = cToFConverter(cValues);
        } else {
            result3 = ["Invalid input for KM"];
        }
    } else {
        const fValues = fToCValue.split(',').map(val => parseFloat(val.trim()));
        if (fValues.every(val => !isNaN(val))) {
            const fToCConverter = getConversion("fToC");
            result3 = fToCConverter(fValues);
        }
    }

    document.getElementById("result3").value = result3.join(', ');

});