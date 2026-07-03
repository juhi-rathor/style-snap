import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card d-flex justify-content-center align-items-center gap-2 py-5 px-3">
      <box-icon
        type="solid"
        name={icon}
        className="w-25 h-50"
      ></box-icon>
      <div className="card-body d-flex flex-column align-items-center justify-content-center gap-3">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
