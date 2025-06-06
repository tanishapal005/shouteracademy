import React from "react";

const MapSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center">
        Find Us on the Map
      </h2>
      <p className="text-gray text-center mt-2">
        Locate our career school with ease using Google Maps below.
      </p>

      {/* Map Container */}
      <div className="w-full max-w-6xl mt-6 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3000.0858848282815!2d74.63578800000002!3d25.346604000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c3ed3cbb5fd3%3A0xd2c49f4a8dd97175!2s7%20Shouters%20Media!5e1!3m2!1sen!2sus!4v1741768754634!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
