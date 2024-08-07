document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value
    };

    console.log('Sending form data:', formData); // Log the form data

    fetch('/.netlify/functions/appointment-handler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('appointment-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your appointment request. Please try again.');
    });
});
