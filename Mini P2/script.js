const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');
    const message = document.querySelector('.message');

    if (isNaN(Height) || Height <= 0) {
        result.innerHTML = 'Please provide a valid Height.';
        result.style.color = 'red';
    } else if (isNaN(Weight) || Weight <= 0) {
        result.innerHTML = 'Please provide a valid Weight.';
        result.style.color = 'red';
    } else {
        const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
        result.innerHTML = `<h2>Your BMI is: ${bmi}</h2>`;
        result.style.color = 'blue';
        if (bmi < 18.6) {
            message.innerHTML = `<h3>You are underweight. Consider consulting a healthcare provider for advice on gaining weight in a healthy way.</h3>`;
            message.style.color = 'orange';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message.innerHTML = `<h3>Your weight is within a healthy range. Keep up the good work and maintain a balanced lifestyle!</h3>`;
            message.style.color = 'green';
        } else if (bmi >= 25 && bmi <= 29.9) {
            message.innerHTML = `<h3>You are overweight. It may be helpful to focus on a balanced diet and regular exercise.</h3>`;
            message.style.color = 'yellow';
        } else {
            message.innerHTML = `<h3>Your BMI indicates obesity. Please consult with a healthcare provider to discuss a plan for improving your health.</h3>`;
            message.style.color = 'purple';
        }
        
    }
});
