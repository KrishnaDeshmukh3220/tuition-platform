import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center fw-bold mb-4">Create Account</h2>

              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter your phone number" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" className="form-control" placeholder="Create a password" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">I want to join as</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" value="student" defaultChecked />
                    <label className="form-check-label">Student</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" value="tutor" />
                    <label className="form-check-label">Tutor</label>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary w-100 py-2">Create Account</button>

              <p className="text-center mt-3 text-muted">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
