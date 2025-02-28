import React from 'react';
import './TreatmentHistory.css';

const TreatmentHistory = () => {
  const treatments = [
    {
      id: '#12324',
      type: 'Implant',
      date: '12 Jun 2023',
      result: 'Well done',
      payment: 'Pending',
      paymentClass: 'pending'
    },
    {
      id: '#20324',
      type: 'Route canal',
      date: '4 May 2023',
      result: 'Well done',
      payment: 'Paid',
      paymentClass: 'paid'
    },
    {
      id: '#57886',
      type: 'Dentures',
      date: '2 Mar 2023',
      result: 'Well done',
      payment: 'Paid',
      paymentClass: 'paid'
    },
    {
      id: '#68767',
      type: 'Whitening',
      date: '16 Feb 2023',
      result: 'Well done',
      payment: 'Paid',
      paymentClass: 'paid'
    },
    {
      id: '#69696',
      type: 'Implant',
      date: '9 Jan 2023',
      result: 'Well done',
      payment: 'Paid',
      paymentClass: 'paid'
    }
  ];

  return (
    <div className="treatment-history card">
      <div className="card-header">
        <h2>History dental</h2>
      </div>
      <div className="treatment-table-container">
        <table className="treatment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type Treatment</th>
              <th>Date</th>
              <th>Result Treatment</th>
              <th>Payment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {treatments.map(treatment => (
              <tr key={treatment.id}>
                <td className="treatment-id">{treatment.id}</td>
                <td className="treatment-type">
                  <span className="treatment-icon">
                    {treatment.type === 'Implant' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                    )}
                    {treatment.type === 'Route canal' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
                    )}
                    {treatment.type === 'Dentures' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    )}
                    {treatment.type === 'Whitening' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="M3 21v-3l9-9"/><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3 3"/><path d="m15 9 3 3"/></svg>
                    )}
                  </span>
                  {treatment.type}
                </td>
                <td>{treatment.date}</td>
                <td className="treatment-result">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {treatment.result}
                </td>
                <td>
                  <span className={`payment-status ${treatment.paymentClass}`}>
                    {treatment.payment}
                  </span>
                </td>
                <td>
                  <button className="more-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TreatmentHistory;