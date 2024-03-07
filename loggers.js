const winston = require("winston");
const { combine, timestamp, printf, json, prettyPrint, errors } = winston.format;

winston.loggers.add("OrderLogger", {
  level: "info",
  // format: winston.format.json(),
  // format: winston.format.cli(),
  format: combine(
    // errors({stack: true}),
    timestamp(),
    json(),
    prettyPrint()
    // printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(), 
    new winston.transports.File({ filename: "orders.log" })
  ],
  defaultMeta: { service: 'OrderService'}
});


winston.loggers.add("PaymentLogger", {
  format: json(),
  transports: [
    // new winston.transports.Console(), 
    new winston.transports.File({ filename: "payments.log" })
  ],
  defaultMeta: { service: 'PaymentService'}
});