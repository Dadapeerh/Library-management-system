import { Link } from "react-router-dom";
import '../styles/usernavbar.css'

const UserNavbar = () => {
    return (  
        <div className="usernavbar">
            <div className="user_leftlink">
                <h1>User Portal</h1>
            </div>
            <div className="user_rightlink">
                <ul>
                    <li><Link to={"/user/"}>Dashboard</Link></li>
                    <li><Link to={"/user/book-list"}>Book List</Link></li>
                    <li><Link to={"/"}>LogOut</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default UserNavbar;