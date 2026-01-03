import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const Login = () => {

  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username) return;

    dispatch(login({username}));
    navigate("/userprofile");
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="p-4 flex flex-col gap-2">
        <input
          type='text'
          placeholder='Enter your username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border p-2'
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  )
}

export default Login
