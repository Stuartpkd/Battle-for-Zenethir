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
        const choices = document.querySelectorAll('.choices button');
        const playerImage = document.querySelector('.images playerImage');
        const cpuImage = document.querySelector('.images cpuImage');

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
                playerImage.src = `./assets/temp/${this.textContent.toLowerCase}.svg`;
                cpuImage.src = `./assets/temp/${this.textContent.toLowerCase}.svg`;

            });
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
                return;
            } else if (cpuChoice === 'cavalry' || cpuChoice === 'spearman') {
                winner.textContent = 'Cpu Wins';
                return;
            }
        }

        //Check for archers
        if (playerChoice === 'archers') {
            if (cpuChoice === 'spearman' || cpuChoice === 'cavalry') {
                winner.textContent = 'Player Wins';
                return;
            } else if (cpuChoice === 'swordsman' || cpuChoice === 'catapult') {
                winner.textContent = 'Cpu Wins';
                return;
            }
        }

        //Check for cavalry
        if (playerChoice === 'cavalry') {
            if (cpuChoice === 'swordsman' || cpuChoice === 'catapult') {
                winner.textContent = 'Player Wins';
                return;
            } else if (cpuChoice === 'spearman' || cpuChoice === 'archers') {
                winner.textContent = 'Cpu Wins';
                return;
            }
        }

        //Check for catapult
        if (playerChoice === 'catapult') {
            if (cpuChoice === 'archers' || cpuChoice === 'spearman') {
                winner.textContent = 'Player Wins';
                return;
            } else if (cpuChoice === 'swordsman' || cpuChoice === 'cavalry') {
                winner.textContent = 'Cpu Wins';
                return;
            }
        }

        //Check for spearman
        if (playerChoice === 'spearman') {
            if (cpuChoice === 'swordsman' || cpuChoice === 'cavalry') {
                winner.textContent = 'Player Wins';
                return;
            } else if (cpuChoice === 'catapult' || cpuChoice === 'archer') {
                winner.textContent = 'Cpu Wins';
                return;
            }
        }
    };

    //Call all inner functions

    startGame();
    playGame();


};

//Rules popup function

function togglePopup() {
    document.getElementById('popup-rules').classList.toggle('active');
}

//Start the game

game();