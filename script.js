document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buy');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const phoneId = button.getAttribute('data-id');
            alert(`Téléphone ${phoneId} ajouté au panier!`);
        });
    });
});
