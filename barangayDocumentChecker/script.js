function login() {
  const code = document.getElementById('brgyCode').value;
  if (code.trim() === '') {
    alert('Please enter a Barangay Code.');
  } else {
    // Simulate redirect or auth check
    alert('Logging in with code: ' + code);
    // You can redirect or do actual authentication here
  }
}
