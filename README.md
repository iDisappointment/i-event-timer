# i-event-timer
[![npm](https://img.shields.io/npm/dt/i-event-timer.svg?style=for-the-badge)](https://npmjs.com/package/i-event-timer)
[![npm](https://img.shields.io/npm/v/i-event-timer.svg?style=for-the-badge)](https://npmjs.com/package/i-event-timer)

# What is it?

Its a basic timer that triggers events based on time left

# Installation

`npm i i-event-timer`

# Example

```
const Timer = require("i-event-timer");

// First Parameter is seconds you want the timer to go for.
// Second Parameter is when you want to be notified
const countDown = new Timer(60, 30);

countDown.startTimer();

// Update Event fires every second and returns time left
countDown.on("update", (time) => {
  console.log("Time Left: " + time + " seconds.");
});

// End Event fires when the timer has ran out
countDown.on("end", () => {
  console.log("Count down has finished.");
});

// Notify Event fires when the timer has reached the time you wanted to be notified
countDown.on("notify", () => {
  console.log("Count down will be end in 30 seconds.");
});
```


## Usage

---

### `Constructor`

Ex. `const myTimer = new Timer(seconds [, options])`

Starts the timer with the parameters you provided in the constructor.

#### `options`

- `notify: number = 0` - By default, notify will be disabled until you set what remaining time would you like to receive the event

---

### `Timer.startTimer()`

Ex. `myTimer.startTimer()`

Starts the timer with the parameters you provided in the constructor.

---

### `Timer.stopTimer()`

Ex. `myTimer.stopTimer()`

Ends the timer and no more events will be fired, You are able to run `myTimer.startTimer()` to start it again.

---

### `Timer.getTimeleft()`

Ex. `let secondsRemaining = myTimer.getTimeleft()`

Returns the remaining time before the timer ends.

---

### `Timer.setTime(seconds)`

Ex. `myTimer.setTime(120)`

Sets the timers remaining time to the seconds provided.

---

### `Timer.resetTime()`

Ex. `myTimer.resetTime()`

Resets the timer to the starting value as provided in constructor.

---
