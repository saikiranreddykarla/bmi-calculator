function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const result = document.getElementById('result');
  
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      result.innerHTML = "<p>Please enter valid height and weight.</p>";
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(1);
  
    let category = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    result.innerHTML = `<p>Your BMI is <strong>${bmiRounded}</strong>. You are <strong>${category}</strong>.</p>`;
  }
  