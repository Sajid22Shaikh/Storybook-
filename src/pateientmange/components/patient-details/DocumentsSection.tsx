import React from 'react';
import './DocumentsSection.css';

const DocumentsSection = () => {
  const documents = [
    {
      id: 1,
      name: 'Agreement_Mediation.zip',
      size: '2.3 mb',
      type: 'zip'
    },
    {
      id: 2,
      name: 'Provision of information.pdf',
      size: '1.2 mb',
      type: 'pdf'
    },
    {
      id: 3,
      name: 'Agreement_Mediation.zip',
      size: '2.4 mb',
      type: 'zip'
    },
    {
      id: 4,
      name: 'Provision of information.pdf',
      size: '1.2 mb',
      type: 'pdf'
    }
  ];

  return (
    <div className="documents-section card">
      <div className="card-header">
        <h2>Agreement of document</h2>
        <button className="more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </div>
      <div className="documents-list">
        {documents.map(document => (
          <div key={document.id} className="document-item">
            <div className="document-icon">
              {document.type === 'zip' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"/><path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4"/><path d="M12 19v-6"/><path d="m9 16 3 3 3-3"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              )}
            </div>
            <div className="document-info">
              <span className="document-name">{document.name}</span>
              <span className="document-size">{document.size}</span>
            </div>
            <button className="download-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsSection;