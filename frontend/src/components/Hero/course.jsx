import React, { useState, useEffect } from "react";
import image from "../../assets/images/Hero/courseimg.webp";

const FSDigitalMarketer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-11T20:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Section */}
      <div className="w-full max-w-4xl text-center lg:text-left">
        <h2 className="text-3xl font-bold text-black">Masterclass</h2>
        <p className="text-gray mt-2 text-lg leading-relaxed">
          Meta Ads Blueprint High-ROI Campaigns Without Wasting Money
        </p>
        <div className="border p-3 mt-4 inline-flex flex-wrap items-center rounded-lg shadow-md bg-white">
          <span className="text-lg font-semibold text-black">
            11th Mar, Tue
          </span>
          <span className="mx-4 text-gray">|</span>
          <span className="text-lg font-semibold text-black">
            08:00 PM - 09:30 PM
          </span>
        </div>
        <div className="flex justify-center lg:justify-start items-center mt-6 text-xl sm:text-2xl font-bold text-black space-x-2">
          <span>{timeLeft.days}</span>
          <span className="text-gray">Days</span>:
          <span>{timeLeft.hours}</span>
          <span className="text-gray">Hours</span>:
          <span>{timeLeft.minutes}</span>
          <span className="text-gray">Minutes</span>:
          <span>{timeLeft.seconds}</span>
          <span className="text-gray">Seconds</span>
        </div>
        <p className="mt-4 text-gray text-base font-medium">
          514 already registered |{" "}
          <span className="text-red">Certificate Included</span>
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[566px] h-auto  rounded-xl overflow-hidden">
        <img
          src={image}
          alt="Full bg-cover Stack Digital Marketer"
          className="w-full h-full rounded-xl object-cover mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default FSDigitalMarketer;
