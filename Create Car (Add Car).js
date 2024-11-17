const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/cars', upload.array('images', 10), async (req, res) => {
    const { title, description, tags } = req.body;
    const images = req.files.map(file => file.path);
    try {
        const car = new Car({ title, description, tags, images, userId: req.userId });
        await car.save();
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ error: 'Error creating car' });
    }
});
