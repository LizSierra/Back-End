const Jwt = require('jsonwebtoken');
const tokenGenerator = async (data) => {
    return Jwt.sign({
        function(error, token) {
            if (error) {
                return error;
            }
        },
        data
    }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES });
}

module.exports = tokenGenerator;