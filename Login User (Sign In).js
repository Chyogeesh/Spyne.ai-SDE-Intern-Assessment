app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'secretkey');
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: 'Error logging in' });
    }
});
