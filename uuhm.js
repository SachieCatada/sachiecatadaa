document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('changeTextBtn');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'FACEBOOK: SACHIE CATADA | NUMBER: 091234567';
    });
});