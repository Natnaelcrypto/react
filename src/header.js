import { Link } from 'react-router-dom';

const Header =({Handelsearch})=>{
    return(
        <header>
            <h2>Note Writer</h2>
            <div className="nav">
                <div className="search">
                    <form action="
                    " onSubmit={Handelsearch}>
                        <input type="text" id='search' />
                    </form>
                </div>
                <div className="linkes">
                <Link to="/home" >Home</Link>
                <Link to="/addnote">Add Note</Link>
                <Link to="/login">Login</Link>
            </div>
            </div>
            
        </header>
    )
}

export default Header