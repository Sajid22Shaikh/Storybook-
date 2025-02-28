import React from 'react';
import './BasicInfo.css';

const BasicInfo = () => {
  return (
    <div className="basic-info card">
      <div className="card-header">
        <h2>Basic informational</h2>
      </div>
      <div className="info-content">
        <div className="info-item">
          <div className="info-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            <span>Gender</span>
          </div>
          <div className="info-value">Male</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>Birthday</span>
          </div>
          <div className="info-value">12 August 2001</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Phone Number</span>
          </div>
          <div className="info-value">+62 837 356 343 23</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>Email</span>
          </div>
          <div className="info-value">jeromebellingham93@gmail.com</div>
        </div>
        
        <div className="info-item">
          <div className="info-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Sources</span>
          </div>
          <div className="info-value sources">
            <span className="source-icon facebook">f</span>
            <span className="source-icon google">G</span>
            <span className="source-icon twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </span>
            <span className="source-icon whatsapp">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.6 6.8A7.8 7.8 0 0 0 12 4c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 4 4.2-1c1.2.6 2.6 1 4 1 4.4 0 8-3.6 8-8 0-2.2-.8-4.2-2.6-5.8"/><path d="M14.5 14.2c-.3.4-1.2.7-1.5.8-.4 0-.7 0-1.2-.2-.6-.3-1.2-.6-1.7-1.1-.4-.4-.7-.8-1-1.3a4.1 4.1 0 0 1-.8-2.2c0-.7.2-1.3.6-1.7a.9.9 0 0 1 .7-.3h.5c.2 0 .4 0 .5.4l.7 1.7v.1c0 .2-.3.5-.5.7-.1.1-.1.2-.1.3.1.1.2.3.3.4.3.3.6.6 1 .8.1.1.3.2.5.3.1 0 .2 0 .3-.1l.5-.6c.1-.1.3-.2.4-.1l1.6.8c.2.1.3.2.3.3v.3"/></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;