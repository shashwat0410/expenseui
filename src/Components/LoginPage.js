import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here
    // You can make an API call to authenticate the user

    // Example code for demonstration purposes only
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
  <div>
    <div className='login-container'>
        <h2  className='h2'>Login Page for Dashboard-</h2>
    </div>
    <div>
        <form onSubmit={handleLogin} className='form'>
    <div className='mb-3'>
        <label htmlFor='username' className='form-label'>Username</label>
        <input type='text' className='form-control' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className='mb-3'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type='password' className='form-control' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type='submit' className='btn btn-primary'>Login</button>
        </form>

    </div>
    </div>
  );
};

export default Login;
