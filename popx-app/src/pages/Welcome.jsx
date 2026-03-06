import { useNavigate } from "react-router-dom"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div style={{
      height: '844px',
      display: 'flex',
      flexDirection: 'column',
      background: '#F7F8F9'
    }}>
      
      {/* Spacer */}
      <div style={{ flex: 1 }}></div>

      {/* Bottom Content */}
      <div style={{ padding: '0 32px 48px 32px' }}>
        
        {/* Text */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1D1D1D',
            marginBottom: '12px',
            lineHeight: '1.3'
          }}>
            Welcome to PopX
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

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button
            onClick={() => navigate("/signup")}
            className="btn-primary active"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="btn-secondary"
          >
            Already Registered? Login
          </button>
        </div>

      </div>
    </div>
  )
}