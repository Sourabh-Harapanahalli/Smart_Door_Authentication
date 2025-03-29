// Your API Gateway URL
const apiUrl = 'https://cwt3zu7xrb.execute-api.us-west-2.amazonaws.com/dev/otp';

// Handle form submission
document.getElementById('otpForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    const responseDiv = document.getElementById('response');

    // Prepare the data to send
    const data = { otp };

    try {
        // Send POST request to API Gateway
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });


        const result = await response.json();

        const responseBody = JSON.parse(result.body);

        console.log(responseBody)

        // Handle successful response
        if (responseBody.success === true) {
            responseDiv.innerHTML = `
                <h3>Access Granted</h3>
                <p>Name: ${responseBody.name}</p>
                <p>Email: ${responseBody.email}</p>
            `;
        } else {
            responseDiv.innerHTML = `
                <h3>Invalid OTP</h3>
            `;
        }
    } catch (error) {
        console.error('Error during API request:', error);
        responseDiv.innerHTML = `<h3>Failed to contact server</h3>`;
    }
});
