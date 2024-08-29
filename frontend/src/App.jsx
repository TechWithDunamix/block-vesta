import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index.jsx';
import SignupForm from './pages/signup.jsx';
import Dashboard from './pages/dashboard.jsx';
import ProfilePage from './pages/profile.jsx';
import WithdrawPage from './pages/withdrawPage';
import DepositPage from './pages/depositPage.jsx';
import History from './pages/history.jsx';
import AboutPage from './pages/about';
import ContactPage from './pages/contact.jsx';
import LoginForm from './pages/loginPage.jsx';
import SetPasswordPage from './pages/resetPassword.jsx';
import UsersPage from './admin/userPage.jsx';
import AdminDepositPage from './admin/depositpage.jsx';
import AdminWithdrawalsPage from './admin/withdrawPage.jsx';
import OtpPage from './admin/otps.jsx';
import AdminHome from './admin/adminHome.jsx';
import AdminLoginForm from './admin/login.jsx';
import AdminPlans from './admin/plans.jsx';
import NotFoundPage from './pages/notFoundPage.jsx';
import PlanPage from './pages/plansPage.jsx';
import BuyPlanPage from './pages/buyplans.jsx';
import RecPage from './pages/reciept.jsx';
import Investments from './admin/investments.jsx';
import SettingsPage from './admin/settings.jsx';
import ServicePage from './pages/services_health';
import FaqPage from './pages/faq';
import DepartmentsPage from './pages/dept';

const isAuth = localStorage.getItem("token");
const isAdmin = localStorage.getItem("admin_token");

function App() {
  const [count, setCount] = useState(0);
  const [show, setSetShow] = useState(false);

  const params = new URLSearchParams(window.location.search);
  params.get("referal") && localStorage.setItem('ref', params.get("referal"));

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  

  return (
    <BrowserRouter>
      <div id="google_translate_element" className="translate-widget"></div>
      <Routes>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/departments' element={<DepartmentsPage />} />
        <Route path='/plans' element={<PlanPage />} />
        <Route path='/buy-plan' element={isAuth ? <BuyPlanPage /> : <LoginForm />} />
        <Route path='/buy-plan/r' element={isAuth ? <RecPage /> : <LoginForm />} />
        <Route path='/forgot-password' element={<SetPasswordPage />} />
        <Route path='*' element={<NotFoundPage />} />
        
        {/* Authenticated Routes */}
        <Route path='/dashboard' element={isAuth ? <Dashboard /> : <LoginForm />} />
        <Route path='/profile' element={isAuth ? <ProfilePage /> : <LoginForm />} />
        <Route path='/withdraw' element={isAuth ? <WithdrawPage /> : <LoginForm />} />
        <Route path='/deposit' element={isAuth ? <DepositPage /> : <LoginForm />} />
        <Route path='/history' element={isAuth ? <History /> : <LoginForm />} />
        
        {/* Admin Routes */}
        <Route path='/admin-home' element={isAdmin ? <AdminHome /> : <AdminLoginForm />} />
        <Route path='/admin/users' element={isAdmin ? <UsersPage /> : <AdminLoginForm />} />
        <Route path='/admin/deposits' element={isAdmin ? <AdminDepositPage /> : <AdminLoginForm />} />
        <Route path='/admin/withdrawals' element={isAdmin ? <AdminWithdrawalsPage /> : <AdminLoginForm />} />
        <Route path='/admin/otps' element={isAdmin ? <OtpPage /> : <AdminLoginForm />} />
        <Route path='/admin' element={isAdmin ? <AdminHome /> : <AdminLoginForm />} />
        <Route path='/admin/plans' element={isAdmin ? <AdminPlans /> : <AdminLoginForm />} />
        <Route path='/admin/investments' element={isAdmin ? <Investments /> : <AdminLoginForm />} />
        <Route path='/admin/settings' element={isAdmin ? <SettingsPage /> : <AdminLoginForm />} />
        <Route path='/admin/login' element={<AdminLoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
