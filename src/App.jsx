import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import UserList from './components/UserList'
// import { v4 as uuidv4 } from 'uuid';



function App() {

  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<UserList />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      </div>

    </>
  )
}

export default App
