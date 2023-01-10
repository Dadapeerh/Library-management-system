import { Link } from "react-router-dom";
import '../styles/landingpage.css'

const LandingPage = () =>{
    return (
        <div className="landingpage">
            <div className="selectLogin">
                <h1>Library Management System</h1>
                <div className="logo_image">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F200-2008697_account-customer-login-man-user-icon-login-icon.png&f=1&nofb=1&ipt=1a6590e5db371879056e1796f6e439f4bfad735214a15ce8b21ba7e9c5bd18d6&ipo=images" alt="" />
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F200-2008697_account-customer-login-man-user-icon-login-icon.png&f=1&nofb=1&ipt=1a6590e5db371879056e1796f6e439f4bfad735214a15ce8b21ba7e9c5bd18d6&ipo=images" alt="" />
                </div>
                <div className="choice">
                    <button className="b1"> <Link className="admin" to={"/admin-login"}>Admin Login</Link></button>
                    <button className="b2"><Link className="user" to={"/user-login"}>User Login</Link></button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;