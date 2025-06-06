import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Paths } from "../routes/paths";
import Home from "../pages/Home";
import Login from "../auth/Login";
import DigitalMpage from "../pages/DigitalMpage/index";
import Fullstackdigitalmarketer from "../pages/Fullstackdigitalmarketer";
import Webdevpage from "../pages/Webdevpage/index";
import Appdevpage from "../pages/Appdevpage/index";
import Cyberpage from "../pages/Cyberpage/index";
import Designingpage from "../pages/Designingpage/index";
import Eventpage from "../pages/Eventpage/index";
import Performancemarketer from "../pages/Performancemarketer/index";
import SEO from "../pages/SEO/index";
import Withemail from "../auth/withemail";
import Createaccount from "../auth/createaccount";
import Contactpage from "../pages/Contactpage/index";
import Privacypolicy from "../pages/Privacypolicy/index";
import Aboutpage from "../pages/Aboutpage/index";
import TermsandConditionpage from "../pages/TermsandConditionpage/index";
import Fullstackpage from "../pages/Fullstackpage/index";
import Mernstackpage from "../pages/Mernstackpage/index";
import Lampstackpage from "../pages/Lampstackpage/index";
import Wordpresspage from "../pages/Wordpresspage/index";
import Shopifypage from "../pages/Shopifypage/index";
import Framerpage from "../pages/Framerpage/index";
import Ethicalhackingpage from "../pages/Ethicalhackingpage/index";
import Fullstackgraphicdesigner from "../pages/Fullstackgraphicdesigner/index";
import Uiuxdesigner from "../pages/Uiuxdesigner/index";
import Videoeditingprogram from "../pages/Videoeditingprogram/index";
import Flutterdeveloper from "../pages/Flutterdeveloper";
import Androidprogram from "../pages/Andriodprogram/index";
import Iosprogram from "../pages/Iosprogram/index";
import Dataanalyticsprogram from "../pages/Dataanalyticsprogram/index";
import Cloudcomputing from "../pages/Cloudcomputing/index";
import Cloudpage from "../pages/Cloudpage/index";
import Datasciencepage from "../pages/Datesciencepage/index";
import CMSbasedpage from "../pages/CMSbasedpage/index";
import AboutOverview from "../components/Fsdigitalmarketeroverview/index";
import Pagenotfound from "../components/Pagenotfound/index";
import Carriers from "../components/Carriers/index";
const Approuter = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.home} element={<Home />} />
        <Route path={Paths.login} element={<Login />} />
        <Route path={Paths.fullstackdigitalmarketer} element={<Fullstackdigitalmarketer />} />
        <Route path={Paths.digitalmpage} element={<DigitalMpage />} />
        <Route path={Paths.webdevpage} element={<Webdevpage />} />
        <Route path={Paths.appdevpage} element={<Appdevpage />} />
        <Route path={Paths.cyberpage} element={<Cyberpage />} />
        <Route path={Paths.designingpage} element={<Designingpage />} />
        <Route path={Paths.performancemarketer} element={<Performancemarketer />} />
        <Route path={Paths.eventpage} element={<Eventpage />} />
        <Route path={Paths.seo} element={<SEO />} />
        <Route path={Paths.withemail} element={<Withemail />} />
        <Route path={Paths.createaccount} element={<Createaccount />} />
        <Route path={Paths.contactpage} element={<Contactpage />} />
        <Route path={Paths.privacypolicy} element={<Privacypolicy />} />
        <Route path={Paths.aboutpage} element={<Aboutpage />} />
        <Route path={Paths.termsandconditionpage} element={<TermsandConditionpage />} />
        <Route path={Paths.fullstackpage} element={<Fullstackpage />} />
        <Route path={Paths.mernstackpage} element={<Mernstackpage />} />
        <Route path={Paths.lampstackpage} element={<Lampstackpage />} />
        <Route path={Paths.wordpresspage} element={<Wordpresspage />} />
        <Route path={Paths.shopifypage} element={<Shopifypage />} />
        <Route path={Paths.framerpage} element={<Framerpage />} />
        <Route path={Paths.ethicalhackingpage} element={<Ethicalhackingpage />} />
        <Route path={Paths.fullstackgraphicdesigner} element={<Fullstackgraphicdesigner />} />
        <Route path={Paths.uiuxdesigner} element={<Uiuxdesigner />} />
        <Route path={Paths.videoeditingprogram} element={<Videoeditingprogram />} />
        <Route path={Paths.flutterdeveloper} element={<Flutterdeveloper />} />
        <Route path={Paths.androidprogram} element={<Androidprogram />} />
        <Route path={Paths.iosprogram} element={<Iosprogram />} />
        <Route path={Paths.dataanalyticsprogram} element={<Dataanalyticsprogram />} />
        <Route path={Paths.cloudcomputing} element={<Cloudcomputing />} />
        <Route path={Paths.cloudpage} element={<Cloudpage />} />
        <Route path={Paths.datasciencepage} element={<Datasciencepage />} />
        <Route path={Paths.cmsbasedpage} element={<CMSbasedpage />} />
        <Route path={Paths.aboutoverview} element={<AboutOverview />} />
        <Route path={Paths.carriers} element={<Carriers />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
};

export default Approuter;
