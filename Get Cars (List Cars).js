app.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.find({ userId: req.userId });
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching cars' });
    }
});
