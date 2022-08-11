import './login.css'

export default function Login() {
  return (
    <div className='login' >
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Happy Social</h3>
                <span className="loginDesc">
                    Connect with your friends on Happy Social    
                </span>    
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className="loginInput" placeholder='Username'/>
                    <input type="password" className="loginInput" placeholder='Password'/>
                    <button className="loginButton">Login</button>
                    <span className="forgot">Forgot Password</span>
                    <button className="Register">Create A New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
