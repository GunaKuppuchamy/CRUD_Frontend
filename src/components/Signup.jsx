import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
// import React from 'react'

const Signup = () => {

 const [name,Setname] = useState("");
 const [email,Setemail] = useState("");
 const [phone,Setphone] = useState(0);
 const [password,Setpassword] = useState("");
 const navigate=useNavigate();

 const submit=async (e)=>{
e.preventDefault();
await axios.post("http://localhost:3002/user",{name,email,phone,password})
.then((res)=>{
    if(res.data==="Account created"){
        toast.success("Account created");
        navigate("/");
    }else if(res.data==="Email already exists"){
        alert("Email already exists");
        navigate("/signup");
    }else{
        alert(res.data);
    }
})
 }


  return (
    <div className='div1'>
            <form className='RegForm' style={{ margin: 'ons20px 20px 20px 20px', lineHeight: '60px' }} onSubmit={(e)=>{
                submit(e)
            }} >
                <div className='div2'>
                <p>
                    <input type='text' placeholder='Username' style={{ padding: '10px 10px 10px 10px' }} onChange={(e)=>{Setname(e.target.value)}}></input>
                </p>
                <p>
                    <input type='email' placeholder='Email' style={{ padding: '10px 10px 10px 10px' }} onChange={(e)=>{Setemail(e.target.value)}}></input>
                </p>
                <p>
                    <input type='number' placeholder='PhoneNumber' style={{ padding: '10px 10px 10px 10px' }} onChange={(e)=>{Setphone(e.target.value)}}></input>
                </p>
                <p>
                    <input type='password' placeholder='Password' style={{ padding: '10px 10px 10px 10px' }} onChange={(e)=>{Setpassword(e.target.value)}}></input>
                </p>
                {/* <p className='file'>
                 <input type="file"  accept="image/*" required onChange={(e)=>{Setfile(e.target.files[0])}} />
                </p> */}
                
                <p>
                    <button type='submit' style={{ padding: '10px 10px 10px 10px' }} onClick={submit()}>Signup</button>
                </p>
                </div>
            </form>
        </div>
  )
}

export default Signup
