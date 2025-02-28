import React from 'react';
import './PatientQueue.css';

const PatientQueue = () => {
  const patients = [
    { id: 1, name: 'Bessie Cooper', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'Jerome Bellingham', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', active: true },
    { id: 3, name: 'Dianne Robertson', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 4, name: 'Albert Flores', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 5, name: 'Savannah Nguyen', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 6, name: 'Jenny Wilson', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 7, name: 'Kathryn Murphy', registerDate: '12 March 2023', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  ];

  return (
    <div className="patient-queue">
      <div className="queue-header">
        <h2>Patient Queue</h2>
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      <div className="queue-tabs">
        <button className="tab active">All</button>
        <button className="tab">Oldest</button>
        <button className="tab">Newest</button>
      </div>
      <div className="patient-list">
        {patients.map(patient => (
          <div key={patient.id} className={`patient-item ${patient.active ? 'active' : ''}`}>
            <img src={patient.avatar} alt={patient.name} className="patient-avatar" />
            <div className="patient-info">
              <h3 className="patient-name">{patient.name}</h3>
              <p className="patient-register">Register: {patient.registerDate}</p>
            </div>
            <div className="patient-actions">
              <button className="more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
              </button>
              <button className="view-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientQueue;