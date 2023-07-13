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

console.log(getMacAddress());