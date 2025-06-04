// script.js - For the Restaurant Reservation page

// Attach an event listener to the reservation form
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    // Retrieve and trim form field values
    const primaryMember = document.getElementById('primary-member').value.trim();
    const guests = document.getElementById('guests').value.trim();

    // Optional client-side validation:
    // If any required field is empty, prevent the form submission and alert the user.
    if (primaryMember === "" || guests === "") {
        event.preventDefault(); // Prevent form submission if validation fails
        alert("Please fill in all required fields.");
        return false;
    }

    // If validation passes, we DO NOT call event.preventDefault()
    // so that the form is submitted traditionally to the /restaurant route.
});