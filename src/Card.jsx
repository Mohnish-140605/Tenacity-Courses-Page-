import React, { useState } from 'react';

const Card = ({ imageSrc, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      
      <div className={`card-content ${isExpanded ? 'show' : ''}`}>
        <p className="card-description">{description}</p>
        {isExpanded && (
          <div className="card-details">
            <pre className="details-text">{details}</pre>
          </div>
        )}
      </div>

      <div className="card-buttons">
        <button className="card-button" onClick={toggleExpand}>
          {isExpanded ? 'Show Less' : 'See More'}
        </button>
        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`} 
          onClick={toggleLike}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default Card;