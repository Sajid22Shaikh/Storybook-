import React from 'react';
import './PatientDetails.css';
import BasicInfo from './patient-details/BasicInfo';
import AppointmentSchedule from './patient-details/AppointmentSchedule';
import InsuranceCard from './patient-details/InsuranceCard';
import MembershipCard from './patient-details/MembershipCard';
import DocumentsSection from './patient-details/DocumentsSection';
import TreatmentHistory from './patient-details/TreatmentHistory';

const PatientDetails = () => {
  return (
    <div className="patient-details">
      <div className="patient-header">
        <div className="patient-profile">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="Jerome Bellingham" 
            className="patient-avatar" 
          />
          <div className="patient-title">
            <h1>Jerome Bellingham</h1>
            <div className="patient-subtitle">
              <span className="member-badge">MEMBER</span>
              <div className="joined-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span>Joined Since : 12 March 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="patient-actions">
          <button className="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </button>
          <button className="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </button>
          <button className="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8"/><path d="m16 16-2 2 4 2 2-4-2-2-6 6"/></svg>
          </button>
          <button className="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3v4a1 1 0 0 0 1 1h4"/><path d="M18 17v-3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"/><path d="M10 7V3a1 1 0 0 1 1-1h3"/><path d="M17 21h3a2 2 0 0 0 2-2V7.5L16.5 2H7a2 2 0 0 0-2 2v4"/></svg>
          </button>
          <button className="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
        </div>
      </div>

      <div className="details-grid">
        <div className="grid-row">
          <BasicInfo />
          <AppointmentSchedule />
          <div className="card-group">
            <InsuranceCard />
            <MembershipCard />
          </div>
        </div>
        <div className="grid-row">
          <TreatmentHistory />
          <DocumentsSection />
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;