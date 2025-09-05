import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Magazines from './pages/Magazines';
import Articles from './pages/Articles';
import Digests from './pages/Digests';
import Download from './pages/Download';
import ContentDetail from './pages/ContentDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Payment from './pages/Payment';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DeleteAccount from './pages/DeleteAccount';
import DeleteData from './pages/DeleteData';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/magazines" element={<Magazines />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/digests" element={<Digests />} />
              <Route path="/content/:id" element={<ContentDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/download" element={<Download />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/delete-account" element={<DeleteAccount />} />
              <Route path="/delete-data" element={<DeleteData />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
