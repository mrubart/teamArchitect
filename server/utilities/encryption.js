var crypto = require("crypto");

exports.createSalt = function() {
    return crypto.randomBytes(128).toString('Base64');
}

exports.hashPwd = function(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}