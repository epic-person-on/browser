document.getElementById('imageForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var fileInput = this.querySelector('input[type="file"]');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = async function(e) {
        // Convert image to data URL
        var imageData = e.target.result;
        formData.append('url', imageData);

        var options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '3b143502a0mshe887b77a672d0b8p10626cjsnaf8a412d73d3',
                'X-RapidAPI-Host': 'microsoft-computer-vision3.p.rapidapi.com'
            },
            body: JSON.stringify({
                url: imageData
            })
        };

        try {
            // Make API request
            const response = await fetch('https://microsoft-computer-vision3.p.rapidapi.com/detect', options);
            const result = await response.json();
            displayResponse(result);
        } catch (error) {
            console.error(error);
        }
    };

    // Read the image file
    reader.readAsDataURL(file);
});

function displayResponse(data) {
    var responseDiv = document.getElementById('response');

    // Clear previous response
    while (responseDiv.firstChild) {
        responseDiv.removeChild(responseDiv.firstChild);
    }

    // Display the API response
    var responseHeader = document.createElement('h2');
    responseHeader.textContent = 'API Response:';
    responseDiv.appendChild(responseHeader);

    var name = data.name;

    var responseText = document.createElement('p');
    responseText.textContent = 'detected object: ' + name;
    responseDiv.appendChild(responseText);
}
