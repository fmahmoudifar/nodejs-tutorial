const os = require('os')

// info about user
const user = os.userInfo()
console.log(user);

// uptime system

console.log(`The system uptime is ${os.uptime()} second`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);