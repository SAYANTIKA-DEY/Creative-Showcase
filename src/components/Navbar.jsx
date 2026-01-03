import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { clearImages } from '../features/images/imageSlice';

const Navbar = () => {

  const {isAuthenticated} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  return (
    <nav className="flex justify-between p-4 bg-gray-100">
      <NavLink to="/">Landing</NavLink>
      <div className="flex gap-4">
        {isAuthenticated ? (
          <>
            <NavLink to="/UserProfile">UserProfile</NavLink>
            <button onClick={() => dispatch(logout(), clearImages())}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
