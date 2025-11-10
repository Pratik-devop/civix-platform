import React, { useState } from 'react';
import { Bell, Download, BarChart3, FileText, Clock, Users, BarChart2, Settings, HelpCircle, LogOut } from 'lucide-react';
import './reportpage.css';

const ReportPage = () => {
  const [activeView, setActiveView] = useState('Community Overview');

  const sidebarItems = [
    { icon: BarChart3, name: 'Dashboard', active: false },
    { icon: FileText, name: 'Petitions', active: false },
    { icon: Clock, name: 'Polls', active: false },
    { icon: Users, name: 'Officials', active: false },
    { icon: BarChart2, name: 'Reports', active: true },
    { icon: Settings, name: 'Settings', active: false },
  ];

  const navItems = [
    { name: 'Home', active: false },
    { name: 'Petitions', active: false },
    { name: 'Polls', active: false },
    { name: 'Reports', active: true },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-profile">
          <div className="avatar">S</div>
          <div className="user-info">
            <h3 className="user-name">Shrisha</h3>
            <p className="user-status">Unverified Official</p>
            <p className="user-location">📍 Hyderabad, IND</p>
            <p className="user-email">shrisha123@gmail.com</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {sidebarItems.map((item, idx) => (
              <li key={idx}>
                <button className={`nav-item ${item.active ? 'nav-item-active' : ''}`}>
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </button>
          <button className="nav-item">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">🏛</div>
              <span className="logo-text">Civix</span>
            </div>
            <nav className="header-nav">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`header-nav-item ${item.active ? 'header-nav-item-active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="header-right">
            <div className="notification-icon">
              <Bell size={20} />
              <div className="notification-badge">3</div>
            </div>
            <div className="user-menu">
              <div className="user-avatar">S</div>
              <span>Shrisha</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 4.5L6 7.5L9 4.5H3Z" />
              </svg>
            </div>
          </div>
        </header>

        <main className="content">
          {/* Header */}
          <div className="content-header">
            <div>
              <h1 className="page-title">Reports & Analytics</h1>
              <p className="page-subtitle">
                Track civic engagement and measure the impact of petitions and polls.
              </p>
            </div>
            <button className="export-btn">
              <Download size={16} /> Export Data
            </button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <h3>Total Petition</h3>
                <FileText size={20} />
              </div>
              <div className="stat-value">3</div>
              <p>↑ 12% increase from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Total Polls</h3>
                <Clock size={20} />
              </div>
              <div className="stat-value">0</div>
              <p>↑ 12% increase from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Active Engagement</h3>
                <BarChart3 size={20} />
              </div>
              <div className="stat-value">3</div>
              <p>Active Petition and Polls</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            <button
              className={`tab ${activeView === 'Community Overview' ? 'tab-active' : ''}`}
              onClick={() => setActiveView('Community Overview')}
            >
              Community Overview
            </button>
            <button
              className={`tab ${activeView === 'My Activity' ? 'tab-active' : ''}`}
              onClick={() => setActiveView('My Activity')}
            >
              My Activity
            </button>
          </div>

          {/* Charts */}
          <div className="charts-grid">
            <div className="chart-card">
              <h3>Petition Status Breakdown</h3>
              <p>Distribution of petitions by current status</p>
              <div className="pie-chart">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="#e0e0e0" />
                  <path d="M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z" fill="#4db6ac" />
                  <path d="M 180 100 A 80 80 0 0 1 100 180 L 100 100 Z" fill="#ff7043" />
                  <path d="M 100 180 A 80 80 0 0 1 20 100 L 100 100 Z" fill="#42a5f5" />
                </svg>
                <div className="pie-chart-center">
                  <div className="pie-chart-value">3</div>
                  <div className="pie-chart-label">Total</div>
                </div>
              </div>
              <div className="legend">
                <div className="legend-item">
                  <div className="legend-color active-color"></div>
                  <span>Active 50%</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color review-color"></div>
                  <span>Review 25%</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color closed-color"></div>
                  <span>Closed 25%</span>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <h3>Poll Status Overview</h3>
              <p>Distribution of polls by current status</p>
              <div className="empty-chart">No data available</div>
              <div className="legend">
                <div className="legend-item">
                  <div className="legend-color active-color"></div>
                  <span>Active</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color closed-color"></div>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportPage;
