const jwt = require('jsonwebtoken');

exports.getTestToken = (req, res) => {
    // Generate a token valid for 1 hour
    const token = jwt.sign({ id: 'admin123', role: 'admin' }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    res.status(200).json({ success: true, token });
};
