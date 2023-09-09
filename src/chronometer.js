class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  // ... your code goes here
    this.intervalId = setInterval(() => { 
    this.currentTime ++;
    if (printTimeCallback){
    // if this exists then call 
  printTimeCallback ();
  // here you are calling it
  //console.log("this is the interval", intervalId);
    }
    }, 1000);
  }

  getMinutes() {
    return Math.floor (this.currentTime / 60);// ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const stringValue = value + '';
    if (stringValue.length === 1) {
      return '0'+ stringValue.slice (0);
    }
    //if (number === single digit)
    return stringValue;

    // return string with '0'
  }

  stop() {
    // ... your code goes here conditionals if using null
      clearInterval (this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
