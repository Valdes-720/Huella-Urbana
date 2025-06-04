
document.addEventListener('DOMContentLoaded', () => {
    const appName = document.getElementById('appName');
    if (appName) {
        appName.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
});

function goToMenu() {
    window.location.href = 'menu.html';
}
