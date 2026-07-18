function TutorList() {
    const tutors = [
      { id: 1, name: 'Rahul Sharma', subject: 'Mathematics', location: 'Banjara Hills, Hyderabad', rating: 4.8, price: 500, experience: 5 },
      { id: 2, name: 'Priya Reddy', subject: 'Science', location: 'Madhapur, Hyderabad', rating: 4.6, price: 400, experience: 3 },
      { id: 3, name: 'Amit Kumar', subject: 'English', location: 'Kondapur, Hyderabad', rating: 4.9, price: 600, experience: 7 },
      { id: 4, name: 'Sneha Patel', subject: 'Physics', location: 'Gachibowli, Hyderabad', rating: 4.7, price: 550, experience: 4 },
    ]
  
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
                <input type="text" className="form-control" placeholder="Search by subject" />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Area / Pincode" />
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Subjects</option>
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                  <option>Physics</option>
                </select>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
  
          {/* TUTOR CARDS */}
          <div className="row g-4">
            {tutors.map(tutor => (
              <div className="col-md-6" key={tutor.id}>
                <div className="card shadow-sm p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width:'55px', height:'55px', fontSize:'20px'}}>
                      {tutor.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold">{tutor.name}</h5>
                      <p className="mb-0 text-muted">{tutor.subject}</p>
                    </div>
                    <span className="ms-auto badge bg-warning text-dark">⭐ {tutor.rating}</span>
                  </div>
                  <div className="d-flex gap-3 text-muted small mb-3">
                    <span>📍 {tutor.location}</span>
                    <span>💼 {tutor.experience} years exp</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold text-primary fs-5">₹{tutor.price}/session</span>
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