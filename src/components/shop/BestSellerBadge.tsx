import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './BestSellerBadge.css';

interface BestSellerBadgeProps {
  show: boolean;
  position?: 'top-left' | 'top-right';
  size?: 'small' | 'medium' | 'large';
}

const BestSellerBadge: React.FC<BestSellerBadgeProps> = ({ 
  show, 
  position = 'top-right',
  size = 'medium'
}) => {
  if (!show) return null;

  const sizeClasses = {
    small: 'best-seller-badge-small',
    medium: 'best-seller-badge-medium', 
    large: 'best-seller-badge-large'
  };

  const positionClasses = {
    'top-left': 'best-seller-top-left',
    'top-right': 'best-seller-top-right'
  };

  return (
    <div className={`best-seller-badge ${sizeClasses[size]} ${positionClasses[position]}`}>
      <div className="best-seller-content">
        <div className="stars-container">
          <FontAwesomeIcon icon={faStar} className="star star-1" />
          <FontAwesomeIcon icon={faStar} className="star star-2" />
          <FontAwesomeIcon icon={faStar} className="star star-3" />
          <FontAwesomeIcon icon={faStar} className="star star-4" />
          <FontAwesomeIcon icon={faStar} className="star star-5" />
        </div>
        <div className="best-seller-text">
          <span className="best-text">BEST</span>
          <span className="seller-text">SELLER</span>
        </div>
      </div>
    </div>
  );
};

export default BestSellerBadge;
