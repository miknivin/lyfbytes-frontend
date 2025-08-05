import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesGrid.css';

interface Category {
  id: string;
  name: string;
  displayName: string;
  image: string;
  color: string;
  description: string;
  productCount: number;
}

const CategoriesGrid: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'banana',
      name: 'Banana',
      displayName: 'Banana Chips',
      image: '/assets/img/category/img1.jpg',
      color: '#FFD93D',
      description: 'Crispy and delicious banana chips',
      productCount: 2
    },
    {
      id: 'murukku',
      name: 'Murukku',
      displayName: 'Murukku',
      image: '/assets/img/category/img8.jpg',
      color: '#FF6B9D',
      description: 'Traditional South Indian spiral snacks',
      productCount: 3
    },
    {
      id: 'popcorn',
      name: 'Popcorn',
      displayName: 'Popcorn',
      image: '/assets/img/category/img3.jpg',
      color: '#4ECDC4',
      description: 'Light and fluffy popped corn',
      productCount: 2
    },
    {
      id: 'tapioca',
      name: 'Tapioca',
      displayName: 'Tapioca Chips',
      image: '/assets/img/category/img4.jpg',
      color: '#45B7D1',
      description: 'Crispy tapioca-based snacks',
      productCount: 1
    },
    {
      id: 'chana',
      name: 'Chana',
      displayName: 'Chana Snacks',
      image: '/assets/img/category/img6.jpg',
      color: '#96CEB4',
      description: 'Roasted and spiced chickpea snacks',
      productCount: 12
    },
    {
      id: 'potato',
      name: 'Potato',
      displayName: 'Potato Chips',
      image: '/assets/img/category/img5.jpg',
      color: '#FFEAA7',
      description: 'Classic crispy potato chips',
      productCount: 25
    },
    {
      id: 'peanut',
      name: 'Peanut',
      displayName: 'Peanut Snacks',
      image: '/assets/img/category/img9.jpg',
      color: '#DDA0DD',
      description: 'Crunchy roasted peanut varieties',
      productCount: 16
    },
    {
      id: 'main',
      name: 'Main',
      displayName: 'Main Course',
      image: '/assets/img/category/img7.jpg',
      color: '#FF8A80',
      description: 'Hearty main course snacks',
      productCount: 30
    }
  ];

  return (
    <div className="categories-section default-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Product Categories</h4>
              <h2 className="title">Explore Our Categories</h2>
              <p>Discover our wide range of delicious and authentic snack categories</p>
            </div>
          </div>
        </div>
        
        <div className="row categories-grid">
          {categories.map((category, index) => (
            <div key={category.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Link 
                to={`/shop?category=${category.name}`}
                className="category-card-link"
              >
                <div className="category-card">
                  <div className="category-image-wrapper">
                    <img 
                      src={category.image} 
                      alt={category.displayName}
                      className="category-image"
                    />
                  </div>
                  
                  <div className="category-info">
                    <h3 className="category-title">{category.displayName}</h3>
                    <p className="category-description">{category.description}</p>
                    
                 
                    
                    <div className="explore-button-wrapper">
                      <button 
                        className="explore-button"
                        style={{ 
                          borderColor: category.color,
                          color: category.color 
                        }}
                      >
                        <i className="fas fa-arrow-right"></i>
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link to="/shop" className="btn btn-theme btn-lg">
              <i className="fas fa-th-large me-2"></i>
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
