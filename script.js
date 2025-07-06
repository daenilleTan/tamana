
  function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
      // Proceed to homepage
      window.location.href = "index.html";
      return false;
    } else {
      alert("Please enter both username and password.");
      return false;
    }
  }

