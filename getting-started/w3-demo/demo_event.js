let events = require("events");
let eventEmitter = new events.EventEmitter();

let eventHandler = () => {
  console.log("I hear a Scream");
};

eventEmitter.on("Scream", eventHandler);

eventEmitter.emit("Scream");
