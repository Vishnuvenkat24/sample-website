const totalSubjectsInput = document.getElementById('totalSubjects');
const gradesInputArea = document.getElementById('gradesInputArea');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');
const errorMsg = document.getElementById('errorMsg');

totalSubjectsInput.addEventListener('input', () => {
  const count = parseInt(totalSubjectsInput.value);
  gradesInputArea.innerHTML = '';
  resultDiv.textContent = '';
  errorMsg.textContent = '';
  calculateBtn.disabled = true;

  if (count > 0 && count <= 20) {
    for (let i = 1; i <= count; i++) {
      const label = document.createElement('label');
      label.textContent = `Grade for Subject ${i} (0 - 10)`;
      label.htmlFor = `grade${i}`;

      const input = document.createElement('input');
      input.type = 'number';
      input.id = `grade${i}`;
      input.min = '0';
      input.max = '10';
      input.step = '0.01';
      input.placeholder = 'Enter grade';
      input.required = true;

      gradesInputArea.appendChild(label);
      gradesInputArea.appendChild(input);
    }
    calculateBtn.disabled = false;
  } else {
    errorMsg.textContent = 'Please enter a number between 1 and 20.';
  }
});

calculateBtn.addEventListener('click', () => {
  errorMsg.textContent = '';
  resultDiv.textContent = '';

  const count = parseInt(totalSubjectsInput.value);
  let total = 0;
  let valid = true;

  for (let i = 1; i <= count; i++) {
    const gradeInput = document.getElementById(`grade${i}`);
    const val = parseFloat(gradeInput.value);

    if (isNaN(val) || val < 0 || val > 10) {
      valid = false;
      errorMsg.textContent = `Please enter valid grades between 0 and 10 for all subjects.`;
      break;
    }
    total += val;
  }

  if (valid) {
    const cgpa = total / count;
    resultDiv.textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }
});
