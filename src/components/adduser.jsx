import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adduser.css'

const AddUser = () => {
    let [name, setName] = useState()
    let [age, setAge] = useState()
    let [email, setEmail] = useState()
    let [phoneNumber, setPhoneNumber] = useState()
    let navigate = useNavigate()


    let handleSubmit = (e) => {
        e.preventDefault()
        let userdata = { name, age, email, phoneNumber }
        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdata)
        })
        alert('user added to user list')
        navigate("/admin/user-list")
    }
    return (
        <div className="adduser">
            <h1>Add A New User</h1>
            <div className="adduser_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="enter the name of user" />
                    </div>
                    <div className="age">
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} min={"1"} required placeholder="enter the age of user" />
                    </div>
                    <div className="email">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="enter the email of user" />
                    </div>
                    <div className="phoneNumber">
                        <input type="tel" minLength={"10"} maxLength={"10"} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder="enter the phone Number of user" />
                    </div>
                    <button className="adduser_btn">Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;