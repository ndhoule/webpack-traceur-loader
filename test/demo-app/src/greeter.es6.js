module.exports = class Greeter {
  constructor(message) {
    this.message = message;
  }

  greet() {
    console ? console.log(this.message) : alert(this.message);
  }
};
