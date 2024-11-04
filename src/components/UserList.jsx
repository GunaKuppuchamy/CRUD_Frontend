import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import '../Style/UserList.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



const UserList = () => {
    // const [button, setButton] = useState("Add");
    const [expense, setExpense] = useState([]);
    const navigate = useNavigate();

    // alert(localStorage.getItem("email"));


    useEffect(() => {
        //TO verify wheather the user is valid one or not by the token stored in the local storage
        const verifyUser = async () => {
            const token = localStorage.getItem("UserToken");

            try {
                const result = await axios.get("https://backend-crud-8cuo.onrender.com/home", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (result.data.status !== "Success") {
                    navigate("/");
                }
            } catch (error) {
                navigate("/");
            }
        };

        verifyUser();
    });
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('email') === null) {
                // alert(localStorage.getItem('email'));
                navigate("/");
            }
            try {
                const response = await axios.get("https://backend-crud-8cuo.onrender.com/ad");
                setExpense(response.data);
                // console.log(expense);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
        // })
    }, [expense])

    // console.log(expense)
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState("");
    useEffect(() => console.log("changed"), [expense]);

    //To edit
    const handleChange = async (e) => {
        e.preventDefault();
        if (!isEdit) {
            if (amount != 0) {
                const response = await axios.post("https://backend-crud-8cuo.onrender.com/add", {
                    category: category,
                    amount: amount
                });

                setExpense([...expense, response.data]);
                toast.success("success");
                setCategory("");
                setAmount(0);
            }
        } else {
            const data = {
                category: category,
                amount: amount
            }
            // alert(id)
            axios.put(`https://backend-crud-8cuo.onrender.com/${id}`, data).then((res) => {
                // alert(res);
                setExpense([...res.data]);
            }).catch((err) => { console.log(err) });
            setIsEdit(false);
            setCategory("");
            setAmount(0);

        }


    }
    const handleEdit = (exp) => {
        setId(exp._id)
        setCategory(exp.category);
        setAmount(exp.amount);
        setIsEdit(true);
        handleChange();







        // // isEdit ? setButton("Update") : setButton("Add");

        // setButton("Update");
        // // console.log(title)
        // // console.log(title)
    }


    const handleDelete = (exp) => {
        // setId(exp._id);

        console.log(exp);
        axios.delete(`https://backend-crud-8cuo.onrender.com/${exp}`)
            // .then((res) => {
            //     alert(res.data)
            // })
            .catch((err) => { console.log(err) });
        // alert("delete called");
        // let deletedArray = expense.filter((data) => data.id != id);
        // setExpense(deletedArray);
    }
    return (
        <>
        <Navbar/>
        <div className='d1'>
            <div className='main-div'>
{/* <div> */}
                <form onSubmit={(e) => handleChange(e)}>
                    <div className='ud1'>
                        <p>categoey:<input type='text' value={category} required placeholder='categoey' onChange={(e) => setCategory(e.target.value)} /></p>
                        <p>amount  :<input type='number' value={amount} required placeholder='amount' onChange={(e) => setAmount(e.target.value)} /></p></div>
                    <button type='submit' >Add</button>
                </form>

                <h1>Expenses</h1>
                <table className='table' border={1}>
                    <thead >
                        <th>Date</th>
                        <th>category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </thead>
                    <tbody >
                        {expense.map((data) => (
                            <tr key={data._id}>
                                <td>{data.date}</td>
                                <td>{data.category}</td>
                                <td>{data.amount}</td>
                                <button onClick={() => handleDelete(data._id)}>Delete</button>
                                <button onClick={() => handleEdit(data)}>Edit</button>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tr key="total"><td></td><td></td><td>total</td><td>`{tt()}`</td></tr> */}


                </table>
            </div>
        </div>
        </>
    )
}

export default UserList;
