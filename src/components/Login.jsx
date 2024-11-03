// import React,{useState} from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../components/Contact.css";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {

        // const [name,Setname] = useState("");
        const [email,Setemail] = useState("");
        // const [phone,Setphone] = useState(0);
        const [password,Setpassword] = useState("");

        // const [file,Setfile] = useState(null);

        const navigate = useNavigate();


                const submit = async ()=>
                {
                    // e.preventDefault();
                    // alert(password);
                    
                     await axios.post("http://localhost:3002/login",{email,password})
                    .then((res)=>{
                        if(res.data.status==="success"){
                            localStorage.setItem("UserToken",res.data.token);
                            localStorage.setItem("userId",res.data.id);
                            localStorage.setItem("email",res.data.email);
                            navigate("/home");
                        }
                        else{
                            alert("invalid credinals");
                            navigate("/login");
                        }
                    })
                    
                }
    return (
        <div className='div1'>
            <form className='RegForm' style={{ margin: 'ons20px 20px 20px 20px', lineHeight: '60px' }} onSubmit={()=>{
                submit()
            }} >
                <div className='div2'>
                <p>
                    <input type='email' placeholder='Email' required style={{ padding: '10px 10px 10px 10px' }} onChange={(e)=>{Setemail(e.target.value)}}></input>
                </p>
                <p>
                    <input type='password' placeholder='Password' required style={{ padding: '10px 10px 10px 10px' }} onChange={(e)=>{Setpassword(e.target.value)}}></input>
                </p>
                {/* <p className='file'>
                 <input type="file"  accept="image/*" required onChange={(e)=>{Setfile(e.target.files[0])}} />
                </p> */}
                
                <p>
                    <button type='submit' style={{ padding: '10px 10px 10px 10px' }} onClick={submit()}>Login</button>
                </p>
                <p>
                <Link className='link' to="/signup"> Don't Have An Account? SignUp</Link>
                </p>
                </div>
            </form>
        </div>
    )
}
