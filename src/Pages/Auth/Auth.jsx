import React from 'react';
import './Auth.css';

const Auth = () => {
  return (
    <div className="Auth">
        <SignUp/>
        {/* <Login/> */}
    </div>
  )
}

const Login=()=>{
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Log In</h3>
                <div>
                    <input type="text" placeholder="Username" className="infoInput" name="username"/>
                    <input type="password" placeholder="Password" className="infoInput" name="password"/>
                </div>
                <div>
                    <a href="" style={{fontSize:"12px"}}>Don't have an account? Sign Up</a>
                </div>
                <button type="submit" className="button infoBtn">Log In</button>
            </form>
        </div>
    )
}


const SignUp=()=>{
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder="Name" className="infoInput" name="name"/>
                    <input type="text" placeholder="Username" className="infoInput" name="username"/>
                    <input type="password" placeholder="Password" className="infoInput" name="password"/>
                    <input type="password" placeholder="Confirm Password" className="infoInput" name="confirmpass"/>
                </div>
                <div>
                    <a href="" style={{fontSize:"12px"}}>Already have an Account? Login!</a>
                </div>
                <button type="submit" className="button infoBtn">Sign Up</button>
            </form>
        </div>
    )
}

export default Auth