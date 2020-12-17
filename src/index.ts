const { EventEmitter } = require("events");

class Timer extends EventEmitter {
  /**
   * Creates a Timer.
   * @param {Number} seconds The number of seconds until Timer finishes
   * @param {Number} endSoon The number of seconds left you would like to have an event on (default 0)
   */
  constructor(seconds: number, endSoon: number = 0) {
    super();
    this.endSoon = endSoon
    this.timeRequested = seconds;
    this.secondsLeft = seconds;
  }

  /**
   * Start the Timer
   */
  startTimer() {
    this.timer = setInterval(() => {
      this.emit("update", this.secondsLeft);
      this.secondsLeft--;

      if (this.secondsLeft == 0) {
        clearInterval(this.timer);
        this.emit("end");
      }
      
      if (this.secondsLeft == this.endSoon && this.endSoon != 0) {
        this.emit("end-soon");
      }
      
    }, 1000);
  }

  /**
   * Set time left on Timer.
   * @param {Number} seconds The number of seconds until time timer finishes
   */
  setTime(seconds: number) {
    this.secondsLeft = seconds;
  }

  /**
   * Stop the timer from running
   * @return {Number} Seconds remaining
   */
  getTimeleft(){
    return this.secondsLeft
  }

  /**
   * Stop the timer from running
   */
  stopTimer() {
    clearInterval(this.timer)
  }

  /**
   * Reset Timer back to what it started with
   */
  resetTime() {
    this.secondsLeft = this.timeRequested;
  }

}
module.exports = Timer;
