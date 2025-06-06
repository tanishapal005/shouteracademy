import React from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Editrolesandpermission from "../../components/Editrolesandpermission/index"
const EditAdmin = () => {
  return (
    <div >
      <Sidebar/>
      <Header/>
 <Editrolesandpermission/>
    </div>
  );
};

export default EditAdmin;