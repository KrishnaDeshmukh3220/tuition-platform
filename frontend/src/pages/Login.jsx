import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow p-4">
              <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
              
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>

              <button className="btn btn-primary w-100 py-2 mt-2">Login</button>

              <p className="text-center mt-3 text-muted">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login