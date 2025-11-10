// src/pages/dashboardpage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboardpage.css';

const CivixDashboard = () => {
  const navigate = useNavigate();

  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard');
  const [activeFilter, setActiveFilter] = useState('All Categories');
  const [selectedLocation] = useState('Hyderabad, IND');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Header Nav Click
  const handleNavClick = (item) => {
    setActiveNavItem(item);
    if (item === 'Petitions') navigate('/petitionpage');
    else if (item === 'Polls') navigate('/pollspage');
    else if (item === 'Reports') navigate('/reportpage');
    else navigate('/dashboardpage'); // Home
  };

  // Sidebar Click
  const handleSidebarClick = (item) => {
    setActiveSidebarItem(item);
    if (item === 'Petitions') navigate('/petitionpage');
    else if (item === 'Polls') navigate('/pollspage');
    else if (item === 'Reports') navigate('/reportpage');
    else navigate('/dashboardpage'); // Dashboard
    if (window.innerWidth <= 768) setSidebarOpen(false);
  };

  const handleFilterClick = (filter) => setActiveFilter(filter);
  const handleClearFilters = () => setActiveFilter('All Categories');
  const handleLocationChange = () => alert('Location change feature - Ready for implementation!');
  const handleNotificationClick = () => alert('You have 3 new notifications!');
  const handleUserProfileClick = () => alert('User profile menu - Ready for implementation!');
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleHelpSupport = () => alert('Help & Support - Ready for implementation!');
  const handleSignOut = () => alert('Sign Out - Ready for implementation!');

  // Special Buttons
  const handleCreatePetition = () => navigate('/petitioncreation');
  const handleCreatePoll = () => navigate('/pollcreation');

  const navItems = ['Home', 'Petitions', 'Polls', 'Reports'];
  const sidebarItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Petitions', icon: '📝' },
    { name: 'Polls', icon: '🗳️' },
    { name: 'Officials', icon: '👥' },
    { name: 'Reports', icon: '📈' },
    { name: 'Settings', icon: '⚙️' }
  ];

  const filterButtons = [
    'All Categories', 'Environment', 'Infrastructure', 'Education', 'Culture',
    'Public Safety', 'Transportation', 'Healthcare', 'Housing', 'Recreation'
  ];

  return (
    <div className="civix-dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <button className="mobile-menu-btn" onClick={toggleSidebar}>☰</button>
          <div className="logo">
            <span className="logo-icon">🏛️</span>
            <span className="logo-text">Civix</span>
          </div>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeNavItem === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="user-section">
          <button className="notification-icon" onClick={handleNotificationClick}>
            <span>🔔</span>
            <span className="notification-badge">3</span>
          </button>
          <button className="user-profile" onClick={handleUserProfileClick}>
            <span className="user-avatar">S</span>
            <span className="user-name">Shrisha</span>
            <span className="dropdown-arrow">▼</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="user-info">
            <div className="user-avatar-large">S</div>
            <div className="user-details">
              <h3>Shrisha</h3>
              <p className="user-status">Unverified Official</p>
              <div className="location">
                <span className="location-icon">📍</span>
                <span>Hyderabad, IND</span>
              </div>
              <p className="email">shrisha123@gmail.com</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                className={`nav-item ${activeSidebarItem === item.name ? 'active' : ''}`}
                onClick={() => handleSidebarClick(item.name)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <button className="nav-item" onClick={handleHelpSupport}>
              <span className="nav-icon">❓</span>
              <span>Help & Support</span>
            </button>
            <button className="nav-item" onClick={handleSignOut}>
              <span className="nav-icon">🚪</span>
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

        {/* Content Area */}
        <main className="content-area">
          <div className="welcome-section">
            <div className="welcome-text">
              <h1>Welcome back, Shrisha!</h1>
              <p>See what's happening in your community and make your voice heard.</p>
            </div>
            <button className="create-petition-btn" onClick={handleCreatePetition}>
              ✉️ Create Petition
            </button>
            <button className="create-poll-btn" onClick={handleCreatePoll}>
              ✉️ Create Poll
            </button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>My Petitions</h3>
              <div className="stat-number">0</div>
              <p className="stat-label">petitions</p>
            </div>
            <div className="stat-card">
              <h3>Successful Petitions</h3>
              <div className="stat-number">0</div>
              <p className="stat-label">or under review</p>
            </div>
            <div className="stat-card">
              <h3>Polls Created</h3>
              <div className="stat-number">0</div>
              <p className="stat-label">polls</p>
            </div>
          </div>

          {/* Active Petitions Section */}
          <div className="active-petitions">
            <div className="section-header">
              <h2>Active Petitions Near You</h2>
              <div className="location-filter">
                <span>Showing for:</span>
                <button className="location-dropdown" onClick={handleLocationChange}>
                  <span className="location-pin">📍</span>
                  <span>{selectedLocation}</span>
                  <span className="dropdown-arrow">▼</span>
                </button>
              </div>
            </div>

            <div className="category-filters">
              {filterButtons.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="no-petitions">
              <p>No petitions found with current filters.</p>
              <button className="clear-filters-btn" onClick={handleClearFilters}>
                Clear Filters
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CivixDashboard;
