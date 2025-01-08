import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="mb-2 font-medium">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    className="p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                />
                <button 
                    type="submit" 
                    className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Login
                </button>
                <button 
                    type="submit" 
                    className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Kembali
                </button>
            </form>
        </div>
    </div>
    
    );
};

export default LoginForm;