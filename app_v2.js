const winston = require("winston");
const { combine, timestamp, printf, json, prettyPrint, errors } = winston.format;

const logger = winston.createLogger({
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
    new winston.transports.File({ filename: "app.log", level: "error" })
  ],
});

const requestLog = { method: "GET", isAuthenticated: false };
const childLogger = logger.child(requestLog)

// logger.info("An info log", requestLog);
// logger.error("An error log", requestLog);
childLogger.info("An info log");
childLogger.error("An error log", new Error('401 unauthorized'));
