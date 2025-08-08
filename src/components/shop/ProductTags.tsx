import React from 'react';
import { Link } from 'react-router-dom';
import { TAG_CONFIG, generateSuggestedTags } from './productTagsConstants';
import './ProductTags.css';

interface ProductTagsProps {
  tags?: string[];
  productName?: string;
  layout?: 'horizontal' | 'grid';
  maxTags?: number;
  showIcon?: boolean;
  clickable?: boolean;
}

const ProductTags: React.FC<ProductTagsProps> = ({
  tags = [],
  productName = '',
  layout = 'horizontal',
  maxTags = 6,
  showIcon = true,
  clickable = false
}) => {
  // Always generate tags: use provided tags first, then add suggested tags to fill up to maxTags
  let displayTags = [...tags];
  
  // If we have fewer tags than maxTags, add suggested tags based on product name
  if (displayTags.length < maxTags && productName) {
    const suggestedTags = generateSuggestedTags(productName);
    const tagsToAdd = suggestedTags.filter(tag => !displayTags.includes(tag));
    displayTags = [...displayTags, ...tagsToAdd];
  }
  
  // If still no tags, provide generic food tags
  if (displayTags.length === 0) {
    displayTags = ['Premium Quality', 'Traditional Recipe', 'Kerala Style', 'Handmade'];
  }
  
  // Limit number of tags displayed
  const limitedTags = displayTags.slice(0, maxTags);

  if (!limitedTags.length) return null;

  return (
    <div className={`product-tags-container ${layout}`}>
      <div className="product-tags-list">
        {limitedTags.map((tag, index) => {
          const tagConfig = TAG_CONFIG[tag] || {
            id: tag.toLowerCase().replace(/\s+/g, '-'),
            label: tag,
            type: 'feature' as const,
            color: '#6c757d'
          };

          return clickable ? (
            <Link
              key={`${tagConfig.id}-${index}`}
              to={`/shop?tag=${encodeURIComponent(tag)}`}
              className={`product-tag tag-${tagConfig.type}`}
              style={{
                backgroundColor: tagConfig.color,
                borderColor: tagConfig.color
              }}
            >
              {showIcon && tagConfig.icon && (
                <span className="tag-icon">{tagConfig.icon}</span>
              )}
              <span className="tag-label">{tagConfig.label}</span>
            </Link>
          ) : (
            <span
              key={`${tagConfig.id}-${index}`}
              className={`product-tag tag-${tagConfig.type}`}
              style={{
                backgroundColor: tagConfig.color,
                borderColor: tagConfig.color
              }}
            >
              {showIcon && tagConfig.icon && (
                <span className="tag-icon">{tagConfig.icon}</span>
              )}
              <span className="tag-label">{tagConfig.label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTags;
