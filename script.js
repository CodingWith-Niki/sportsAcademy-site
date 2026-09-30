
document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let sport = document.getElementById("sport").value;
    let plan = document.getElementById("plan").value;

    
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10 digit phone number");
        return;
    }

    if (sport === "") {
        alert("Please select a sport");
        return;
    }

    if (plan === "") {
        alert("Please select a membership plan");
        return;
    }

    alert("Registration Successful!");

    document.getElementById("registrationForm").reset();

});