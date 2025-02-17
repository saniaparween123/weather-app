import React from 'react';

function RegisterForm({ onSubmit, onBack }) {
    return (
        <div className="auth-form">
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" name="fullname" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Register</button>
            </form>
            <button className="back" onClick={onBack}>Back to Weather App</button>
        </div>
    );
}

export default RegisterForm;
