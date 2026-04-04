const form = document.querySelector("form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const results = document.querySelector("#results");

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `BMI Index: ${bmi}`;

    let cat;

    if(bmi < 18.6) {
        cat = "Underweight";
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        cat = "Normal Range"
    } else {
        cat = "Overweight";
    }

    const category = document.querySelector("#category");
    category.innerHTML = cat;
})