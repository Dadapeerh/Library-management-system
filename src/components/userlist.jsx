import { useState,useEffect } from "react";
import '../styles/userlist.css'

const UserList = () => {
    let [users,setUsers] = useState([])

    useEffect( () => {
        let fetchData = async () =>{
            let response = await fetch("http://localhost:4000/users")
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    },[users] )
    let handleDelete = (id,name) =>{
        fetch(`http://localhost:4000/users/${id}`,{
            method:"DELETE"
        })
        alert(`${name} has been removed permanently`)
    }
    return ( 
        <div className="userlist">
            <h1>User List : {users.length}</h1>
            <hr />
            <div className="user_section">
            {
                users.map( (data) => (
                    <div className="user_card">
                        <h2><u>{data.name}</u></h2>
                        <h4>Age : {data.age}</h4>
                        <h5>Email : {data.email}</h5>
                        <h5>Phone Number : {data.phoneNumber}</h5>
                        <button className="userbtn" onClick={ () => handleDelete(data.id,data.name) }>Delete User</button>
                    </div>
                ) )
            }
            </div>
        </div>
     );
}
 
export default UserList;