npx create-react-app car-management
cd car-management
npm install axios react-router-dom
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Sign Up successful!');
        } catch (error) {
            console.error('Sign Up failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
    );
};
export default SignUp;
