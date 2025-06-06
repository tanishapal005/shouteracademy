const Paths = {
  DASHBOARD: "/",
  USERS: "/users",
  // STAFF: "/users/staff",
  STUDENTS: "/users/students",
  LOGINPAGE: "/login",
  FORGOTPAGE: "/forgotusername",
  NEW_USER: "/users/new",
  COURSES: "/courses",
  COURSE_LIST: "/courses",
  ADD_COURSE: "/courses/add",


  CATEGORY_LIST: "/categories",
  ADD_CATEGORY: "/categories/add",


  ADMIN: "/users/admin",
  SUPERADMIN: "/users/Superadmin",
  // ✅ Endrollemnts Paths
  ENROLLMENTS: "/enrollments/list",

  // ✅ Added Staff Roles

  MANAGERS: "/users/staff/managers",
  INSTRUCTORS: "/instructors",


  // ✅ Added Certificate Paths
  VERIFY_CERTIFICATE: "/certificates/verify",
  GENERATE_CERTIFICATE: "/certificates/generate",
  // DOWNLOAD_CERTIFICATE: "/certificates/download",

  // payment
  PAYMENT_HISTORY: "/payments/history",
  PENDING_PAYMENTS: "/payments/pending",
  REFUND_REQUESTS: "/payments/refunds",
  PAYMENT_METHODS: "/payments/methods",
  INVOICE_DOWNLOAD: "/payments/invoice",

  // VIEW_PAGE: "/users/staff/admin/edit/:id",
  // EDIT_PAGE: "/view/:type/:id",
  VIEW_PAGE: "/users/staff/:type/view/:id",
  EDIT_PAGE: "/users/staff/:type/edit/:id",
  // EDIT_INSTRUCTOR: "/users/instructors/edit/:id",

  // EDIT_STUDENT: "/users/students/edit/:id",


  // VIEW_INSTRUCTOR: "/users/instructors/view/:id",
  VIEW_ADMIN: "/admin/view/:id",
  EDIT_ADMIN: "/admin/edit/:id",

  MANAGER_VIEW: "/manager/view/:id",
  EDIT_MANAGER: "/manager/edit/:id",

  VIEW_STUDENT: "/students/:id",   // ✅ Add this line
  EDIT_STUDENT: "/students/edit/:id",


  ADDNEWUSER: "/addnewuser",
  ADDROLE: "/addrole",
  // ✅ Instructor Pages

  VIEW_INSTRUCTOR: "/users/instructors/view/:id",
  EDIT_INSTRUCTOR: "/users/instructors/edit/:id",

  ROLESANDPERMISSION: "/rolesandpermission",
  VIEWROLESANDPERMISSION: "/viewrolesandpermission",
  EDITROLESANDPERMISSION: "/editrolesandpermission",
  VIEWCOURSES: "/viewcourses",
  EDITCOURSE: "/editcourse",
  LIVE_SESSION: '/live-sessions',

  HOMEPAGE_SETTINGS: "/settings/homepage",
  ABOUT_US: '/about-us',
  TERMS_AND_CONDITIONS: '/terms-and-conditions',
  CONTACT_US: "/contact-us",
  PRIVACY_POLICY: "/privacy-policy",
  Meet_Your_mentor: "/meetyourmentor",
  Testimonial: "/testimonial",
};

export default Paths;


