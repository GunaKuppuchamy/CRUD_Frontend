// import React from 'react'
import { Link } from "react-router-dom"
import Image from "../assets/bg55.jpg"
// import { useNavigate } from "react-router-dom";



export default function Navbar() {
    // const navigate=useNavigate();

    const logout=()=>{
        
        localStorage.clear();
        // if(localStorage.getItem('email')===null){
        // navigate("/contact");
        // }
    }



    return (<>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "lightcoral",
            padding: "10px",
        }}>
            <div><img src={Image} style={{ height: 30, width: 30 }} /></div>
            <nav style={{ display: "flex" }}>
                <ul style={{ display: "flex" }}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                    <button onClick={logout}>logout</button>
                    {/* <li></li><a href="#portfolio" className="unique">MyCompany</a> */}
                </ul>
            </nav>
        </div>
    </>
    )
}

