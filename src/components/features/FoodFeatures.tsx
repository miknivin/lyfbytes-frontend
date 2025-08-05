import React from 'react';
import './FoodFeatures.css';

const FoodFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "fas fa-leaf",
      title: "100% Organic",
      description: "All our products are made from 100% organic ingredients sourced from certified farms."
    },
    {
      id: 2,
      icon: "fas fa-shield-alt",
      title: "Quality Assured",
      description: "Every product goes through rigorous quality checks to ensure the highest standards."
    },
    {
      id: 3,
      icon: "fas fa-truck",
      title: "Fast Delivery",
      description: "Quick and safe delivery to your doorstep with our reliable shipping partners."
    },
    {
      id: 4,
      icon: "fas fa-heart",
      title: "Health First",
      description: "Nutritious and healthy options that support your wellness journey."
    }
  ];

  return (
    <div className="food-features-area default-padding bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center mb-5">
              <h4 className="sub-title text-primary text-uppercase fw-bold">Why Choose Us</h4>
              <h2 className="title text-dark fw-bold mb-3">Food Features</h2>
              <p className="text-muted fs-6 fs-md-5">Discover what makes our products special and why customers love us</p>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature) => (
            <div className="col-lg-3 col-md-6 mb-4" key={feature.id}>
              <div className="feature-item text-center h-100 p-4 border rounded shadow-sm">
                <div className="feature-icon mb-3">
                  <i className={`${feature.icon} fa-3x text-primary`}></i>
                </div>
                <h5 className="feature-title fw-bold mb-3">{feature.title}</h5>
                <p className="feature-description text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodFeatures;
