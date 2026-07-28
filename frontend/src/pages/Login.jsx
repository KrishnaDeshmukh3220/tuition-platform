import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await authAPI.login({ email, password })
      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', data.role)
        localStorage.setItem('fullName', data.fullName)

        if (data.role === 'STUDENT') {
          navigate('/student-dashboard')
        } else if (data.role === 'TUTOR') {
          navigate('/tutor-dashboard')
        }
      } else {
        setError(data.message || 'Invalid email or password')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow p-4">
              <h2 className="text-center fw-bold mb-4">Welcome Back</h2>

              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary w-100 py-2 mt-2"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

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