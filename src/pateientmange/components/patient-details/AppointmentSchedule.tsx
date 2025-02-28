import React from 'react';
import './AppointmentSchedule.css';

const AppointmentSchedule = () => {
  const appointments = [
    {
      id: 1,
      date: '12 Oct 2023',
      title: 'Prosthetic Tooth Fabrication',
      doctor: 'Dr. Kiran Martin',
      color: 'blue'
    },
    {
      id: 2,
      date: '12 Dec 2023',
      title: 'Post-Surgical Care',
      doctor: 'Dr. Marvin McKinney',
      color: 'red'
    },
    {
      id: 3,
      date: '12 Aug 2023',
      title: 'Implant Placement',
      doctor: 'Dr. Floyd Miles',
      color: 'green'
    },
    {
      id: 4,
      date: '12 Jul 2023',
      title: 'Checkup',
      doctor: 'Dr. Kiran Martin',
      color: 'blue'
    }
  ];

  return (
    <div className="appointment-schedule card">
      <div className="card-header">
        <h2>Appointment Schedule</h2>
      </div>
      <div className="appointments-list">
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-item">
            <div className="appointment-date">
              <div className={`date-indicator ${appointment.color}`}></div>
              <span>{appointment.date}</span>
            </div>
            <div className="appointment-details">
              <h3 className="appointment-title">{appointment.title}</h3>
              <p className="appointment-doctor">
                <span className={`doctor-indicator ${appointment.color}`}></span>
                {appointment.doctor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentSchedule;