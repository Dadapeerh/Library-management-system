import { Routes,Route } from "react-router-dom";
import AdminNavbar from "./adminnavbar";
import AdminDashboard from "./admindashboard";
import BookList from "./bookList";
import UserList from "./userlist";
import ReadBook from "./readBook";
import AddBook from "./addbook";
import AddUser from "./adduser";

const AdminHome = () =>{
    return(
        <div className="adminhome">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
        </div>
    )
}

export default AdminHome;