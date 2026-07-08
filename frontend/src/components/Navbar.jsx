import { Link } from "react-router-dom"

function Navbar(){
    return(<nav>
        <h2>TuitionConnect</h2>
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/tutors">Find Tutors</Link></li>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/register">Sign Up</Link></li>

        </ul>
    </nav>)
}
export default Navbar