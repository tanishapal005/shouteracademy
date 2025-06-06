import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import missionImage from "../../assets/images/Aboutpage/mission.jpg";
import visionImage from "../../assets/images/Aboutpage/vision.jpg";
import commitmentImage from "../../assets/images/Aboutpage/commitment.jpg";

const CoreValues = () => {
  const [cards, setCards] = useState([]);

  const imageMap = {
    mission: missionImage,
    vision: visionImage,
    commitment: commitmentImage,
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about");
        const data = await response.json();
        setCards(data.cards || []);
      } catch (error) {
        console.error("Error fetching core values:", error);
      }
    };

    fetchCards();
  }, []);

  if (cards.length === 0) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <section className="bg-gray-2 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer"
          >
            <img
              src={imageMap[card.image] || missionImage}
              alt={card.title}
              className="w-70 h-35 mx-auto object-cover"
            />
            <h3 className="text-xl font-bold text-purple mt-4">{card.title}</h3>
            <p className="text-gray text-sm mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
