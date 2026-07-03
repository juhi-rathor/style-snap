// React
import React from "react";

// Importing NewArrival Component
import Newarrival from "./Newarrival";
import FeatureCard from "../components/FeatureCard";
import { featureCards } from "../data/featureData";

// About Component
const About = () => {
  return (
    <>
      <div className='container-fluid p-0'>
        <div className='row background-2'>
          <div className='col d-flex justify-content-start align-items-center flex-column custom-flex-2 gap-2 px-5'>
            <h1 className="heading-2">About Us</h1>
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
        <Newarrival />
      </div>
    </>
  )
}

export default About
