import React from 'react';
import JobCard from './components/JobCard';
import SimilarJobs from './components/SimilarJobs';
import ReviewSection from './components/ReviewSection';
import Logo from './images/unacademy.png'
import './unacademey.css';

export const Home=()=> {
  const jobData = {
    title: "Senior Finance Executive Revenue To Record CA Freshers",
    company: "Unacademy",
    rating: 3.0,
    reviews: 1945,
    experience: "0 - 2 years",
    salary: "Not Disclosed",
    location: "Bengaluru",
    posted: "17 days ago",
    openings: 4,
    applicants: 884,
    description: "Unacademy - Bangalore\nPosition: Senior Finance Executive Revenue\n\nJob Description\n• Conduct a three-way revenue reconciliation (Revenue to Record).",
    skills: ["Ca", "Revenue Reconciliation", "Gst Filing", "Gst", "Revenue Recognition"]
  };

  const similarJobs = [
    {
      title: "Korean Educator",
      experience: "1-5 Yrs",
      location: "Bengaluru(Domlur)",
      posted: "Posted 19 days ago", 
      logo: Logo
    },
    {
      title: "Sales Manager/ Senior Sales Manager",
      experience: "2-5 Yrs",
      location: "Delhi / NCR(Noida-Greater Noida...)",
      posted: "Posted 24 days ago",
      logo: Logo
    },
    {
      title: "Business Development Manager",
      experience: "3-5 Yrs",
      location: "Varanasi",
      posted: "Posted 30 days ago",
      logo: Logo
    }
  ];

  const reviewData = {
    totalReviews: 1945,
    latestReview: {
      title: "Android Developer for 3 months in Bangalore / Beng...",
      reviewer: "Anonymous",
      date: "19 Feb 2025",
      rating: 1,
      comment: "No , work culture is extremely toxic"
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="main-content">
          <JobCard job={jobData} />
        </div>
        <div className="sidebar">
          <SimilarJobs 
            title="Unacademy roles you might be interested in" 
            jobs={similarJobs} 
          />
          <ReviewSection reviews={reviewData} />
        </div>
      </div>
    </div>
  );
}

// export default App;