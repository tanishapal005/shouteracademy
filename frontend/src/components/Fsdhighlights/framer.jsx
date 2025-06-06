import React from "react";
import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const FramerHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">Framer Development Course Highlights</h2>
        <p className="text-gray text-sm">
          Explore what this online Framer development course has to offer.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            No-Code Web Design
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">No-Code Web Design</h1>
            <p className="text-gray text-sm">
              Learn how to design stunning websites without coding using Framer's powerful drag-and-drop editor.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Interactive Prototypes
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Interactive Prototypes</h1>
            <p className="text-gray text-sm">
              Build high-fidelity, interactive prototypes to visualize user flows and enhance user experience.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Framer Animations
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Framer Animations</h1>
            <p className="text-gray text-sm">
              Master smooth and dynamic animations with Framer Motion to create engaging UI interactions.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Deploy with Framer
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Deploy with Framer</h1>
            <p className="text-gray text-sm">
              Learn how to publish and optimize websites directly from Framer with no additional hosting setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramerHighlights;
