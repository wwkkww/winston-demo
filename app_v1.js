const winston = require("winston");
const { combine, timestamp, printf, json, prettyPrint, errors, cli } = winston.format;


// winston.config.syslog.levels
// {
//   emerg: 0,
//   alert: 1,
//   crit: 2,
//   error: 3,
//   warning: 4,
//   notice: 5,
//   info: 6,
//   debug: 7
// }

// default npm logging levels will be used
// {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }


console.log("levels: ", winston.config.syslog.levels)

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const logger = winston.createLogger({
  // levels: winston.config.syslog.levels,
  // levels: logLevels,
  level: process.env.LOG_LEVEL || 'silly',
  // format: winston.format.json(),
  format: winston.format.cli(),
  // format: combine(
  //   // errors({stack: true}),
  //   timestamp(),
  //   json(),
  //   prettyPrint()
  //   // printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  // ),
  transports: [
    new winston.transports.Console(), 
    new winston.transports.File({ filename: "app.log", level: "error" })
  ],
});


// logger.fatal('fatal!');
// logger.trace('trace!');
logger.error('error!');
logger.warn('warn!');
logger.info('info!');
logger.http('http!');
logger.verbose('verbose!');
logger.debug('debug!');
logger.silly('silly!');

