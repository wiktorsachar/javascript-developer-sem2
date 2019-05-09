class PositionRandomizer {
    randomizer() {
        return Math.floor(Math.random() * 8);
    }
    init() {
        return {
            x: this.randomizer(),
            y: this.randomizer()
        }
    }
}

module.exports = PositionRandomizer;