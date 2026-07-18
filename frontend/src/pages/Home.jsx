function Home() {
    return (
      <div>
        {/* HERO SECTION */}
        <div style={{background: 'linear-gradient(135deg, #1a73e8, #0d47a1)', color: 'white', padding: '100px 0'}}>
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Find the Perfect Tutor Near You</h1>
            <p className="lead mt-3">Connect with verified tutors for home tuitions and online sessions</p>
            
            {/* SEARCH BAR */}
            <div className="bg-white p-4 rounded mt-5">
              <div className="row g-2 justify-content-center">
                <div className="col-md-4">
                  <input type="text" className="form-control form-control-lg" placeholder="Subject (e.g. Maths, Science)" />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Your Area / Pincode" />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary btn-lg w-100">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* STATS SECTION */}
        <div className="py-5 bg-white">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <h2 className="fw-bold text-primary">500+</h2>
                <p className="text-muted">Verified Tutors</p>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bold text-primary">2000+</h2>
                <p className="text-muted">Happy Students</p>
              </div>
              <div className="col-md-4">
                <h2 className="fw-bold text-primary">50+</h2>
                <p className="text-muted">Subjects Covered</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* HOW IT WORKS */}
        <div className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">How It Works</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{width:'60px', height:'60px', fontSize:'24px'}}>1</div>
                <h5 className="mt-3 fw-bold">Search a Tutor</h5>
                <p className="text-muted">Enter your subject and location to find nearby tutors</p>
              </div>
              <div className="col-md-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{width:'60px', height:'60px', fontSize:'24px'}}>2</div>
                <h5 className="mt-3 fw-bold">Book a Session</h5>
                <p className="text-muted">Choose your time slot and book a trial session</p>
              </div>
              <div className="col-md-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{width:'60px', height:'60px', fontSize:'24px'}}>3</div>
                <h5 className="mt-3 fw-bold">Start Learning</h5>
                <p className="text-muted">Meet your tutor at home or join online session</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* WHY CHOOSE US */}
        <div className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Why Choose TuitionConnect</h2>
            <div className="row text-center">
              <div className="col-md-3">
                <div style={{fontSize:'40px'}}>✅</div>
                <h6 className="fw-bold mt-3">Verified Tutors</h6>
                <p className="text-muted small">All tutors are ID and degree verified</p>
              </div>
              <div className="col-md-3">
                <div style={{fontSize:'40px'}}>🔒</div>
                <h6 className="fw-bold mt-3">Secure Payments</h6>
                <p className="text-muted small">Pay safely through our platform</p>
              </div>
              <div className="col-md-3">
                <div style={{fontSize:'40px'}}>📍</div>
                <h6 className="fw-bold mt-3">Home Tuitions</h6>
                <p className="text-muted small">Find tutors near your location</p>
              </div>
              <div className="col-md-3">
                <div style={{fontSize:'40px'}}>⭐</div>
                <h6 className="fw-bold mt-3">Rated Tutors</h6>
                <p className="text-muted small">Read reviews before you book</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* FOOTER */}
        <footer className="bg-dark text-white py-4">
          <div className="container text-center">
            <p className="mb-0">© 2024 TuitionConnect. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
  
  export default Home