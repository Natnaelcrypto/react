import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { useRef } from 'react';

const Login = ({logUsername,logpassword,setLogpassword,setLogusername,Handllogin,validuser})=>{
    const inputRef= useRef()
    return(
        <div className="box">
            <h2>Login</h2>
            
            <form  onSubmit={Handllogin} >
                <div className="boxofusername">
                    <label htmlFor="username" className="username">
                        Username
                    </label>
                    <input type="text" ref={inputRef} id="username" value={logUsername} onChange={(e)=>setLogusername(e.target.value)} />
                </div>
                
                <div className="boxofpassword">
                    <label htmlFor="password" className="password">
                    Password
                    </label>
                    <input type="password" ref={inputRef} id="password" value={logpassword} onChange={(e)=>setLogpassword(e.target.value)} />
                </div>
                <button type="submit" aria-label="Add item" onClick={()=>{
            inputRef.current.focus()
          }} >Login
                </button>

            </form>
            
            <Link className='Signup-Link' to="/signup">Signup</Link>
            
        </div>
    )
}

export default Login