class Game {

    playerInput
    solution
    round

    constructor() {
        this.round = 0
        this.solution = ""
        this.start = false
        this.gameOver = false
        this.clearInput()
    }

    // Setters
    setPlayerInput = (input) => this.playerInput = input

    setSolution = (input) => this.solution = input

    // Getters
    getPlayerInput = () => this.playerInput

    getSolution = () => this.solution

    // Add player input to stored input
    updatePlayerInput =  (key) => this.setPlayerInput(this.getPlayerInput() + key)

    // Clears player input
    clearInput = () => this.setPlayerInput("")

    // Generate random letter
    getRandomLetter = () => (Math.random() + 1).toString(36).charAt(2)

    updateSolution = (char) => this.setSolution(this.getSolution() + char)

    newLetter = () => this.updateSolution(this.getRandomLetter())

    started = () => this.start = true

    getStarted = () => this.start

    // Not over
    notOver = () => !this.gameOver

    getResult = () => this.getPlayerInput() === this.getSolution()

    updateRound = () => this.round++

    getRound = () => this.round

}