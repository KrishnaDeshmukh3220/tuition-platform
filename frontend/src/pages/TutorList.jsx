import { useState, useEffect } from 'react'
import { tutorAPI } from '../services/api'

function TutorList() {
  const [tutors, setTutors] = useState([])
  const [subject, setSubject] = useState('')
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTutors()
  }, [])

  const fetchTutors = async () => {
    setLoading(true)
    try {
      const response = await tutorAPI.getAllTutors()
      const data = await response.json()
      setTutors(data)
    } catch (err) {
      console.error('Error fetching tutors:', err)
    }
    setLoading(false)
  }

  const handleSearch = async () => {
    setLoading(true)
    try {
      const response = await tutorAPI.searchTutors(subject, location)
      const data = await response.json()
      setTutors(data)
    } catch (err) {
      console.error('Error searching tutors:', err)
    }
    setLoading(false)
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        {/* HEADER */}
        <h2 className="fw-bold mb-2">Find Tutors</h2>
        <p className="text-muted mb-4">Browse our verified tutors near you</p>

        {/* FILTERS */}
        <div className="card p-3 mb-4">
          <div className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Area / Pincode"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleSearch}>Search</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100" onClick={fetchTutors}>Reset</button>
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading && <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>}

        {/* TUTOR CARDS */}
        {!loading && tutors.length === 0 && (
          <div className="text-center py-5">
            <h5 className="text-muted">No tutors found</h5>
          </div>
        )}

        <div className="row g-4">
          {!loading && tutors.map(tutor => (
            <div className="col-md-6" key={tutor.id}>
              <div className="card shadow-sm p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{width:'55px', height:'55px', fontSize:'20px'}}>
                    {tutor.fullName.charAt(0)}
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">{tutor.fullName}</h5>
                    <p className="mb-0 text-muted">{tutor.subjects}</p>
                  </div>
                  {tutor.isVerified && <span className="ms-auto badge bg-success">✓ Verified</span>}
                </div>
                <div className="d-flex gap-3 text-muted small mb-3">
                  <span>📍 {tutor.location}</span>
                  <span>💼 {tutor.experienceYears} years exp</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="fw-bold text-primary fs-5">₹{tutor.hourlyRate}/session</span>
                  <button className="btn btn-primary">Book Session</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TutorList