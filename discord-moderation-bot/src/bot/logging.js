const fs = require("fs");

function logMessage(message) {
    const log = `[${new Date().toLocaleString()}] - ${message}\n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file");
        }
    });
}

module.exports = {
    logMessage
};