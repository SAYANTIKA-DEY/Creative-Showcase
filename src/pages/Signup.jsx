import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../features/auth/authSlice';

const Signup = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username) return;

    dispatch(signup({username}));
    navigate("/userprofile");
  }
  
  return (
    <div>
      <form onSubmit={handleSignup} className="p-4 flex flex-col gap-2">
        <input
          type='text'
          placeholder='enter the number...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border p-2'
        />
        <button type="submit" className="bg-green-500 text-white p-2">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
