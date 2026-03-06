import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim()

  const handleSubmit = () => {
    if (isValid) navigate("/profile")
  }

  return (
    <div style={{
      height: '844px',
      display: 'flex',
      flexDirection: 'column',
      background: 'white'
    }}>
      
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '48px 32px 32px 32px'
      }}>

        {/* Title */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1D1D1D',
            position: 'relative',
            display: 'inline-block',
            paddingBottom: '8px'
          }}>
            PopX account
            <span style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '32px',
              height: '3px',
              background: '#EEB22B',
              borderRadius: '2px'
            }}></span>
          </h1>
        </div>

        {/* Form Fields */}
        <div>
          <div className="field-wrapper">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <label>Phone number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Marry Doe"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <label>Email address*</label>
            <input
              type="email"
              name="email"
              placeholder="Marry Doe"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="field-wrapper">
            <label>Company name</label>
            <input
              type="text"
              name="company"
              placeholder="Marry Doe"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          {/* Radio Buttons */}
          <div style={{ marginTop: '24px' }}>
            <p style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#1D1D1D',
              marginBottom: '16px'
            }}>
              Are you an Agency?*
            </p>

            <div style={{ display: 'flex', gap: '32px' }}>
              {/* Yes */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}>
                <div
                  onClick={() => setForm(prev => ({ ...prev, isAgency: "yes" }))}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid #6C25FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: form.isAgency === "yes" ? '#fff' : '#fff'
                  }}
                >
                  {form.isAgency === "yes" && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#6C25FF'
                    }}></div>
                  )}
                </div>
                <span style={{ fontSize: '14px', color: '#1D1D1D' }}>Yes</span>
              </label>

              {/* No */}
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
              }}>
                <div
                  onClick={() => setForm(prev => ({ ...prev, isAgency: "no" }))}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: `2px solid ${form.isAgency === "no" ? '#6C25FF' : '#CBCBCB'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#fff'
                  }}
                >
                  {form.isAgency === "no" && (
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#6C25FF'
                    }}></div>
                  )}
                </div>
                <span style={{ fontSize: '14px', color: '#1D1D1D' }}>No</span>
              </label>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Button */}
      <div style={{
        padding: '16px 32px 32px 32px',
        background: 'white',
        borderTop: '1px solid #F0F0F0'
      }}>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`btn-primary ${isValid ? 'active' : 'disabled'}`}
        >
          Create Account
        </button>
      </div>

    </div>
  )
}