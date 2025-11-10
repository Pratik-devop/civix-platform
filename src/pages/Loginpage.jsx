import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import './Loginpage.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
    userType: 'citizen'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleLogin = (e) => {
  e.preventDefault();
  const { email, password } = formData;

  if (activeTab === 'login') {
    if (email === 'shrisha123@gmail.com' && password === 'asdfghjkl') {
      localStorage.setItem('token', 'mock-token');
      navigate('/dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
};




  const handleGoogleAuth = () => {
   localStorage.setItem('token', 'mock-google-token');
   navigate('/dashboard'); 
   };

  return (
    <div className="civix-container">
      <div className="civix-left-panel">
        <div className="civix-header">
          <div className="civix-logo">
            <div className="logo-icon">🏛️</div>
            <span className="logo-text">Civix</span>
          </div>
          <h1 className="civix-title">Digital Civix Engagement Platform</h1>
        </div>
        
        <div className="civix-description">
          <p>Civix helps you vote, start petitions, and track local leaders. Speak up and make a difference.</p>
        </div>

        <div className="civix-features">
          {activeTab === 'login' ? (
            <>
              <div className="feature-item">
                <div className="feature-icon">✏️</div>
                <span>Create and sign petitions for community change</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <span>Participate in local polls and surveys</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📋</div>
                <span>Submit reports on community issues</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏛️</div>
                <span>Connect with elected officials</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✅</div>
                <span>Track petition progress and outcomes</span>
              </div>
            </>
          ) : (
            <>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <span>Join a community of engaged citizens</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📢</div>
                <span>Make your voice heard on local issues</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <span>Collaborate with neighbors and officials</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <span>Access transparent civic processes</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚖️</div>
                <span>Build a stronger democratic society</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="civix-right-panel">
        <div className={`login-card ${activeTab === 'register' ? 'register-mode' : ''}`}>
          <h2 className="welcome-title">Welcome to Civix</h2>
          <p className="welcome-subtitle">Be part of the change join our platform and shape the future of local governance</p>
          
          <div className="tab-switcher">
            <button 
              className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          
            {activeTab === 'register' && (
              <div className="form-group">
                <div className="form-label">Full Name</div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Shrisha"
                  className="form-input"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <div className="form-label">Email</div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <div className="form-label">Password</div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="form-input"
                required
              />
            </div>

            {activeTab === 'register' && (
              <>
                <div className="form-group">
                  <div className="form-label">Confirm Password</div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <div className="form-label">I am registering as:</div>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="userType"
                        value="citizen"
                        checked={formData.userType === 'citizen'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      Citizen
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="userType"
                        value="official"
                        checked={formData.userType === 'official'}
                        onChange={handleInputChange}
                      />
                      <span className="radio-custom"></span>
                      Public Official
                    </label>
                  </div>
                </div>
              </>
            )}

            <button type="button" className="sign-in-btn" onClick={handleLogin}>
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            {activeTab === 'login' && (
              <>
                <div className="divider">
                  <span>or</span>
                </div>

                <button type="button" onClick={handleGoogleAuth} className="google-btn">
                  <svg className="google-icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Login with Google
                </button>
              </>
            )}

            <div className="register-link">
              {activeTab === 'login' ? (
                <>Don't have an account? <span className="register-now" onClick={() => setActiveTab('register')}>Register now</span></>
              ) : (
                <>Already have an account? <span className="register-now" onClick={() => setActiveTab('login')}>Sign in</span></>
              )}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
