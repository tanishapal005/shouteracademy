// import './App.css'
// import Approuter from './routes/AppRoutes'
// import { BrowserRouter } from "react-router-dom";

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Approuter/>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;





import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  // Sidebar ka state manage karenge
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sidebar toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <AppRoutes toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </BrowserRouter>
  );
}

export default App;








































