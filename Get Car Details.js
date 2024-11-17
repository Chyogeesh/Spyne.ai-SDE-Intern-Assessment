app.get('/api/cars/:id', async (req, res) => {
    try {
        const car = await Car.findOne({ _id: req.params.id, userId: req.userId });
        res.status(200).json(car);
    } catch (error) {
        res.status(400).json({ error: 'Car not found' });
    }
});
