function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert cm to m
    var bmi = weight / (height * height);
    var result = bmi.toFixed(2);
    var category;
  
    if (result < 18.5) {
      category = "Underweight";
    } else if (result >= 18.5 && result <= 24.9) {
      category = "Normal weight";
    } else if (result >= 25 && result <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    document.getElementById("result").innerHTML = result;
    document.getElementById("resultbmi").innerHTML = category;
  }
  