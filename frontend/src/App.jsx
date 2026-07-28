import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TutorList from "./pages/TutorList"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/tutors' element={<TutorList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>  
        <Route path='/student-dashboard' element={<div className="container mt-5"><h1>Student Dashboard</h1></div>}/>
      <Route path='/tutor-dashboard' element={<div className="container mt-5"><h1>Tutor Dashboard</h1></div>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App