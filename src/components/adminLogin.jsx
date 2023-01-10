import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/adminlogin.css'

const AdminLogin = () => {
    let[email,setEmail] = useState("")
    let[password,setPassword] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data={email,password}  //data from input

        //admin validation
        if (email == "admin@gmail.com" && password == 1234) {
            navigate("/admin/")  //navigate to admins home page
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <div className="adminlogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <img src="https://cdn.vectorstock.com/i/preview-1x/71/34/user-icon-line-outline-person-symbol-vector-22867134.webp" alt="" />
                <div className="form_input">
                    <form action="" onSubmit={handleSubmit}>
                    
                        <div className="email">
                            {/* <label htmlFor="">Email:</label> <br /> */}
                            <input type="email" required placeholder="Enter email" value={email} onChange={(email)=>setEmail(email.target.value)} />
                        </div>
                        {/* <label htmlFor="">Password:</label> */}
                        <div className="password">
                           
                            <input type="password" required placeholder="Enter password" value={password} onChange={(password)=>setPassword(password.target.value)} />
                        </div>
                        <button className="login_btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;