function convertUUID(type, uuid) {
    const uuidBytes = Buffer.from(uuid.replace(/-/g, ''), 'hex');

    if (type === 'encode') {
        const uuidBase64 = uuidBytes.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        return uuidBase64;
    }

    if (type === 'decode') {
        const uuidHex = uuidBytes.toString('hex');
        const formattedUUID = `${uuidHex.substr(0, 8)}-${uuidHex.substr(8, 4)}-${uuidHex.substr(12, 4)}-${uuidHex.substr(16, 4)}-${uuidHex.substr(20)}`;
        return formattedUUID;
    }
}

module.exports = { convertUUID };