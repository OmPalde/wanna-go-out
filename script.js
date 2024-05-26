document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const title = document.getElementById('title');
    const locationInput = document.getElementById('locationInput');
    const locationField = document.getElementById('location');

    yesButton.addEventListener('click', () => {
        title.style.display = 'none';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        locationInput.style.display = 'block';
    });

    noButton.addEventListener('mouseover', (event) => {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
        noButton.style.left = x + 'px';
        noButton.style.top = y + 'px';
    });

    locationField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const location = locationField.value;
            alert('AT YOUR SERVICE');

            // Send a message via WhatsApp (this needs backend support to send actual message)
            window.open(`https://api.whatsapp.com/send?phone=919356976807&text=User wants to go to: ${encodeURIComponent(location)}`, '_blank');
        }
    });
});
