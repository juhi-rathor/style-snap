// React
import React from "react";

import FeatureCard from "../components/FeatureCard";
import { featureCards } from "../data/featureData";

// Blog Component
const Blog = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row background-2'>
          <div className='col d-flex justify-content-start align-items-center flex-column custom-flex-2 gap-1'>
            <h1 className="heading-2">Blog List</h1>
            <h2 className="heading-3">Why Shop With Us</h2>
            <div className="cards-container">
              {featureCards.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog



      
    