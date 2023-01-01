


const Home = ({note})=>{
    
    return(
        <div className="home">
            <ul>
                {note.map(note=>(
                <div className="note">
                    <h2>{note.Title}</h2>
                    <p>{note.Body}</p>
                </div>)
                    
                )}
                
            </ul>
        </div>
    )
}

export default Home