import { Routes, Route } from "react-router-dom";
import Paths from "./Paths";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import New from "../pages/New";
import ManagerViewPage from "../pages/ManagerViewPage";
import Course from "../pages/Course";
import AddCourse from "../pages/AddCourse";
import EnrollmentsList from "../pages/EnrollmentsList";
import Manager from "../pages/Manager";
import VerifyCertificate from "../pages/VerifyCertificate";
import GenerateCertificate from "../pages/GenerateCertificate";

import PaymentHistory from "../pages/PaymentHistory";
import Meetyourmentor from "../pages/Meetyourmentor";
import ViewPages from "../pages/ViewSuperAdminPage"
import EditADMIN from "../pages/EditAdmin";
import EditSuparADMIN from "../pages/EditSuperAdmin"
import ViewAdminPage from "../pages/ViewAdminPage"
import EditManagerPage from "../pages/EditManagerPage";
import StudentViewPage from "../pages/ViewStudentPage"
import EditStudent from "../pages/EditStudentPage";
import Rolesandpermission from "../pages/Rolesandpermission";
import Viewrolesandpermission from "../pages/Viewrolesandpermission";
import Editrolesandpermission from "../pages/Editrolesandpermission";
import Viewcourses from "../pages/Viewcourses";
import EditCourse from "../pages/EditCourse";
import InstructorPage from "../pages/InstructorPage";
import InstructorViewPage from "../pages/InstructorViewPage";
import EditInstructorPage from "../pages/EditInstructor";
import Admin from "../pages/Admin";
import SuperAdmin from "../pages/SuperAdmin"
import LoginPage from "../auth/Loginpage"; 
import Forgotpage from "../auth/forgetpage";
import CategoryPage from "../pages/CategoryPage";
import Livesession from "../pages/LiveSession";
import Addrole from "../pages/Addrole";
import Addnewuser from "../pages/Addnewuser"
import HomePage from "../pages/HomePage";
import About from "../pages/AboutUs"
import TermsANDconditions from "../pages/TermsAndConditions";
import ContactUs from "../pages/ContactUs";
import Privacypolicy from "../pages/PrivacyPolicy";
import Testimonial from "../pages/Testimonial";



const AppRoutes = () => {
  return (
    <div >
      <div>
        <Routes>
          {/* Dashboard */}
          <Route path={Paths.DASHBOARD} element={<Dashboard />} />
          <Route path={Paths.LOGINPAGE} element={<LoginPage />} />
          <Route path={Paths.FORGOTPAGE} element={<Forgotpage />} />

          {/* Users */}
          <Route path={Paths.STUDENTS} element={<Students />} />
          <Route path={Paths.INSTRUCTORS} element={<InstructorPage />} />
          <Route path={Paths.NEW_USER} element={<New />} />
          <Route path={Paths.SUPERADMIN} element={<SuperAdmin />} />
          <Route path={Paths.ADMIN} element={<Admin />} />

          {/* Courses */}
          <Route path={Paths.COURSES} element={<Course />} />
          <Route path={Paths.ADD_COURSE} element={<AddCourse />} />
          <Route path={Paths.CATEGORY_LIST} element={<CategoryPage />} />

          {/* Enrollments */}
          <Route path={Paths.ENROLLMENTS} element={<EnrollmentsList />} />

          {/* payments */}
          <Route path={Paths.PAYMENT_HISTORY} element={<PaymentHistory />} />
          {/* <Route path={Paths.REFUND_REQUESTS} element={<RefundRequests />} /> */}

          {/* Admin, Manager, Assistant */}
          <Route path={Paths.MANAGERS} element={<Manager />} />

          {/* Certificates */}
          <Route path={Paths.VERIFY_CERTIFICATE} element={<VerifyCertificate />} />
          <Route path={Paths.GENERATE_CERTIFICATE} element={<GenerateCertificate />} />
          <Route path={Paths.VIEW_PAGE} element={<ViewPages />} />
          <Route path={Paths.EDIT_PAGE} element={<EditSuparADMIN />} />
          <Route path={Paths.VIEW_ADMIN} element={<ViewAdminPage />} />
          <Route path={Paths.EDIT_ADMIN} element={<EditADMIN />} />
          <Route path={Paths.MANAGER_VIEW} element={<ManagerViewPage />} />
          <Route path={Paths.EDIT_MANAGER} element={<EditManagerPage />} />
          <Route path={Paths.VIEW_STUDENT} element={<StudentViewPage />} />
          <Route path={Paths.EDIT_STUDENT} element={<EditStudent />} />

          {/* Rolls and Permissions */}
          <Route path={Paths.ROLESANDPERMISSION} element={<Rolesandpermission />} />
          <Route path={Paths.VIEWROLESANDPERMISSION} element={<Viewrolesandpermission />} />
          <Route path={Paths.EDITROLESANDPERMISSION} element={<Editrolesandpermission />} />

          {/* Course Details */}
          <Route path={Paths.VIEWCOURSES} element={<Viewcourses />} />
          <Route path={Paths.EDITCOURSE} element={<EditCourse />} /> 
          <Route path={Paths.VIEW_INSTRUCTOR} element={<InstructorViewPage />} />
          <Route path={Paths.EDIT_INSTRUCTOR} element={<EditInstructorPage />} />
          <Route path={Paths.LIVE_SESSION} element={<Livesession />} />
          <Route path={Paths.ADDROLE} element={<Addrole />} />
          <Route path={Paths.ADDNEWUSER} element={<Addnewuser />} />
          <Route path={Paths.HOMEPAGE_SETTINGS} element={<HomePage />} />
          <Route path={Paths.ABOUT_US} element={<About />} />
          <Route path={Paths.TERMS_AND_CONDITIONS} element={<TermsANDconditions/>}/>
          <Route path={Paths.CONTACT_US} element={<ContactUs/>} />
          <Route path={Paths.PRIVACY_POLICY} element={<Privacypolicy/>}/>
          <Route path={Paths.Meet_Your_mentor} element={<Meetyourmentor/>}/>
                    <Route path={Paths.Testimonial} element={<Testimonial/>}/>

        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;




