document.getElementById('submitBtn').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    
    if (form.checkValidity()) {
        const formData = new FormData(form);
        
        fetch('https://itfag.usn.no/~kristoff/app2000/leksjon02/ekko.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Expecting JSON response
        })
        .then(data => {
            console.log(data); // Log the response data
            alert(`Response from server: ${data.message}`); // Display the response
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    } else {
        form.reportValidity(); // Show validation messages if form is invalid
    }
});
