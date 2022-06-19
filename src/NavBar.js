import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li > <Link to="/users" >Users</Link></li>
                <li> <Link to="/add-user" >Add User</Link></li>
            </ul>
        </div>
    )

}


export default NavBar;