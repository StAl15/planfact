import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
