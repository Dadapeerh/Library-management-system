import { Link } from "react-router-dom";
import '../styles/adminnavbar.css'

const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="leftlink">
                <h1>Admin Portal</h1>
            </div>
            <div className="rightlink">
                <ul>
                    <li><Link to={"/admin/"}>Dashboard</Link></li>
                    <li><Link to={"/admin/add-book"}>Add Books</Link></li>
                    <li><Link to={"/admin/add-user"}>Add Users</Link></li>
                    <li><Link to={"/admin/book-list"}>Book List</Link></li>
                    <li><Link to={"/admin/user-list"}>User List</Link></li>
                    <li><Link to={"/"}>LogOut</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdminNavbar;