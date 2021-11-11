class Game {

    playerInput

    constructor() {
        this.clearInput()
    }

    // Setters
    setPlayerInput = (input) => this.playerInput = input

    // Getters
    getPlayerInput = () => this.playerInput

    // Add player input to stored input
    updatePlayerInput =  (key) => this.setPlayerInput(this.getPlayerInput() + key)

    // Clears player input
    clearInput = () => this.setPlayerInput("")
}