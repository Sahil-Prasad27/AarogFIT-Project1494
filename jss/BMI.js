document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight)) {
            resultDiv.textContent = "Please enter valid height and weight.";
        } else {
            const bmi = calculateBMI(height, weight);
            const bmiCategory = getBMICategory(bmi);
            resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
        }
    });

    function calculateBMI(height, weight) {
        // Formula for BMI: weight (kg) / (height (m) * height (m))
        return weight / ((height / 100) * (height / 100));
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 24.9) return "Normal Weight";
        if (bmi < 29.9) return "Overweight";
        return "Obese";
    }
});
