import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })

  const isActive = form.email.trim() !== "" && form.password.trim() !== ""

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = () => {
    if (isActive) navigate("/profile")
  }

  return (
    <div style={{
      height: '844px',
      display: 'flex',
      flexDirection: 'column',
      background: '#F7F8F9'
    }}>
      
      {/* Content */}
      <div style={{ 
        flex: 1, 
        padding: '64px 32px 32px 32px',
        display: 'flex',
        flexDirection: 'column'
      }}>

        {/* Heading */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1D1D1D',
            marginBottom: '12px',
            lineHeight: '1.3'
          }}>
            Sign in to your<br />PopX account
          </h1>

          <p style={{
            fontSize: '14px',
            color: '#6C6C6C',
            lineHeight: '1.6'
          }}>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        {/* Form */}
        <div>
          <div className="field-wrapper">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: '32px' }}>
            <button
              onClick={handleLogin}
              disabled={!isActive}
              className={`btn-primary ${isActive ? 'active' : 'disabled'}`}
            >
              Login
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}