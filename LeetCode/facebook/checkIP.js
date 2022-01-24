const checkIPv4 = (str) => {
    const parts = str.split(".").map(i => {
        if (i.length !== String(Number(i)).length) return null;
        if (Number(i) > 255) return null
        return i;
    }).filter(i => {
        if (i === null) return false
        return true
    });
    // console.log(parts);
    if (parts.length > 4) return false;
    
};

const checkIPv6 = (str) => {
    return false;
};

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if (checkIPv4(IP)) {
        return "IPv4"
    }
    if (checkIPv6(IP)) {
        return "IPv6"
    }
    return "Neither";
};

validIPAddress("172.16.254.1");
validIPAddress("172.16.254.01");
validIPAddress("172.16.254.00");