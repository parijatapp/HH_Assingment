import React,{useState} from 'react';
import "../App.css";
import { useNavigate } from "react-router-dom";




const Login = ({ handleChange }) => {
  
  
    const navigate = useNavigate();
    const [ formData, setForm ] = useState({
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
  
    const handleSubmit =async (e) => {
      if (formData.email === "" || formData.password === "") {
        return;
      }
      e.preventDefault();
      // console.log(formData);
      
        let loginData = JSON.stringify(formData);
        console.log(loginData);
      const result = await fetch('http://localhost:1234/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: loginData
      })
      const data = await result.json()
      console.log(data)
  
  
      if(data.status === "ok"){
        return navigate("/home")
  
      }
      // if (result.status === "ok") {
      //   alert("success");
      //   // window.location.href = "signin.html";
      // } else {
      //   //    alert(result.error())
      //   alert(result.error);
      // }
    }
     
  
  return (
    <div className='main'>
    <form className='Login-main'>
    <center><h3>Sign In</h3></center>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={userLogin.username}
        onChange={ handleInput }
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={userLogin.password}
        onChange={ handleInput }
      />
    </div>

    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
    <div > Do you have an account ?
          <Link href="#" onClick={ () => handleChange("event", 1) } >
            Sign Up
          </Link>
        </div>
  </form>
  </div>
  )
}

export default Login