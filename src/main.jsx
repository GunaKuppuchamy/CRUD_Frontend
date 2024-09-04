import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import { Home } from '@mui/icons-material';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
)
