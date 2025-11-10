import React, { useState } from 'react';
import './petitioncreation.css';

const PetitionCreation = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: 'Hyderabad, IND',
    signatureGoal: 100,
    description: ''
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'Environment',
    'Infrastructure', 
    'Education',
    'Culture',
    'Public Safety',
    'Transportation',
    'Healthcare',
    'Housing',
    'Recreation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Petition title is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (formData.signatureGoal < 1) {
      newErrors.signatureGoal = 'Signature goal must be at least 1';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Petition created:', formData);
      alert('Petition created successfully!');
    }
  };

  const handleSaveDraft = () => {
    console.log('Draft saved:', formData);
    alert('Draft saved successfully!');
  };

  return (
    <div className="petition-form-container">
      <div className="petition-form-wrapper">
        <div className="form-header">
          <div className="header-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="form-title">Create a New Petition</h1>
        </div>
        
        <p className="form-subtitle">Start a petition by completing the form</p>
        
        <form onSubmit={handleSubmit} className="petition-form">
          <div className="form-row-main">
            <div className="form-column-left">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Petition Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter a Clear Title for Your Petition"
                  className={`form-input ${errors.title ? 'error' : ''}`}
                />
                <p className="form-hint">
                  Choose a title that clearly states what changes you want to see
                </p>
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-row-two">
                <div className="form-group half-width">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className={`form-select ${errors.category ? 'error' : ''}`}
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <div className="select-arrow">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {errors.category && <span className="error-message">{errors.category}</span>}
                </div>

                <div className="form-group half-width">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <p className="form-hint">
                    Identify the location relevant to your petition (e.g., Hyderabad, Telangana)
                  </p>
                </div>
              </div>

              <div className="form-group signature-goal">
                <label htmlFor="signatureGoal" className="form-label">
                  Signature Goal
                </label>
                <input
                  type="number"
                  id="signatureGoal"
                  name="signatureGoal"
                  value={formData.signatureGoal}
                  onChange={handleInputChange}
                  min="1"
                  className={`form-input signature-input ${errors.signatureGoal ? 'error' : ''}`}
                />
                <p className="form-hint">
                  How many signatures are you aiming to collect?
                </p>
                {errors.signatureGoal && <span className="error-message">{errors.signatureGoal}</span>}
              </div>
            </div>

            <div className="form-column-right">
              <div className="form-group description-group">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <div className="textarea-wrapper">
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Briefly describe the issue and the change you want..."
                    className={`form-textarea ${errors.description ? 'error' : ''}`}
                  />
                  <div className="textarea-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
                <p className="form-hint">
                  Share the problem, its importance, and the action you wish to see.
                </p>
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>
            </div>
          </div>

          <div className="important-notice">
            <div className="notice-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="notice-content">
              <h4 className="notice-title">Important Information</h4>
              <p className="notice-text">
                By submitting, you agree that your petition is truthful to the best of your knowledge and complies with Civix community guidelines. Petitions found misleading may be removed.
              </p>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleSaveDraft} className="btn-secondary">
              Save Draft
            </button>
            <button type="submit" className="btn-primary">
              Create Petition
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetitionCreation;
