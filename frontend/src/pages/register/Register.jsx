import './register.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
export default function Register() {
    const [error, setError] = useState(false);
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
      
        try {
          const res = await axios.post("/auth/register", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
    };

    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <div className="borderBox">
            <form className="registerForm" onSubmit={handleSubmit}>
               <label >Username</label>
               <input type="text" className="registerInput" placeholder="Enter your username..." 
                onChange={(e) => setUsername(e.target.value)}
               />
               <label >Email</label>
               <input type="text" className="registerInput" placeholder="Enter your Email..."
               onChange={(e) => setEmail(e.target.value)}
              />
               <label >Password</label>
               <input type="password"  placeholder="password" className="registerInput"
                onChange={(e) => setPassword(e.target.value)}
               />
               <button className=" link registerButton" type="submit">
                  
           Register
               </button>
                       

            </form>
            </div>
            <button className="loginRegisterButton">
            <Link to="/login" className="link">Login</Link>
            </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}

            
        </div>
    )
}
