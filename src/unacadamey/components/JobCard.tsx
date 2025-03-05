import React, { useState } from 'react';
import { Star, MapPin, Clock, Users, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import './JobCard.css';

interface JobCardProps {
  job: {
    title: string;
    company: string;
    rating: number;
    reviews: number;
    experience: string;
    salary: string;
    location: string;
    posted: string;
    openings: number;
    applicants: number;
    description: string;
    skills: string[];
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="job-card">
      <div className="job-header">
        <h1 className="job-title">{job.title}</h1>
        <div className="company-info">
          <span className="company-name">{job.company}</span>
          <div className="rating">
            <Star className="star-icon" fill="#FFD700" color="#FFD700" size={16} />
            <span>{job.rating}</span>
            <span className="reviews">{job.reviews} Reviews</span>
          </div>
        </div>
      </div>

      <div className="job-details">
        <div className="detail-item">
          <Clock size={16} className="detail-icon" />
          <span>{job.experience}</span>
        </div>
        <div className="detail-item">
          <span className="salary-icon">₹</span>
          <span>{job.salary}</span>
        </div>
        <div className="detail-item">
          <MapPin size={16} className="detail-icon" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="job-meta">
        <div className="send-jobs">
          <a href="#" className="send-jobs-link">Send me jobs like this</a>
        </div>
      </div>

      <div className="job-stats">
        <div className="stat-item">
          <span className="stat-label">Posted:</span>
          <span className="stat-value">{job.posted}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Openings:</span>
          <span className="stat-value">{job.openings}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Applicants:</span>
          <span className="stat-value">{job.applicants}</span>
        </div>
      </div>

      <div className="job-actions">
        <button className="action-button register">Register to apply</button>
        <button className="action-button login">Login to apply</button>
      </div>

      <div className="job-description-section">
        <h2 className="section-title">Job description</h2>
        
        <div className="company-position">
          <p>{job.company} - Bangalore</p>
          <p>Position: Senior Finance Executive Revenue</p>
        </div>
        
        <div className="description-content">
          <h3>Job Description</h3>
          <ul>
            <li>Conduct a three-way revenue reconciliation (Revenue to Record).</li>
          </ul>
          
          {!expanded && (
            <button 
              className="read-more-btn" 
              onClick={() => setExpanded(true)}
            >
              read more
            </button>
          )}
        </div>
        
        <div className="key-skills">
          <h3 className="skills-title">Key Skills</h3>
          <p className="skills-note">Skills highlighted with 'o' are preferred keyskills</p>
          
          <div className="skills-list">
            <div className="preferred-skill">
              <Star size={14} className="star-icon-small" />
              <span>Ca</span>
            </div>
            
            {job.skills.slice(1).map((skill, index) => (
              <div key={index} className="skill-tag">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="social-share">
          <a href="#" className="social-icon facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-icon twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="social-icon linkedin">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;