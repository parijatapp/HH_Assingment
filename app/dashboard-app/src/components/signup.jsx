import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

import '../App.css';



const Signup = ({ handleChange }) => {
 

  const navigate = useNavigate();



  const [ formData, setForm ] = useState({
    firstName : '',
    lastName:"sai",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;

    setForm({
      ...formData,
      [ id ]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName === "" || formData.email === "" || formData.password === ""){
      return
    }
    // console.log(formData);
  // let  registerData = JSON.stringify(formData);
    // const result = await fetch('http://localhost:2345/register',{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData)
    // })
    // const data =await result.json()
    const {data} = await axios.post("http://localhost:1234/register", formData)
    console.log(data)
    
    if (data.status === "ok") {
      alert("success");
      // window.location.href = "signin.html";
    } 
    else {
        //  alert(data.error)
      alert("email should be unique");
    }
    
    // navigate('/account#')
   
    // console.log("event", res);
    // <Link href="#" onClick={ () => handleChange("event", 1) } >
    //   Sign Up
    // </Link>
  }
    



  return ( 
    <div>
    <form className='signup-main' >
   <center><h3>Sign Up</h3></center>

    <div className="mb-3">
      <label>First name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
        value={userRegister.fname}
        onChange={handleInput}
      />
    </div>

    <div className="mb-3">
      <label>Last name</label>
      <input type="text"
        className="form-control"
        placeholder="Last name"
        value={userRegister.lname}
        onChange={handleInput} />
    </div>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={userRegister.email}
        onChange={handleInput}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={userRegister.password}
        onChange={handleInput}

      />
    </div>

    <div className="d-grid">
      <input name='Sign Up' type="submit" className="btn btn-primary" value = "register" onClick={ handleSubmit }/>
       
      
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/sign-in">sign in?</a>
    </p>
  </form>
  </div>

  )
}

export default Signup