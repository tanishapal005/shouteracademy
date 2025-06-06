// import React from "react";
// import CountUp from "react-countup";

// const ImpactNumbers = () => {
//   return (
//     <div className="w-full flex justify-center items-center py-10 px-4">
//       <div className="w-full max-w-6xl bg-red text-white text-center p-8 rounded-3xl shadow-lg">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold">Our Impact Numbers</h2>
//         <p className="text-sm md:text-base mt-1">
//           Rising steadily, reflecting the growing trust and confidence of our learners
//         </p>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//           {[
//             { value: 3000, label: "Learners On YouTube", suffix: "+" },
//             { value: 15000, label: "Aspirants Trained", suffix: "+" },
//             { value: 20, label: "Training Domains", suffix: "" },
//             { value: 4.8, label: "Average Learner Rating", suffix: "/5" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center px-4"
//             >
//               <h3 className="text-xl md:text-2xl font-bold">
//                 <CountUp 
//                   start={0} 
//                   end={item.value} 
//                   duration={2.5} 
//                   separator="," 
//                   suffix={item.suffix} 
//                 />
//               </h3>
//               <p className="text-sm">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImpactNumbers;

























import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const ImpactNumbers = () => {
  const [impact, setImpact] = useState(null);

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/about");
        const data = await res.json();
        setImpact(data.impact);
      } catch (error) {
        console.error("Failed to load impact numbers:", error);
      }
    };

    fetchImpact();
  }, []);

  if (!impact) {
    return <div className="text-center p-10 text-gray-500">Loading...</div>;
  }

  const impactItems = [
    { label: "Learners On YouTube", key: "youtube", suffix: "+" },
    { label: "Aspirants Trained", key: "students", suffix: "+" },
    { label: "Training Domains", key: "trainings", suffix: "" },
    { label: "Average Learner Rating", key: "rating", suffix: "/5" },
  ];

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-6xl bg-red text-white text-center p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold">Our Impact Numbers</h2>
        <p className="text-sm md:text-base mt-1">
          Rising steadily, reflecting the growing trust and confidence of our learners
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {impactItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4">
              <h3 className="text-xl md:text-2xl font-bold">
                <CountUp
                  start={0}
                  end={parseFloat(impact[item.key]) || 0}
                  duration={2.5}
                  separator=","
                  suffix={item.suffix}
                />
              </h3>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactNumbers;