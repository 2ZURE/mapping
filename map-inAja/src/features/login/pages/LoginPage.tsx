import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen py-10">
            <div className="relative flex items-center justify-center w-full max-w-4xl">
                <img
                    loading="lazy"
                    src="bg-login.jpg"
                    alt="login Image"
                    className="h-screen object-cover rounded-xl"
                    
                />
                <div className="relative z-10 w-2/5 bg-white p-14 rounded-xl shadow-xl">

                    <LoginForm />
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
