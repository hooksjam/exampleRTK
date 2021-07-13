/* eslint-disable @typescript-eslint/no-explicit-any */
// import winston from "winston"
// import BrowserConsole from 'winston-transport-browserconsole'
 
/*const level = "debug";
winston.configure({
    transports: [
        new BrowserConsole(
            {
                format: winston.format.simple(),
                level,
            },
        ),
        // Uncomment to compare with default Console transport
        // new winston.transports.Console({
        //     format: winston.format.simple(),
        //     level,
        // }),
    ],
})
*/

enum LogLevel {
    Info = 0,
    Debug = 1,
    Warn = 2,
    Error = 3
}

const currentLevel = LogLevel.Error

function debug(...x: any[]): void {
    if (currentLevel < LogLevel.Debug) {
        return
    }
    // winston.debug("DEBUG", x)
    if (x.length > 1) {
        console.debug('DEBUG', x) // eslint-disable-line no-console 
    } else if (x.length == 1) {
        console.debug('DEBUG', x[0]) // eslint-disable-line no-console
    }
}

function error(...x: any[]): void {
    if (currentLevel < LogLevel.Error) {
        return
    }
    // winston.error("ERROR", x)
    if (x.length > 1) {
        console.error('ERROR', x) // eslint-disable-line no-console
    } else if (x.length === 1) {
        console.error('ERROR', x[0]) // eslint-disable-line no-console
    }
}

function warn(...x: any[]): void {
    if (currentLevel < LogLevel.Warn) {
        return
    }
    // winston.WARN("WARN", x)
    if (x.length > 1) {
        console.warn('WARN', x) // eslint-disable-line no-console
    } else if (x.length === 1) {
        console.warn('WARN', x[0]) // eslint-disable-line no-console
    }
}

function info(...x: any[]): void {
    if (currentLevel < LogLevel.Info) {
        return
    }
    // winston.info("INFO", x)
    if (x.length > 1) {
        console.info('INFO', x) // eslint-disable-line no-console
    } else if (x.length === 1) {
        console.info('INFO', x[1]) // eslint-disable-line no-console
    }
}

export default logger = {
    debug,
    error,
    warn,
    info,
}
