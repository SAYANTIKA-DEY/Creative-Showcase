
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import PublicProfile from './pages/PublicProfile';


const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Landing/>
    </div>
  },
  {
    path:"/login",
    element:
    <div>
      <Navbar/>
      <Login/>
    </div>
  },
  {
    path:"/signup",
    element:
    <div>
      <Navbar/>
      <Signup/>
    </div>
  },
  {
    path:"/userprofile",
    element:
    <div>
      <Navbar/>
      <UserProfile/>
    </div>
  },
  {
    path:"/publicprofile/:username",
    element:
    <div>
      <Navbar/>
      <PublicProfile/>
    </div>
  },
])

function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
