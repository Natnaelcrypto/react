

import Footer from './footer';
import { useEffect, useState } from "react";
import Header from './header';
import Login from './login';
import SignUp from './signup';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from "./home"
import Addnote from './AddNote';
import api from "./posts"

function App() {

const [account,setAccount]=useState([])
const [logpassword, setLogpassword] =useState([])
const [logUsername, setLogusername] =useState([])
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [title , setTitle]=useState('')
const [body,setBody]=useState("")
const [note,setNote]=useState([])
const navigate=useNavigate()

useEffect(()=>{
  const fetchItem = async()=>{
    try{
      const response = await api.get("/acounte");
      
      setAccount(response.data)
    }
    catch{
      console.log(Error)
    }
  }
  setTimeout(() => {
        (async () => await fetchItem())()
      }, 200);
},[])

useEffect(()=>{
  const fatcItem= async()=>{
    try{
      const response= await api.get("/notes")
      setNote(response.data)
    }
    catch{
      console.log(Error)
    }
  }
  fatcItem()
},[])

///  Add user
const HandelSubmit=async(e)=>{
   e.preventDefault()
   const id = account.length ? account[account.length -1].id +1 : id=1
  const newAcc={
    id:id,
    UserName:username,
    Password:password,
    Auth:""
  }
  
  const response= await api.post("/acounte",newAcc)

  const accs=[...account,response.data]
  setAccount(accs)
  setPassword("")
  setUsername("")
  navigate("/home")
}
const name=logUsername

const HandelValiduser =()=>{
  const validuser=account.filter((account) => account.UserName == logUsername && account.Password == logpassword)
  return(validuser)
}
const validuser = HandelValiduser()
const Handllogin = (e)=>{
  e.preventDefault()
  
  if (validuser.length!=0) {
    if (validuser[0].Auth=="manger"){
        navigate("/addnote")
    }
    else{
      navigate("/home")
    }
    
  }
  setLogpassword("")
  setLogusername("")
}

const Handeladdnote=async (e)=>{
  e.preventDefault()
  
  const id = note.length ? note[note.length-1].id +1 : id=1
  
  const newnote={
    id:id,
    Title:title,
    Body:body
  }
  console.log(newnote)
  const response= await api.post("/notes",newnote)
  const listnote=[...note,response.data]

  setNote(listnote)
  setBody("")
  setTitle("")
  navigate("/home")
}





  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route path='/login' element={<Login 
              logUsername={logUsername}
              logpassword={logpassword}
              setLogpassword={setLogpassword}
              setLogusername={setLogusername}
              Handllogin={Handllogin}
              validuser={validuser}
            ></Login>}></Route>
            <Route path='/signup' element={<SignUp password={password} setPassword={setPassword} username={username} setUsername={setUsername} HandelSubmit={HandelSubmit}></SignUp>}>

            </Route>

            <Route path='/home' element={<Home
              note={note}
            ></Home>}>
            </Route>

            <Route path='/addnote' element={
              <Addnote
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                Handeladdnote={Handeladdnote}
              ></Addnote>}>

            </Route>
      </Routes>

      <Footer/>
    </div>
      
          
        
   
        
        
    
  );
    
 }
 

export default App;
