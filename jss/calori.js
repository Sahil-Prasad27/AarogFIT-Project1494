document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const ageInput = document.getElementById("age");
    const genderSelect = document.getElementById("gender");
    const activitySelect = document.getElementById("activity");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        const age = parseInt(ageInput.value);
        const gender = genderSelect.value;
        const activityLevel = activitySelect.value;

        if (isNaN(weight) || isNaN(height) || isNaN(age)) {
            resultDiv.textContent = "Please enter valid values.";
        } else {
            const maintenanceCalories = calculateMaintenanceCalories(weight, height, age, gender, activityLevel);
            resultDiv.textContent = `Your estimated maintenance calories: ${maintenanceCalories.toFixed(0)} calories/day`;
        }
    });

    function calculateMaintenanceCalories(weight, height, age, gender, activityLevel) {
        // Basal Metabolic Rate (BMR) calculation
        let bmr = 0;
        if (gender === "male") {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else if (gender === "female") {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Adjust for activity level
        let maintenanceCalories = 0;
        switch (activityLevel) {
            case "sedentary":
                maintenanceCalories = bmr * 1.2;
                break;
            case "lightlyActive":
                maintenanceCalories = bmr * 1.375;
                break;
            case "moderatelyActive":
                maintenanceCalories = bmr * 1.55;
                break;
            case "veryActive":
                maintenanceCalories = bmr * 1.725;
                break;
            case "superActive":
                maintenanceCalories = bmr * 1.9;
                break;
            default:
                maintenanceCalories = bmr;
        }

        return maintenanceCalories;
    }
});
