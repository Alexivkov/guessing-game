class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
         this.guess = function(){
              return Math.ceil(this.min / 2 + this.max / 2);
         
         }
         return this.guess;
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
            this.min = this.guess();
    }
}

module.exports = GuessingGame;
