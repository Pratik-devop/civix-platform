  import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, 
  FileText, 
  Clock, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  LogOut,
  Bell,
  ChevronDown,
  MapPin
} from 'lucide-react';
import './dashboardpage.css';

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const navigate = useNavigate();

  const navigateToPage = (page) => {
    setCurrentPage(page); // ✅ update currentPage for active state
    switch (page) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'petitions':
        navigate('/petition');
        break;
      case 'polls':
        navigate('/polls');
        break;
      case 'reports':
        navigate('/reports');
        break;
      default:
        navigate('/dashboard');
    }
  };

  const renderMainContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <DashboardContent 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        );
      case 'petitions':
        return <PetitionsPage />;
      case 'polls':
        return <PollsPage />;
      case 'reports':
        return <ReportsPage />;
      default:
        return <DashboardContent />;
    }
  };


  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* User Profile Section */}
        <div className="user-profile-section">
          <div className="user-profile">
            <div className="user-avatar">
              <span>S</span>
            </div>
            <div className="user-info">
              <h3>Shrisha</h3>
              <p className="user-status">Unverified Official</p>
            </div>
          </div>
          <div className="user-location">
            <MapPin className="location-icon" />
            <span>Hyderabad, IND</span>
          </div>
          <p className="user-email">shrisha123@gmail.com</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button 
                onClick={() => navigateToPage('dashboard')}
                className={`nav-button ${currentPage === 'dashboard' ? 'active' : ''}`}
              >
                <LayoutGrid className="nav-icon" />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateToPage('petitions')}
                className={`nav-button ${currentPage === 'petitions' ? 'active' : ''}`}
              >
                <FileText className="nav-icon" />
                <span>Petitions</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateToPage('polls')}
                className={`nav-button ${currentPage === 'polls' ? 'active' : ''}`}
              >
                <Clock className="nav-icon" />
                <span>Polls</span>
              </button>
            </li>
            <li>
              <button className="nav-button">
                <Users className="nav-icon" />
                <span>Officials</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateToPage('reports')}
                className={`nav-button ${currentPage === 'reports' ? 'active' : ''}`}
              >
                <BarChart3 className="nav-icon" />
                <span>Reports</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Bottom Navigation */}
        <div className="sidebar-bottom">
          <ul>
            <li>
              <button className="nav-button">
                <Settings className="nav-icon" />
                <span>Settings</span>
              </button>
            </li>
            <li>
              <button className="nav-button">
                <HelpCircle className="nav-icon" />
                <span>Help & Support</span>
              </button>
            </li>
            <li>
              <button className="nav-button">
                <LogOut className="nav-icon" />
                <span>Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <header className="top-header">
          <div className="header-content">
            {/* Civix Logo */}
            <div className="logo-section">
              <div className="logo-icon">
                <span>🏛️</span>
              </div>
              <span className="logo-text">Civix</span>
            </div>
            
            <nav className="top-nav">
              <button 
                onClick={() => navigateToPage('dashboard')}
                className={`top-nav-button ${currentPage === 'dashboard' ? 'active' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('petitions')}
                className={`top-nav-button ${currentPage === 'petitions' ? 'active' : ''}`}
              >
                Petitions
              </button>
              <button 
                onClick={() => navigateToPage('polls')}
                className={`top-nav-button ${currentPage === 'polls' ? 'active' : ''}`}
              >
                Polls
              </button>
              <button 
                onClick={() => navigateToPage('reports')}
                className={`top-nav-button ${currentPage === 'reports' ? 'active' : ''}`}
              >
                Reports
              </button>
            </nav>
            
            <div className="header-right">
              <div className="notification-bell">
                <Bell className="bell-icon" />
                <span className="notification-badge">3</span>
              </div>
              <div className="user-menu">
                <div className="user-menu-avatar">
                  <span>S</span>
                </div>
                <span className="user-menu-name">Shrisha</span>
                <ChevronDown className="dropdown-icon" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {renderMainContent()}
      </div>
    </div>
  );
};

const DashboardContent = ({ selectedCategory, setSelectedCategory, selectedLocation }) => {
  return (
    <main className="dashboard-main">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Welcome back, Shrisha!</h1>
            <p>See what's happening in your community and make your voice heard.</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stats-card">
          <h3>My Petitions</h3>
          <div className="stats-number">
            <span className="number">0</span>
            <span className="label">petitions</span>
          </div>
        </div>
        
        <div className="stats-card">
          <h3>Successful Petitions</h3>
          <div className="stats-number">
            <span className="number">0</span>
            <span className="label">or under review</span>
          </div>
        </div>
        
        <div className="stats-card">
          <h3>Polls Created</h3>
          <div className="stats-number">
            <span className="number">0</span>
            <span className="label">polls</span>
          </div>
        </div>
      </div>

      {/* Active Petitions Section */}
      <div className="petitions-section">
        <div className="petitions-header">
          <div className="section-title-row">
            <h2>Active Petitions Near You</h2>
            <div className="location-selector">
              <span className="showing-text">Showing for:</span>
              <div className="location-dropdown">
                <MapPin className="location-pin-icon" />
                <span className="location-text">Hyderabad, IND</span>
                <ChevronDown className="location-dropdown-icon" />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <div className="filter-row">
              {['All Categories', 'Environment', 'Infrastructure', 'Education', 'Culture'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="filter-row">
              {['Public Safety', 'Transportation', 'Healthcare', 'Housing', 'Recreation'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* No Petitions Found */}
        <div className="no-petitions">
          <p>No petitions found with current filters.</p>
          <button className="clear-filters-button">Clear Filters</button>
        </div>
      </div>
    </main>
  );
};

const PetitionsPage = () => {
  return (
    <main className="page-main">
      <div className="page-content">
        <h1>Petitions</h1>
        <p>View and manage all petitions in your community.</p>
        <div className="page-info blue">
          <p>This page will show active, pending, and completed petitions.</p>
        </div>
      </div>
    </main>
  );
};

const PollsPage = () => {
  return (
    <main className="page-main">
      <div className="page-content">
        <h1>Polls</h1>
        <p>Create and participate in community polls.</p>
        <div className="page-info green">
          <p>This page will show active polls and voting results.</p>
        </div>
      </div>
    </main>
  );
};

const ReportsPage = () => {
  return (
    <main className="page-main">
      <div className="page-content">
        <h1>Reports</h1>
        <p>View analytics and reports for community engagement.</p>
        <div className="page-info purple">
          <p>This page will show community statistics and engagement metrics.</p>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;