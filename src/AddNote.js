import { useRef } from "react"

const Addnote = ({Handeladdnote,title,setTitle,body,setBody})=>{
    const inputRef= useRef()
    return(
        <div className="addnote">
            <div className="home">
            <h2>Add Note</h2>
            <form action="" onSubmit={Handeladdnote}>
                <div className="title">
                    <label htmlFor="notetitle" id="notetitlelable">
                        Title: 
                    </label>
                    <input type="text" ref={inputRef} id="notetitle" value={title} onChange={(e)=> setTitle(e.target.value)} />
                </div>
                    
                    <br />
                <div className="body">
                    <label htmlFor="notebody" id="notebodylable">
                        Note:
                    </label> 
                    
                    <textarea name="" id="notebody" ref={inputRef} cols="30" value={body} onChange={(e)=>setBody(e.target.value)} rows="10">

                    </textarea>
                </div>
                    
                    <br />

                    <button type="submit" aria-label="Add item" onClick={()=>{
            inputRef.current.focus()
          }} >Add</button>
            </form>
            </div>
        </div>
    )
}

export default Addnote