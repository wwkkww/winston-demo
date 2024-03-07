const winston = require("winston");
require("./loggers");

const paymentLogger = winston.loggers.get("PaymentLogger");
const orderLogger = winston.loggers.get("OrderLogger");

paymentLogger.info("payment received");
orderLogger.error("Order failed");

let requestHandler = (path) => {
  const profiler = paymentLogger.startTimer();

  // processing request
  const TOTAL = 100000000;
  let j = 0;
  for (let index = 0; index < TOTAL; index++) {
    j = index * 2;
  }

  profiler.done({ message: `Request to ${path} processed` });
};

requestHandler('/payment')