import React from 'react';
import Sidebar from './components/Sidebar';
import PatientQueue from './components/PatientQueue';
import PatientDetails from './components/PatientDetails';
import './patient.css';

export const Patient=()=> {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <header className="top-header">
          <div className="breadcrumb">
            <span>List Customer</span>
            <span className="separator">&gt;</span>
            <span className="current">Jerome Bellingham</span>
          </div>
          <div className="header-actions">
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <button className="notification-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </button>
            <div className="user-profile">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Alexander Arnold" className="avatar" />
              <div className="user-info">
                <span className="user-name">Alexander Arnold</span>
                <span className="user-role">as a Administrator</span>
              </div>
            </div>
          </div>
        </header>
        <div className="content-area">
          <PatientQueue />
          <PatientDetails />
        </div>
      </div>
    </div>
  );
}

// export default App;