document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById('game-container');

    document.getElementById('game1').addEventListener('click', function(e) {
        e.preventDefault();
        loadGame('game1.html'); // Load Game 1
    });

    document.getElementById('game2').addEventListener('click', function(e) {
        e.preventDefault();
        loadGame('game2.html'); // Load Game 2
    });

    document.getElementById('game3').addEventListener('click', function(e) {
        e.preventDefault();
        loadGame('game3.html'); // Load Game 3
    });

    function loadGame(gameUrl) {
        gameContainer.innerHTML = `<iframe src="${gameUrl}" width="100%" height="100%" frameborder="0"></iframe>`;
    }
});
