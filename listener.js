class Listener {

    game

    constructor(game) {
        // Reigister start button click listener
        this.game = game
        document.querySelector('.start-button').addEventListener('click', (e) => this.startButtonClicked(e))
    }

    startButtonClicked = (e) => {
        e.target.remove() // Remove click button
        document.addEventListener('keypress', (e) => this.keyPressed(e)) 
        document.addEventListener('keydown', (e) => this.checkBackspace(e)) 
        document.querySelector('#game-string').style.display = 'block'
        document.querySelector('#text-input').style.display = 'block'
        this.next()
    }

    keyPressed = (e) => {
        let key = e.key;
        if(key.toLowerCase() === "enter") {
            if(this.game.getResult()) { // win
                this.next()
            } else { // lose
                document.querySelector('#game-string').innerText = `You lose. Rounds: ${this.game.getRound()}`
                this.game.clearInput()
                this.updateInputUI()
                document.querySelector('#text-input').style.display = 'none'
                let restartBtn = document.querySelector('#restart')
                restartBtn.style.display = 'block'
                restartBtn.addEventListener('click', (e) => location.reload())
            }
        }
        else {
            this.game.updatePlayerInput(key)
            this.updateInputUI()
        }
        
    }

    next = () => {
        this.game.updateRound()
        this.game.clearInput()
        this.updateInputUI()
        let gameStr = document.querySelector('#game-string')
        let letter = this.game.getRandomLetter()
        this.game.newLetter() // Generate a new letter
        let time = (this.game.getRound() * 100) + 500;
        console.log(time)
        gameStr.innerText = this.game.getSolution()
        setTimeout(() => {
            gameStr.innerText = ""
        }, time)
    }

    updateInputUI = () => {
        let playerInput = this.game.getPlayerInput()
        document.querySelector("#text-input").innerText = playerInput;
    }

    checkBackspace = (e) => {
        if(e.key.toLowerCase() === 'backspace') {
            let pInput = this.game.getPlayerInput()
            this.game.setPlayerInput(pInput.substring(0,pInput.length-1))
            this.updateInputUI()
        }
    }
}