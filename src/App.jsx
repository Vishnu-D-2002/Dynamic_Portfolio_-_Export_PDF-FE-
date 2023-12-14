import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import ResetPassword from './components/ResetPassword'
import EmailSend from './components/EmailSend'
import Activated from './components/Activated'
import './App.css';
import Additional from './pages/Additional'
import StudentDetail from './pages/StudentDetail'
import PersonalDetail from './pages/PersonalDetail'
import Education from './pages/Education'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <SignIn /> } />
            <Route path='/register' element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/emailSend' element={ <EmailSend /> } />
            <Route path='/resetPassword/:randomString' element={<ResetPassword />} />
            <Route path='/activate/:activationToken' element={<Activated />} />
            <Route path="/education" element={<Education />} />
            <Route path="/additional" element={<Additional />} />
            <Route path="/student" element={<StudentDetail />} />
            <Route path="/personal" element={<PersonalDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;