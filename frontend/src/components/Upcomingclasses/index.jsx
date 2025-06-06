import React from "react";
import img1 from "../../assets/images/Course/regimg-1.webp";
import img2 from "../../assets/images/Course/regimg-2.webp";
import img3 from "../../assets/images/Course/regimg-3.webp";

const masterclasses = [
  {
    id: 1,
    image: img1,
    title: "Master SQL Basics in 90 mins",
    date: "8th Mar, Sat",
    time: "08:00 PM - 09:30 PM",
  },
  {
    id: 2,
    image: img2,
    title: "Master SQL Basics in 90 mins",
    date: "8th Mar, Sat",
    time: "08:00 PM - 09:30 PM",
  },
  {
    id: 3,
    image: img3,
    title: "Master SQL Basics in 90 mins",
    date: "8th Mar, Sat",
    time: "08:00 PM - 09:30 PM",
  },
];

const UpcomingMasterclasses = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-black text-center sm:text-left">Upcoming Masterclasses</h2>
        <a href="#" className="text-red text-sm font-semibold hover:underline mt-2 sm:mt-0">
          See all master classes &gt;
        </a>
      </div>

      {/* Masterclass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {masterclasses.map((item) => (
          <div key={item.id} className="bg-white border border-gray rounded-lg p-4 shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-bold text-black mt-3">{item.title}</h3>
            <p className="text-gray text-sm">{item.date}</p>
            <p className="text-gray text-sm mb-4">{item.time}</p>
            <button className="w-full bg-red hover:bg-buttonred text-white font-semibold py-2 rounded-md shadow-md">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMasterclasses;
