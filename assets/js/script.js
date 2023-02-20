const game = () => {
    let playerScore = 0;
    let CpuScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.title button');
        const startScreen = document.querySelector('.title');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {

        });
    };

    //Play Game
    const playGame = () => {
        const options = document.querySelector('.choices button');
        const player = document.querySelector('.images player-image');
        const cpu = document.querySelector('.images cpu-image');

        //Cpu choices
        const computerChoices = ['infantry', 'cavalry', 'archers'];

        const computerNumber = Math.random() * 3;
    }

    //Call all inner functions

    startGame();
    updateScore();

};

//Start the game

startGame();