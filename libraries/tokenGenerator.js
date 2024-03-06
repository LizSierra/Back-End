const Jwt = require('jsonwebtoken');
const tokenGenerator = async (data) => {
    return Jwt.sign({
        function(error, token) {
            if (error) {
                return error;
            }
        },
        data
    }, 'secret', { expiresIn: '1h' });
}

module.exports = tokenGenerator;