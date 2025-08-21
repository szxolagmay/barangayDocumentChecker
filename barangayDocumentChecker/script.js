function login() {
  const code = document.getElementById('brgyCode').value;
  if (code.trim() === '') {
    alert('Please enter a Barangay Code.');
  } else {
    alert('Logging in with code: ' + code);
  }
}
