document.getElementById('booking-form').addEventListener('submit', function(event) {
    // Validate booking form fields before submission
    if (!validateBookingForm()) {
        // If validation fails, prevent the form from submitting
        event.preventDefault();
    }
});

function validateBookingForm() {
    const bookingStatus = document.getElementById('booking-status');
    bookingStatus.classList.add('hidden');
    bookingStatus.textContent = '';

    const primaryGuest = document.getElementById('primary-guest').value.trim();
    const guests = document.getElementById('guests').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const nights = document.getElementById('nights').value;

    if (!primaryGuest || !guests || !checkIn || !checkOut || !nights) {
        bookingStatus.textContent = 'Please fill in all fields.';
        bookingStatus.classList.remove('hidden');
        return false;
    }

    if (Number(guests) < 0 || Number(nights) < 1) {
        bookingStatus.textContent = 'Number of guests cannot be negative, and nights must be at least 1.';
        bookingStatus.classList.remove('hidden');
        return false;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkOutDate <= checkInDate) {
        bookingStatus.textContent = 'Check-out date must be after check-in date.';
        bookingStatus.classList.remove('hidden');
        return false;
    }

    // All validations passed; allow the form to submit
    return true;
}