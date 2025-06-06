import React from "react";
import image from "../../assets/images/Course/courselearningimg.webp";

const WhatYouWillLearn = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-6 shadow-lg w-full max-w-8xl border border-gray relative overflow-hidden">
      <div className="bg-red absolute bottom-0 left-0 h-2 w-full"></div>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
        <img src={image} alt="Learning Illustration" className="w-80 h-auto rounded-lg" />
      </div>
      {/* Content Section */}
      <div className="w-full lg:w-1/2 p-6 text-center lg:text-left">
        <h2 className="text-2xl font-bold text-black">What you’ll Learn?</h2>
        <p className="text-gray mt-2 text-sm leading-relaxed">
          In today’s competitive digital landscape, running ads that stand out is crucial. Brands like
          Airbnb and Shopify have mastered Meta Ads to drive high ROI campaigns that resonate with
          their target audience. This masterclass will show you how to apply these winning techniques,
          like precise targeting, compelling ad creatives, and budget optimization to ensure your ads
          capture attention, engage users, and deliver results without overspending.
        </p>
        <ul className="mt-4 space-y-2">
          {["Meta Ads Algorithm", "Audience Targeting & Segmentation", "Ad Creatives", "A/B Testing", "Analyzing Ad Performance", "Building Customer Loyalty", "Interactive QnA"].map((item, index) => (
            <li key={index} className="flex items-center justify-center lg:justify-start text-black text-sm font-medium">
              <span className="w-2 h-2 bg-red rounded-full inline-block mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
