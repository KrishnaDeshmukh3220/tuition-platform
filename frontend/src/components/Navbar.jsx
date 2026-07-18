import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">TuitionConnect</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tutors">Find Tutors</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light ms-2" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light ms-2" to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar