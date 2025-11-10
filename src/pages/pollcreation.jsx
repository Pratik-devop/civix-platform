import React, { useState } from 'react';
import { Clock, Plus, AlignJustify } from 'lucide-react';
import './pollcreation.css';

const CreatePollForm = () => {
  const [pollOptions, setPollOptions] = useState([]);
  const [pollQuestion, setPollQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [targetLocation, setTargetLocation] = useState('Hyderabad, IN');
  const [closesOn, setClosesOn] = useState('13-05-2025');

  const addPollOption = () => {
    if (pollOptions.length < 10) {
      setPollOptions([...pollOptions, '']);
    }
  };

  const updatePollOption = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);
  };

  const removePollOption = (index) => {
    const updatedOptions = pollOptions.filter((_, i) => i !== index);
    setPollOptions(updatedOptions);
  };

  return (
    <div className="create-poll-container">
      <div className="create-poll-form">
        {/* Header */}
        <div className="form-header">
          <div className="header-title">
            <Clock size={24} color="#000000" />
            <h1>Create a New Poll</h1>
          </div>
          <p className="header-subtitle">Create a poll to gather community feedback on local issues.</p>
        </div>

        {/* Poll Question Section */}
        <div className="form-section">
          <label className="form-label">Poll Question</label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="What do you want to ask the community?"
              value={pollQuestion}
              onChange={(e) => setPollQuestion(e.target.value)}
            />
            <small className="input-hint">Keep your question clear and specific.</small>
          </div>
        </div>

        {/* Description Section */}
        <div className="form-section">
          <label className="form-label">Description</label>
          <div className="textarea-wrapper">
            <textarea
              className="form-textarea"
              placeholder="Provide more context about the poll..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
            <AlignJustify size={18} className="textarea-icon" />
            <small className="input-hint">Give Community members enough information to make an informed choice.</small>
          </div>
        </div>

        {/* Poll Options Section */}
        <div className="form-section">
          <label className="form-label">Poll Option</label>
          <div className="poll-options">
            {pollOptions.map((option, index) => (
              <div key={index} className="poll-option-item">
                <input
                  type="text"
                  className="option-input"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => updatePollOption(index, e.target.value)}
                />
                <button 
                  className="remove-option-btn"
                  onClick={() => removePollOption(index)}
                >
                  ×
                </button>
              </div>
            ))}
            <button className="add-option-btn" onClick={addPollOption}>
              <Plus size={16} />
              Add Option
            </button>
            <small className="input-hint">Add at least 2 options, up to a maximum of 10.</small>
          </div>
        </div>

        {/* Location and Date Section */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Target Location</label>
            <input
              type="text"
              className="form-input location-input"
              value={targetLocation}
              onChange={(e) => setTargetLocation(e.target.value)}
            />
            <small className="input-hint">The area this poll is relevant to.</small>
          </div>
          
          <div className="form-group">
            <label className="form-label">Closes On</label>
            <input
              type="text"
              className="form-input date-input"
              value={closesOn}
              onChange={(e) => setClosesOn(e.target.value)}
            />
            <small className="input-hint">Choose when this poll will close (max 30 days)</small>
          </div>
        </div>

        {/* Important Information */}
        <div className="info-banner">
          <div className="info-icon">⚠</div>
          <div className="info-content">
            <strong className="info-title">Important Information</strong>
            <p className="info-text">Polls should be designed to gather genuine community feedback on issues that affect your area. Polls that are misleading or designed to push a specific agenda may be removed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePollForm;
