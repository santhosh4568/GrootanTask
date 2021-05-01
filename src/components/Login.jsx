import React, { useState,useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';
import '../App.css'
import {Link} from 'react-router-dom'
function Login() {
    
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
    let pass = localStorage.getItem('registerPassword').replace(/"/g, "");
    let mail = localStorage.getItem('registerEmail').replace(/"/g, "");

    function handleLogin(e) {
        e.preventDefault();
        


        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }

    }


    return (
        <div className="inner">
            <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>
                {
                    mail === emaillog && pass === passwordlog ?
                      <Link to="/students"> <button type="submit" className="btn btn-dark btn-lg btn-block"> Login </button> </Link> : 
                      <Link to="/login"> <button type="submit" className="btn btn-dark btn-lg btn-block"> Login </button> </Link>
                      
                      
                }
                

                {flag && <Alert color='primary' variant="warning" >
                    Enter Valid Email/PassWord !!!
                        </Alert>}
            </form>
                
            

        </div>
    )
}

export default Login