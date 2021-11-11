class Listener {

    game

    constructor() {
        this.startButtonClicked()
    }

    startButtonClicked = () => {
        document.querySelector('.start-button').addEventListener('click', function() {
            this.game = new Game()
            this.keyPressed()
        })
    }

    keyPressed = () => {
        document.addEventListener('keypress', (e) => {
            console.log("Key pressed")
            let key = e.key;
            this.game.updatePlayerInput(key)
            let playerInput = this.game.getPlayerInput()
            document.querySelector("#text-input").innerText = playerInput;
        })
    }

}