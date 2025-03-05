import React from 'react';
import { Star } from 'lucide-react';
import './ReviewSection.css';

interface Review {
  title: string;
  reviewer: string;
  date: string;
  rating: number;
  comment: string;
}

interface ReviewSectionProps {
  reviews: {
    totalReviews: number;
    latestReview: Review;
  };
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const { totalReviews, latestReview } = reviews;
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index}
        size={16}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
        fill={index < rating ? '#FFD700' : 'none'}
        stroke={index < rating ? '#FFD700' : '#ccc'}
      />
    ));
  };

  return (
    <div className="review-section">
      <div className="review-header">
        <h2 className="review-title">Reviews</h2>
        <a href="#" className="read-all-link">Read all {totalReviews} reviews</a>
      </div>
      
      <div className="review-card">
        <h3 className="review-card-title">{latestReview.title}</h3>
        
        <div className="reviewer-info">
          <span className="reviewer-name">{latestReview.reviewer}</span>
          <span className="review-date">{latestReview.date}</span>
        </div>
        
        <div className="rating-stars">
          {renderStars(latestReview.rating)}
        </div>
        
        <div className="review-likes">
          <h4>Likes</h4>
          <p className="review-comment">{latestReview.comment}</p>
        </div>
        
        <div className="powered-by">
          <span>Powered by</span>
          <span className="ambitionbox">AmbitionBox</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;