import React from 'react';
import './MembershipCard.css';

const MembershipCard = () => {
  return (
    <div className="membership-card card">
      <div className="card-header">
        <h2>Member Dentalica</h2>
      </div>
      <div className="membership-content">
        <div className="membership-info">
          <div className="progress-container">
            <div className="progress-circle">
              <svg viewBox="0 0 36 36" className="progress-ring">
                <path className="progress-ring-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="progress-ring-fill"
                  strokeDasharray="60, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="progress-text">
                <span className="progress-value">32</span>
                <span className="progress-label">Days</span>
              </div>
            </div>
          </div>
          <div className="membership-details">
            <div className="detail-row">
              <span className="detail-label">Start Date Joined</span>
              <span className="detail-value">12 Dec 2023</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Extend</span>
              <span className="detail-value">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </div>
          </div>
        </div>
        <div className="membership-image">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Dental prosthesis" />
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;