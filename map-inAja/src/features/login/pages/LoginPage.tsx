import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="relative flex items-center justify-center w-full max-w-4xl">
                <div className="absolute left-0 w-2/3 h-full bg-cover bg-center rounded-lg" 
                     style={{ backgroundImage: 'url(assets/bg-login.jpg)' }}>
                </div>
                <div className="relative z-10 w-1/3 bg-white p-10 rounded-lg shadow-lg">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
