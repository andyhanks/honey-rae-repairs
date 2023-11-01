import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
//on line 13 the logout link is built. Line 15 has a custom onClick. Removing the item from local storage the item called honey_user then redirecting the user back to the baseroute of the application.
export const CustomerNav = () => {
    const navigate = useNavigate()
//line12 created Customers navigation
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Tickets</Link>
            </li>

            {
                localStorage.getItem("honey_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}












