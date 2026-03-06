import { useNavigate } from "react-router-dom"

function CameraIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
      <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
    </svg>
  )
}

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div style={{
      height: '844px',
      display: 'flex',
      flexDirection: 'column',
      background: '#F7F8F9'
    }}>
      
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        background: 'white',
        borderBottom: '1px solid #EBEBEB'
      }}>
        <h1 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#1D2226'
        }}>
          Account Settings
        </h1>
      </div>

      <div style={{
        background: 'white',
        margin: '16px',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>

        {/* Profile Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '20px'
        }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/025/869/585/non_2x/round-profile-image-of-man-avatar-for-social-networks-fashion-beauty-blue-and-black-bright-illustration-in-trendy-style-vector.jpg"
              alt="Profile"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            
            {/* Camera Badge */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#6C25FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid white'
            }}>
              <CameraIcon />
            </div>
          </div>

          <div>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1D2226',
              marginBottom: '4px'
            }}>
              Marry Doe
            </p>
            <p style={{
              fontSize: '12px',
              color: '#6C757D'
            }}>
              Marry@Gmail.Com
            </p>
          </div>

        </div>

        <div style={{ padding: '0 20px 20px 20px' }}>
          <p style={{
            fontSize: '12px',
            lineHeight: '1.6',
            color: '#6C757D'
          }}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* Dashed Line */}
        <div style={{
          margin: '0 20px',
          borderTop: '1px dashed #CBCBCB'
        }}></div>

        <div style={{ height: '20px' }}></div>

      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }}></div>

    
      <div style={{ padding: '0 24px 32px 24px' }}>
        <button
          onClick={() => navigate("/")}
          style={{
            fontSize: '12px',
            color: '#6C25FF',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0'
          }}
        >
          ← Back to Welcome
        </button>
      </div>

    </div>
  )
}