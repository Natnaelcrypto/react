import { useRef } from "react"

const SignUp =
({password,setPassword,username,setUsername,HandelSubmit})=>{
    const inputRef= useRef()
    return(
        <div className="box">
            <h2>Signup</h2>
            <form onSubmit={HandelSubmit}>
                <div className="boxofusername">
                    <label htmlFor="username" className="username">
                    Username
                </label>
                <input type="text" ref={inputRef} id="username"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="boxofpassword">
                    <label htmlFor="password" className="password">
                    Password
                </label>
                <input type="text" ref={inputRef}  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                
                <button type="submite"  aria-label="Add item" onClick={()=>{
            inputRef.current.focus()
          }}>Creat Account</button>
            </form>
            
        </div>
    )
}

export default SignUp