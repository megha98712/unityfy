const convertBtn = document.getElementById('convert-btn');
const inputValue = document.getElementById('input-value');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const result = document.getElementById('result');

// Units array (max 10)
const units = [
    { name: "Meter", value: "meter", toMeter: 1 },
    { name: "Kilometer", value: "kilometer", toMeter: 1000 },
    { name: "Feet", value: "feet", toMeter: 0.3048 },
    { name: "Inch", value: "inch", toMeter: 0.0254 },
    { name: "Yard", value: "yard", toMeter: 0.9144 },
    { name: "Mile", value: "mile", toMeter: 1609.34 },
    { name: "Centimeter", value: "centimeter", toMeter: 0.01 },
    { name: "Millimeter", value: "millimeter", toMeter: 0.001 },
    { name: "Micrometer", value: "micrometer", toMeter: 0.000001 },
    { name: "Nanometer", value: "nanometer", toMeter: 0.000000001 }
];

// Populate dropdowns dynamically
units.forEach(unit => {
    const option1 = document.createElement('option');
    option1.value = unit.value;
    option1.textContent = unit.name;
    fromUnitSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = unit.value;
    option2.textContent = unit.name;
    toUnitSelect.appendChild(option2);
});

// Conversion function
function convertUnits(value, from, to) {
    const fromUnit = units.find(u => u.value === from);
    const toUnit = units.find(u => u.value === to);

    if (!fromUnit || !toUnit) return value;

    const valueInMeters = value * fromUnit.toMeter;
    return valueInMeters / toUnit.toMeter;
}

// Event listener
convertBtn.addEventListener('click', () => {
    const value = parseFloat(inputValue.value);
    if (isNaN(value)) {
        alert("Please enter a valid number!");
        return;
    }

    const from = fromUnitSelect.value;
    const to = toUnitSelect.value;
    const convertedValue = convertUnits(value, from, to);
    result.textContent = `${value} ${from} = ${convertedValue.toFixed(6)} ${to}`;
});
