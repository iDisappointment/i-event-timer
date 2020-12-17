"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var EventEmitter = require("events").EventEmitter;
var Timer = /** @class */ (function (_super) {
  __extends(Timer, _super);
  /**
   * Creates a Timer.
   * @param {Number} seconds The number of seconds until Timer finishes
   * @param {Number} endSoon The number of seconds left you would like to have an event on (default 0)
   */
  function Timer(seconds, endSoon) {
    if (endSoon === void 0) {
      endSoon = 0;
    }
    var _this = _super.call(this) || this;
    _this.endSoon = endSoon;
    _this.timeRequested = seconds;
    _this.secondsLeft = seconds;
    return _this;
  }
  /**
   * Start the Timer
   */
  Timer.prototype.startTimer = function () {
    var _this = this;
    this.timer = setInterval(function () {
      _this.emit("update", _this.secondsLeft);
      _this.secondsLeft--;
      if (_this.secondsLeft == 0) {
        clearInterval(_this.timer);
        _this.emit("end");
      }
      if (_this.secondsLeft == _this.endSoon && _this.endSoon != 0) {
        _this.emit("end-soon");
      }
    }, 1000);
  };
  /**
   * Set time left on Timer.
   * @param {Number} seconds The number of seconds until time timer finishes
   */
  Timer.prototype.setTime = function (seconds) {
    this.secondsLeft = seconds;
  };
  Timer.prototype.getTimeleft = function () {
    return this.secondsLeft;
  };
  /**
   * Stop the timer from running
   */
  Timer.prototype.stopTimer = function () {
    clearInterval(this.timer);
  };
  /**
   * Reset Timer back to what it started with
   */
  Timer.prototype.resetTime = function () {
    this.secondsLeft = this.timeRequested;
  };
  return Timer;
})(EventEmitter);
module.exports = Timer;
//# sourceMappingURL=index.js.map
