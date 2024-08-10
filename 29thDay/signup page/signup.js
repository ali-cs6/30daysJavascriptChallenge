document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById('signupForm');
  
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let username = document.getElementById('signupUsername').value
      let password = document.getElementById('signupPassword').value
      let confirmPass = document.getElementById('confirmPassword').value
  
      sessionStorage.setItem('loggedInUser', username);
  
      if (password !== confirmPass) {
          alert('Password do not match. Please try again!')
          return
      }
  
      let users = JSON.parse(localStorage.getItem('users')) || []
      let userExists = users.some(user => user.username === username)
  
      if (userExists) {
          alert('Username already exits. please Login')
      } else {
          users.push({username, password})
          localStorage.setItem('users', JSON.stringify(users))
          alert('Sign up successfull!')
          window.location.href = '../dashboard/dashboard.html'
      }
    });
  });