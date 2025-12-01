function createLogEntry(message){
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const eventID = Math.random().toString(16).substring(2,10).toUpperCase();

    const logmessage = message.toUpperCase();

    return `[${timestamp}] [${eventID}] - ${logmessage}`;
}

const log = createLogEntry("User Login successful");
console.log(log);