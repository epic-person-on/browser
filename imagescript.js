document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    // Make API request
    const url = 'https://microsoft-computer-vision3.p.rapidapi.com/analyze?language=en&visualFeatures%5B0%5D=ImageType';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3b143502a0mshe887b77a672d0b8p10626cjsnaf8a412d73d3',
            'X-RapidAPI-Host': 'microsoft-computer-vision3.p.rapidapi.com'
        },
        body: {
            url: formData
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        
        
    } catch (error) {
        console.error(error);
    }


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

    var responseText = document.createElement('p');
    var responsemsg = JSON.parse(results)
    responseText.textContent = responsemsg.name
    responseDiv.appendChild(responseText);
}
