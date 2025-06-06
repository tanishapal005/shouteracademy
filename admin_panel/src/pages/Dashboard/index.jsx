import React from 'react';
import UserAnalytics from '../../components/UserAnalytics';
import CoursesOverview from '../../components/CoursesOverview';
import RevenueTasks from '../../components/RevenueTasks';
import UserActivityChart from '../../components/userActivityData';
import UserRegistrationChart from '../../components/userRegistrationData';
import CourseEnrollmentChart from '../../components/CourseEnrollmentChart';
import FinanceSection from '../../components/FinanceSection';
import RecentSignups from '../../components/RecentSignups';
import RecentEnrolled from '../../components/RecentEnrolled';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';


function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen w-full overflow-x-hidden">
     
     <Sidebar/>
     <Header/>
      {/* ✅ Main Dashboard Content */}
      <div className="flex flex-col lg:ml-[17.5rem] ml-0 mt-20 px-6 pb-10">
        <UserAnalytics />
        <CoursesOverview />
        <RevenueTasks />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <UserActivityChart />
          <UserRegistrationChart />
          <CourseEnrollmentChart />
        </div>

        <FinanceSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecentSignups />
          <RecentEnrolled />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
