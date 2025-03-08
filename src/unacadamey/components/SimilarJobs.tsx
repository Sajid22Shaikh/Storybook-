import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import './SimilarJobs.css';

interface Job {
  title: string;
  experience: string;
  location: string;
  posted: string;
  logo: string;
}

interface SimilarJobsProps {
  title: string;
  jobs: Job[];
}

const SimilarJobs: React.FC<SimilarJobsProps> = ({ title, jobs }) => {
  return (
    <div className="similar-jobs">
      <h2 className="similar-jobs-title">{title}</h2>
      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-item">
            <div className="job-content">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-details">
                <div className="job-detail">
                  <Clock size={14} className="detail-icon" />
                  <span>{job.experience}</span>
                </div>
                <div className="job-detail">
                  <MapPin size={14} className="detail-icon" />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="job-posted">{job.posted}</div>
            </div>
            <div className="company-logo">
              <div className="logo-placeholder">
                <img src={job.logo} alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarJobs;