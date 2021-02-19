declare const EventEmitter: any;
declare class Timer extends EventEmitter {
    /**
     * Creates a Timer.
     * @param {Number} seconds The number of seconds until Timer finishes
     * @param {Number} notify The number of seconds left you would like to have an event on (default 0)
     */
    constructor(seconds: number, notify?: number[]);
    /**
     * Start the Timer
     */
    startTimer(): void;
    /**
     * Set time left on Timer.
     * @param {Number} seconds The number of seconds until time timer finishes
     */
    setTime(seconds: number): void;
    /**
     * Stop the timer from running
     * @return {Number} Seconds remaining
     */
    getTimeleft(): any;
    /**
     * Stop the timer from running
     */
    stopTimer(): void;
    /**
     * Reset Timer back to what it started with
     */
    resetTime(): void;
}
//# sourceMappingURL=index.d.ts.map