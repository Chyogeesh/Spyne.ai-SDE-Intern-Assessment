const User = require('./models/User');
const jwt = require('jsonwebtoken');

app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'secretkey');
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
});
