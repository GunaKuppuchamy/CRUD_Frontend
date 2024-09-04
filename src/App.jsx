// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Header from './components/Header'
// import Navbar from './components/Navbar'
import UserList from './components/UserList'
// import Input from './components/Input'
// import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';



function App() {

  // const [expense, setExpense] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/ad");
  //       setExpense(response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData()
  // }, [])
  // console.log(expense)
  return (
    <>
      {/* <Navbar /> */}
      <div className='d1'>
        {/* <div className='din' style={{ borderRight: "2px solid black", width: "50%", backgroundColor: 'aqua' }}><Input /></div> */}
        <div className='din' style={{ borderLeft: "2px solid black", width: "50%" }}><UserList /></div>
        {/* <form onSubmit={(e) => handleChange(e)}>
          <div ><input type='text' required onChange={(e) => setTitle(e.target.value)} /></div>
          <div ><input type='text' required onChange={(e) => setDesc(e.target.value)} /></div>
          <div ><input type='number' required onChange={(e) => setRs(e.target.value)} /></div>
          <button type='submit' ></button>
        </form>
        <table className='table' border={1}>
          <thead >
            <th>Date</th>
            <th>category</th>
            <th>Amount</th>
            <th>Action</th>
          </thead>
          <tbody ></tbody>
          {expense.map((data) => (
            <tr key={data.id}>
              <td>{data.date}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
              <button onClick={() => handleEdit(data)}>Edit</button>
            </tr>
          ))}


        </table> */}
      </div>

    </>
  )
}

export default App
