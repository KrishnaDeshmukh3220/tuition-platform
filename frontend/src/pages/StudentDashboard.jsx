import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function StudentDashboard() {
  const navigate = useNavigate()
  const fullName = localStorage.getItem('fullName')
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('fullName')
    navigate('/login')
  }

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Welcome, {fullName}! 👋</h2>
          <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-4 text-center">
              <div style={{fontSize:'40px'}}>📚</div>
              <h5 className="fw-bold mt-3">Find Tutors</h5>
              <p className="text-muted">Search and book tutors near you</p>
              <button className="btn btn-primary" onClick={() => navigate('/tutors')}>Browse Tutors</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-4 text-center">
              <div style={{fontSize:'40px'}}>📅</div>
              <h5 className="fw-bold mt-3">My Bookings</h5>
              <p className="text-muted">View your upcoming sessions</p>
              <button className="btn btn-primary">View Bookings</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-4 text-center">
              <div style={{fontSize:'40px'}}>⭐</div>
              <h5 className="fw-bold mt-3">My Reviews</h5>
              <p className="text-muted">Reviews you have given</p>
              <button className="btn btn-primary">View Reviews</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
