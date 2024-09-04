// import React from 'react'
import { Link } from "react-router-dom"
import Image from "../assets/bg55.jpg"
export default function Navbar() {
    return (<>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "lightcoral",
            padding: "10px",
        }}>
            <img src={Image} style={{ height: 30, width: 30 }} />
            <nav style={{ display: "flex" }}>
                <ul style={{ display: "flex" }}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* <li></li><a href="#portfolio" className="unique">MyCompany</a> */}
                </ul>
            </nav>
        </div>
    </>
    )
}

