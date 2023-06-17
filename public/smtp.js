function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Configure SMTP.js
    Email.send({
      Host: "smtp.gmail.com",
      Username: "YOUR_EMAIL",
      Password: "YOUR_PASSWORD",
      To: "aquariusdivinations@gmail.com",
      From: email,
      Subject: "New Message from Contact Form",
      Body: "Name: " + name + "<br>Email: " + email + "<br>Message: " + message
    }).then(function (message) {
      alert("Thank you for contacting us! Your message has been sent.");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
  }