const os = require('os');

function getMacAddress() {
    try {
        const networInterfaces = os.networkInterfaces();

        for (const key in networInterfaces) {
            const macAddresses = networInterfaces[key].map((networkInterface) => {
                return networkInterface.mac;
            });

            const filteredMacAddresses = macAddresses.filter((macAddress) => macAddress !== '00:00:00:00:00:00');

            if (filteredMacAddresses.length) {
                return filteredMacAddresses[0];
            }
        }
        
    } catch (error) {
        console.log(error);
    }
}
function getUserName() {
    try {
        const userInfo = os.userInfo();
        const userName = userInfo.username;
        return userName
    } catch (error) {
        console.log(error);
    }
}

function getTimestamp() {
    try {
        return Date.now();
    } catch (error) {
        console.log(error);
    }
}
console.log(getMacAddress());
console.log(getUserName());
console.log(getTimestamp());