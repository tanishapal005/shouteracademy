// import './App.css'
// import { useEffect } from 'react';
// import Approuter from './routes/Approuter';







// import axiosInstance from "./axios";

// function App() {
//   useEffect(() => {
//     axiosInstance.get("/")
//       .then((res) => {
//         console.log("✅ Backend se response: ", res.data);
//       })
//       .catch((err) => {
//         console.error("❌ Backend error: ", err);
//       });
//   }, []);



  
//   return (
//     <div>
      
//       <Approuter/>
//     </div>
//   );
// }

// export default App;


import Approuter from './routes/Approuter';

import { useEffect } from 'react';
import axios from "./axios"; // correct path

function App() {
  useEffect(() => {
    axios.get("/user/dashboard")
      .then((res) => {
        console.log("✅ User Dashboard: ", res.data);
      })
      .catch((err) => {
        console.error("❌ Error: ", err);
      });
  }, []);

  return <div>
    
      <Approuter/>
  </div>;
}

export default App;
