import React, { useState } from 'react';
import './petitionpage.css';

const PetitionsPage = () => {
  const [activeTab, setActiveTab] = useState('All Petition');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All Categories');

  const petitions = [
    {
      id: 1,
      title: "Petition 1",
      description: "Daily metro travel is expensive for students. Offering at least a 50% concession will make education more accessible and affordable for thousands of students...",
      signatures: 0,
      targetSignatures: 100,
      status: "Active",
      timeAgo: "5 minute ago"
    },
    {
      id: 2,
      title: "Petition 2", 
      description: "Plastic waste is increasing pollution in our city lakes and roadsides. Enforcing a ban on single-use plastics in local markets will encourage sustainable practices...",
      signatures: 0,
      targetSignatures: 100,
      status: "Active",
      timeAgo: "2 minute ago"
    },
    {
      id: 3,
      title: "Petition 3",
      description: "Many streets in the Shivaji Nagar area lack proper lighting, making it unsafe for pedestrians and residents at night. Installing more streetlights will improve safety and reduce accidents...",
      signatures: 0,
      targetSignatures: 100,
      status: "Active",
      timeAgo: "Less than a minute ago"
    }
  ];

  const tabs = ['All Petition', 'My Petition', 'Signed by Me'];
  const locations = ['All Locations', 'Hyderabad, IND', 'Mumbai, IND', 'Delhi, IND'];
  const categories = ['All Categories', 'Environment', 'Infrastructure', 'Education', 'Public Safety'];
  const statusOptions = ['All', 'Active', 'Completed', 'Under Review'];
  
  // Horizontal scroll filters
  const scrollFilters = [
    'All Categories',
    'Environment', 
    'Infrastructure',
    'Education',
    'Public Safety',
    'Transportation',
    'Healthcare',
    'Housing',
    'Economy',
    'Technology',
    'Community',
    'Safety'
  ];

  const handleTabChange = (tab) => setActiveTab(tab);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  const handleViewDetails = (petitionId) => console.log('View details for petition:', petitionId);
  const handleSignPetition = (petitionId) => console.log('Sign petition:', petitionId);
  const handleCreatePetition = () => console.log('Create new petition');
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectedCategory(filter);
  };

  return (
    <div className="petitions-container">
      {/* Header */}
      <header className="main-header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">Civix</span>
          </div>
        </div>
        
        <nav className="main-nav">
  <a href="/" onClick={(e) => e.preventDefault()} className="nav-item">Home</a>
  <a href="/" onClick={(e) => e.preventDefault()} className="nav-item active">Petitions</a>
  <a href="/" onClick={(e) => e.preventDefault()} className="nav-item">Polls</a>
  <a href="/" onClick={(e) => e.preventDefault()} className="nav-item">Reports</a>
</nav>


        <div className="header-right">
          <button className="notification-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21A2 2 0 0 1 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-profile">
            <div className="user-avatar">S</div>
            <span className="user-name">Shrisha</span>
            <svg width="10" height="6" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </header>

      <div className="page-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="user-info">
            <div className="user-avatar large">S</div>
            <div className="user-details">
              <h3 className="user-name-sidebar">Shrisha</h3>
              <p className="user-status">Unverified Official</p>
            </div>
            <div className="user-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Hyderabad, IND</span>
            </div>
            <p className="user-email">shrisha123@gmail.com</p>
          </div>

          <nav className="sidebar-nav">
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Dashboard
            </a>
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Petitions
            </a>
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.02405 7.04 4.21L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Polls
            </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="nav-link active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Officials
            </a>
             <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21L9 18L15 21L21 18V6L15 9L9 6L3 3Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Reports
            </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Settings
            </a>
          </nav>

          <div className="sidebar-footer">
             <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9.09 9C9.3251 8.33167 9.789 7.76811 10.4005 7.40913C11.012 7.05016 11.7344 6.91894 12.4351 7.03871C13.1358 7.15849 13.7799 7.52152 14.2781 8.06353C14.7763 8.60553 15.1031 9.29152 15.2073 10.0736C15.3114 10.8557 15.1881 11.6516 14.8555 12.3588C14.5229 13.0661 13.9984 13.6496 13.3499 14.0311C12.7014 14.4126 11.9593 14.5726 11.2226 14.4904C10.4859 14.4082 9.79056 14.087 9.22 13.57" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 17H12.01" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Help & Support
            </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H14L21 10V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="1.5"/>
                <polyline points="9,9 9,21" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Sign Out
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Petitions</h1>
            <p className="page-description">Browse, Sign and track petition in your community.</p>
          </div>

          <div className="content-wrapper">
            {/* Tabs and Filters */}
            <div className="filters-section">
              <div className="tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="filters">
                <div className="filter-group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="filter-icon">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <select value={selectedLocation} onChange={handleLocationChange} className="filter-select">
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                  <svg width="10" height="6" viewBox="0 0 12 8" fill="none" className="select-arrow">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>

                <div className="filter-group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="filter-icon">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <select value={selectedCategory} onChange={handleCategoryChange} className="filter-select">
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <svg width="10" height="6" viewBox="0 0 12 8" fill="none" className="select-arrow">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>

                <div className="filter-group status-filter">
                  <span className="status-label">Status :</span>
                  <select value={selectedStatus} onChange={handleStatusChange} className="filter-select">
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <svg width="10" height="6" viewBox="0 0 12 8" fill="none" className="select-arrow">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* NEW: Horizontal Scrolling Filter Bar */}
            <div className="horizontal-filters">
              <div className="horizontal-filters-container">
                {scrollFilters.map((filter) => (
                  <button
                    key={filter}
                    className={`horizontal-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Petitions Grid */}
            <div className="petitions-grid">
              {petitions.map((petition) => (
                <div key={petition.id} className="petition-card">
                  <div className="petition-time">{petition.timeAgo}</div>
                  <div className="petition-content">
                    <h3 className="petition-title">{petition.title}</h3>
                    <p className="petition-description">{petition.description}</p>
                    <div className="petition-progress">
                      <span className="signatures-count">
                        {petition.signatures} of {petition.targetSignatures} signatures
                      </span>
                      <span className="petition-status">{petition.status}</span>
                    </div>
                    <div className="petition-actions">
                      <button 
                        className="btn-view-details"
                        onClick={() => handleViewDetails(petition.id)}
                      >
                        View Details
                      </button>
                      <button 
                        className="btn-sign-petition"
                        onClick={() => handleSignPetition(petition.id)}
                      >
                        Sign Petition
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <h2 className="cta-title">Have an issue that needs attention?</h2>
              <button className="cta-button" onClick={handleCreatePetition}>
                Create a Petition
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PetitionsPage;