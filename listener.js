class Listener {

    game

    constructor() {
        // Reigister start button click listener
        document.querySelector('.start-button').addEventListener('click', (e) => this.startButtonClicked(e))
    }

    startButtonClicked = (e) => {
        e.target.remove() // Remove click button
        this.game = new Game() // Create game
        document.addEventListener('keypress', (e) => this.keyPressed(e)) // Register key pressed event listener
    }

    keyPressed = (e) => {
        console.log("Key pressed")
        let key = e.key;
        this.game.updatePlayerInput(key)
        let playerInput = this.game.getPlayerInput()
        document.querySelector("#text-input").innerText = playerInput;
    }

}