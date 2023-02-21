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
        const player = document.querySelector('.images player-image');
        const cpu = document.querySelector('.images cpu-image');

        //Cpu options
        const computerChoices = ['swordsman', 'cavalry', 'archers', 'catapult', 'spearman'];

        choices.forEach(option => {
            option.addEventListener('click', function () {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerChoices[computerNumber];

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
            if (computerChoice === 'archers', 'catapult') {
                winner.textContent = 'Player Wins'
                return;
            } else if (computerChoice === 'cavalry', 'spearman') {
                winner.textContent = 'Cpu Wins'
                return;
            }
        }

        //Check for archers
        if (playerChoice === 'archers') {
            if (computerChoice === 'spearman', 'cavalry') {
                winner.textContent = 'Player Wins'
                return;
            } else if (computerChoice === 'swordsman', 'catapult') {
                winner.textContent = 'Cpu Wins'
                return;
            }
        };

        //Check for cavalry
        if (playerChoice === 'cavalry') {
            if (computerChoice === 'swordsman', 'catapult') {
                winner.textContent = 'Player Wins'
                return;
            } else if (computerChoice === 'spearman', 'archers') {
                winner.textContent = 'Cpu Wins'
                return;
            }
        };

        //Check for catapult
        if (playerChoice === 'catapult') {
            if (computerChoice === 'archers', 'spearman') {
                winner.textContent = 'Player Wins'
                return;
            } else if (computerChoice === 'swordsman', 'cavalry') {
                winner.textContent = 'Cpu Wins'
                return;
            }
        };

        //Check for spearman
        if (playerChoice === 'spearman') {
            if (computerChoice === 'swordsman', 'cavalry') {
                winner.textContent = 'Player Wins'
                return;
            } else if (computerChoice === 'catapult', 'archer') {
                winner.textContent = 'Cpu Wins'
                return;
            }
        };
    }

    //Call all inner functions

    startGame();
    playGame();

};

//Start the game

game();