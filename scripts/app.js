const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');


const editPlayer1BtnElement = document.getElementById('edit-player1');
const editPlayer2BtnElement = document.getElementById('edit-player2');
const cancelConfigBtnElement = document.getElementById('cancel-btn');
const startNewGameBtn = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameFieldElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameAreaElement.addEventListener('click', selectGamenField);
}
