import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [cars, setCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cars', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars', error);
            }
        };
        fetchCars();
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="Search cars"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul>
                {cars
                    .filter((car) => car.title.includes(searchQuery) || car.description.includes(searchQuery) || car.tags.includes(searchQuery))
                    .map((car) => (
                        <li key={car._id}>{car.title}</li>
                    ))}
            </ul>
        </div>
    );
};

export default ProductList;
