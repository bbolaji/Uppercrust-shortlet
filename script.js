
document.getElementById('guests').addEventListener('change', function () {
    const guestCount = this.value;
    if (guestCount < 1) {
        alert("The number of guests must be at least 1.");
    }
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
});

