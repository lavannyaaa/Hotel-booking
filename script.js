const bookBtn = document.querySelector('.book-btn');
const formContainer = document.querySelector('.form-container');
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
const roomType = document.getElementById("room-type");
const form = document.querySelector("form");
const error = document.getElementById("error");
const success = document.getElementById("success");


// Add an event listener to the 'BOOK' button
bookBtn.addEventListener('click', function() {
    // Scroll to the form
    formContainer.scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission
    let errorMessages = [];
    error.innerText = "";    // Clear previous error messages
    success.innerText = "";  // Clear previous success message

    // Name must not be less than 5 characters
    if (nameField.value.trim().length < 5) {
        errorMessages.push("Name must be at least 5 characters");
    }

    // Email should have @ character in it
    if (!email.value.includes("@") || email.value.trim() === "") {
        errorMessages.push("Enter a valid email");
    }

    // Date must be selected
    if (date.value === "") {
        errorMessages.push("Please select a booking date");
    }

    // Room type must be selected (cannot be default)
    if (roomType.value === "-Select-" || roomType.value === "") {
        errorMessages.push("Please select a room type");
    }

    // If there are any errors, display them and scroll to the error
    if (errorMessages.length > 0) {
        error.innerText = errorMessages.join(", ");
        error.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        // If no errors, show success message and scroll to it
        success.innerText = "Your form has been submitted!!";
        success.scrollIntoView({ behavior: "smooth", block: "start" });
        form.reset();  // Clear the form after successful submission
    }
});
