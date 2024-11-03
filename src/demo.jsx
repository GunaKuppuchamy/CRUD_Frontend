import axios from "axios";
import { useEffect, useState } from "react";
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
import { API_URL } from "../../server/server";
// import React from 'react'


const Demo = () => {
    const [api,Setapi]=useState([]);
    const [name, Setname] = useState("");
    const [email, Setemail] = useState("");
    const [phone, Setphone] = useState(0);
    const [password, Setpassword] = useState("");
    //  const navigate=useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        await axios.post(API_URL, { name, email, phone, password })

    }
    axios.get(API_URL,(req,res)=>{
          Setapi(res.data);
    })
    console.log(api);
    useEffect(
        () => {
            submit();
        }, []
    )


    return (
        <div className='div1'>
            <form className='RegForm' style={{ margin: 'ons20px 20px 20px 20px', lineHeight: '60px' }} onSubmit={(e) => {
                submit(e)
            }} >
                <div className='div2'>
                    <p>
                        <input type='text' placeholder='Username' style={{ padding: '10px 10px 10px 10px' }} onChange={(e) => { Setname(e.target.value) }}></input>
                    </p>
                    <p>
                        <input type='email' placeholder='Email' style={{ padding: '10px 10px 10px 10px' }} onChange={(e) => { Setemail(e.target.value) }}></input>
                    </p>
                    <p>
                        <input type='number' placeholder='PhoneNumber' style={{ padding: '10px 10px 10px 10px' }} onChange={(e) => { Setphone(e.target.value) }}></input>
                    </p>
                    <p>
                        <input type='password' placeholder='Password' style={{ padding: '10px 10px 10px 10px' }} onChange={(e) => { Setpassword(e.target.value) }}></input>
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

export default Demo
