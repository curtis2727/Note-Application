const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, phone, email, password } = req.body;
    try {
        const user = new User({ name, phone, email, password });
        await user.save();
        res.status(201).send("User registered");
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.login = (req, res) => {
    res.send("Logged in");
};

exports.logout = (req, res) => {
    req.logout();
    res.send("Logged out");
};
