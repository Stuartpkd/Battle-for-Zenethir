const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.title button');
        const startScreen = document.querySelector('.title');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            startScreen.classList.add("fadeOut");
            match.classList.add("fadeIn")
        });
    };



    //Play Game
    const playGame = () => {
        const choices = document.querySelectorAll('.choices button');
        const playerImage = document.getElementById('playerImage');
        const cpuImage = document.getElementById('cpuImage');

        //Cpu options
        const computerChoices = ['swordsman', 'cavalry', 'archers', 'catapult', 'spearman'];

        choices.forEach(option => {
            option.addEventListener('click', function () {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 5);
                const cpuChoice = computerChoices[computerNumber];
                //Compare Choices
                compareChoice(this.textContent.toLowerCase(), cpuChoice);
                //Update Images
                playerImage.src = './assets/temp/' + this.textContent.toLowerCase() + '.svg';
                cpuImage.src = './assets/temp/' + cpuChoice + '.svg';

            });
        });
    };



    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const cpuScore = document.querySelector('.cpu-score p');
        playerScore.textContent = pScore;
        cpuScore.textContent = cScore;
    }

    function endgame() {
        if (pScore === 5) {
            const victoryScreen = document.getElementById('popup-victory');
            victoryScreen.classList.remove('hidden');

        } else if (cScore === 5) {
            const defeatScreen = document.getElementById('popup-defeat');
            defeatScreen.classList.remove('hidden');

        }
    };


    const playAgain = () => {
        const playAgainBtn = document.getElementsByClassName('play-again');

        playAgainBtn.addEventListener('click', () => {
            const victoryScreen = document.getElementById('popup-victory');
            victoryScreen.classList.add('hidden');
            const defeatScreen = document.getElementById('popup-defeat');
            defeatScreen.classList.add('hidden');
            startGame();
        });
    };


    //Choice Comparison - tie

    const compareChoice = (playerChoice, cpuChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        if (playerChoice === cpuChoice) {
            winner.textContent = 'It is a draw';
            return;
        }
        //Check for swordsman
        if (playerChoice === 'swordsman') {
            if (cpuChoice === 'archers' || cpuChoice === 'catapult') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                endgame();
                return;
            } else if (cpuChoice === 'cavalry' || cpuChoice === 'spearman') {
                winner.textContent = 'Cpu Wins';
                cScore++
                updateScore();
                endgame();
                return;
            }
        }

        //Check for archers
        if (playerChoice === 'archers') {
            if (cpuChoice === 'spearman' || cpuChoice === 'cavalry') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                endgame();
                return;
            } else if (cpuChoice === 'swordsman' || cpuChoice === 'catapult') {
                winner.textContent = 'Cpu Wins';
                cScore++
                updateScore();
                endgame();
                return;
            }
        }

        //Check for cavalry
        if (playerChoice === 'cavalry') {
            if (cpuChoice === 'swordsman' || cpuChoice === 'catapult') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                endgame();
                return;
            } else if (cpuChoice === 'spearman' || cpuChoice === 'archers') {
                winner.textContent = 'Cpu Wins';
                cScore++
                updateScore();
                endgame();
                return;
            }
        }

        //Check for catapult
        if (playerChoice === 'catapult') {
            if (cpuChoice === 'archers' || cpuChoice === 'spearman') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                endgame();
                return;
            } else if (cpuChoice === 'swordsman' || cpuChoice === 'cavalry') {
                winner.textContent = 'Cpu Wins';
                cScore++
                updateScore();
                endgame();
                return;
            }
        }

        //Check for spearman
        if (playerChoice === 'spearman') {
            if (cpuChoice === 'swordsman' || cpuChoice === 'cavalry') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                endgame();
                return;
            } else if (cpuChoice === 'catapult' || cpuChoice === 'archer') {
                winner.textContent = 'Cpu Wins';
                cScore++
                updateScore();
                endgame();
                return;
            }
        }
    };

    //Call all inner functions

    startGame();
    playGame();
    playAgain();
};

//Rules popup function

function togglePopup() {
    document.getElementById('popup-rules').classList.toggle('active');
}

//Start the game

game();