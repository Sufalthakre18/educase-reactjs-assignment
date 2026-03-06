import { Routes, Route, Navigate } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"

function MobileFrame({ children }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '390px',
      height: '844px',
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <MobileFrame>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileFrame>
  )
}