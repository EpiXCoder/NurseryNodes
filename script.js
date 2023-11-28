document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.closest('.code-container').querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 2000); // Reset button text after 2 seconds
        });
    });
});

