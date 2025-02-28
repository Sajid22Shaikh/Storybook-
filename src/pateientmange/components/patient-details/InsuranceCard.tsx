import React from 'react';
import './InsuranceCard.css';

const InsuranceCard = () => {
  return (
    <div className="insurance-card">
      <div className="card-header">
        <h2>Date of assurance</h2>
        <button className="more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </div>
      <div className="insurance-content">
        <div className="insurance-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        </div>
        <div className="insurance-number">234-234-232-32</div>
        <div className="insurance-details">
          <div className="detail-item">
            <span className="detail-label">Date</span>
            <span className="detail-value">23/04/2024</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Status</span>
            <span className="detail-value status-active">Actived</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;