import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import AuthProtection from './authProtection'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AuthProtection><Home /></AuthProtection>} />
				<Route path='signup' element={<Signup />} />
				<Route path='login' element={<Login />} />
				<Route path='profile/:username' element={<AuthProtection> <Profile /> </AuthProtection>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App