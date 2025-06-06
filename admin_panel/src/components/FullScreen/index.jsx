import React, { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Toggle FullScreen Mode
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <button onClick={toggleFullScreen} className="focus:outline-none">
      <BsArrowsFullscreen className="size-6 cursor-pointer hover:scale-110 transform duration-100 text-black" />
    </button>
  );
};

export default FullScreen;
