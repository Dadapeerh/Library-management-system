import { useNavigate } from "react-router-dom"
import '../styles/userlogin.css'

const UserLogin = () =>{
    let navigate = useNavigate()  

    let handleSubmit = (e) =>{
        navigate("/user/")
    }
    return (
        <div className="userlogin">
            <div className="form">
                <h1>Login as User</h1>
                <img src="https://cdn.vectorstock.com/i/preview-1x/71/34/user-icon-line-outline-person-symbol-vector-22867134.webp" alt="" />
                <div className="form_input">
                    <form action="" onSubmit={handleSubmit}>
                        {/* <label htmlFor="">Email</label> */}
                        <div className="email">
                            
                            <input type="email" required placeholder="Enter email"  />
                        </div>
                        {/* <label htmlFor="">Password</label> */}
                        <div className="password">
                           
                            <input type="password" required placeholder="Enter password"  />
                        </div>
                        <button className="login_btn1">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserLogin;