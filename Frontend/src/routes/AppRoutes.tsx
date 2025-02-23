import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import LoginPage from '../pages/Login/login';
import HowItWorks from '../pages/HowItWorks/HowItWorks';
import Help from '../pages/Help/Help';
import BecomeAHost from '../pages/BecomeAHost/becomeAHost';
import About from '../pages/AboutUs/About';
import Career from '../pages/Career/Career';
import Blogs from '../pages/Blogs/Blogs';
import Rent from '../pages/Rent/Rent';
import BusinessModel from '../pages/BusinessModel/BusinessModel';
import CommunityGuidelines from '../pages/CommunityGuidelines/CommunityGuidelines';
import InsurancePage from '../pages/InsurancePage/InsurancePage';
import AccessibilityPage from '../pages/AccessibilityPage/AccessibilityPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import OTP from '../components/Login/OTP';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/howitworks' element={<HowItWorks/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/becomeahost' element={<BecomeAHost/>}/>
      <Route path="/otp" element={<OTP />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/rent' element={<Rent/>}/>
      <Route path='/businessmodel' element={<BusinessModel/>}/>
      <Route path='/communityguidelines' element={<CommunityGuidelines/>}/>
      <Route path='/insurancepage' element={<InsurancePage/>}/>
      <Route path='/accessibilitypage' element={<AccessibilityPage/>}/>
      <Route path='/profilepage' element={<ProfilePage/>}/>
    </Routes>
  );
};

export default AppRoutes;
