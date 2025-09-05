import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Privacy Policy for EchoReads
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Effective Date: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className={`mt-4 p-4 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
          }`}>
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Company:</strong> IJT | <strong>App:</strong> EchoReads | <strong>Website:</strong> https://echoreads.online
            </p>
          </div>
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none transition-colors duration-300 ${
          theme === 'dark' ? 'prose-invert' : ''
        }`}>
          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              1. Introduction
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Welcome to EchoReads! This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our mobile application and related services. We are committed to protecting your privacy and ensuring transparency about our data practices.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              By using EchoReads, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2. Information We Collect
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2.1 Information You Provide to Us
            </h3>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Account Information:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Full name</li>
              <li>Email address</li>
              <li>Profile picture (optional)</li>
              <li>Password (encrypted)</li>
              <li>Account preferences and settings</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Profile Information:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Reading preferences</li>
              <li>Content categories of interest</li>
              <li>Language preferences</li>
              <li>Theme preferences (light/dark mode)</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2.2 Information We Collect Automatically
            </h3>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Device Information:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Device type and model</li>
              <li>Operating system version</li>
              <li>Unique device identifiers</li>
              <li>IP address</li>
              <li>Mobile network information</li>
              <li>Time zone and language settings</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              App Usage Information:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>App features used</li>
              <li>Content accessed and read</li>
              <li>Reading progress and bookmarks</li>
              <li>Search queries</li>
              <li>Time spent reading</li>
              <li>App crashes and performance data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3. How We Use Your Information
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3.1 Primary Uses
            </h3>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Service Provision:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Creating and managing your account</li>
              <li>Providing access to content and features</li>
              <li>Processing subscriptions and payments</li>
              <li>Delivering personalized content recommendations</li>
              <li>Enabling offline reading capabilities</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              User Experience:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Personalizing your reading experience</li>
              <li>Saving reading progress and preferences</li>
              <li>Providing relevant content suggestions</li>
              <li>Optimizing app performance and functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4. Information Sharing and Disclosure
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4.1 We Do Not Sell Your Personal Information
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4.2 Information Sharing
            </h3>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Service Providers:
            </h4>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may share your information with trusted third-party service providers who assist us in:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Hosting and maintaining our services</li>
              <li>Processing payments and subscriptions</li>
              <li>Providing customer support</li>
              <li>Analyzing app usage and performance</li>
              <li>Delivering content and recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5. Data Security and Protection
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.1 Security Measures
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Technical Security:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and authorization</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and monitoring</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.2 Data Retention
            </h3>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Account Data:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Retained while your account is active</li>
              <li>Deleted upon account deletion (with exceptions for legal requirements)</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Usage Data:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Reading progress and preferences: Retained for service functionality</li>
              <li>Analytics data: Retained for up to 2 years</li>
              <li>Log files: Retained for up to 90 days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              6. Your Rights and Choices
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              6.1 Access and Control
            </h3>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Account Information:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>View and update your profile information</li>
              <li>Change your password and security settings</li>
              <li>Update your preferences and settings</li>
              <li>Access your reading history and progress</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Data Deletion:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Delete your account completely: https://echoreads.online/delete-account</li>
              <li>Request partial data deletion: https://echoreads.online/delete-data</li>
              <li>Remove specific data categories</li>
              <li>Export your data (where technically feasible)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7. Children's Privacy
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7.1 Age Requirements
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>EchoReads is not intended for children under 13 years of age</li>
              <li>We do not knowingly collect personal information from children under 13</li>
              <li>If we become aware that we have collected such information, we will delete it promptly</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7.2 Parental Controls
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Parents can set reading time limits and content restrictions</li>
              <li>Family sharing features allow parental oversight</li>
              <li>Content is curated to be appropriate for all ages</li>
              <li>We recommend parental supervision for users under 18</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8. Third-Party Services and Links
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.1 Third-Party Services
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Our App may integrate with or link to third-party services, including:
            </p>
            
            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Google Services:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Google Play Store for app distribution</li>
              <li>Google Analytics for app analytics</li>
              <li>Google Cloud for hosting and infrastructure</li>
            </ul>

            <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Content Providers:
            </h4>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Magazine and article publishers</li>
              <li>Educational content providers</li>
              <li>Media distribution services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9. Changes to This Privacy Policy
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9.1 Policy Updates
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may update this Privacy Policy from time to time to reflect:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Changes in our data practices</li>
              <li>New features and services</li>
              <li>Legal and regulatory requirements</li>
              <li>Industry best practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10. Contact Information
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10.1 Privacy Inquiries
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              For questions about this Privacy Policy or our data practices:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Email:</strong> privacy@echoreads.online</li>
              <li><strong>Website:</strong> https://echoreads.online/privacy-policy</li>
              <li><strong>In-App Support:</strong> Available through the App's help section</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10.2 Legal Inquiries
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Email:</strong> legal@echoreads.online</li>
            </ul>
          </section>

          {/* Final Notice */}
          <div className={`p-6 rounded-lg border-2 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border-accent-gold' : 'bg-light-section-background border-accent-gold'
          }`}>
            <p className={`text-center font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              By using EchoReads, you acknowledge that you have read and understood this Privacy Policy and consent to our data practices as described herein.
            </p>
            <div className={`text-center mt-4 text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <p><strong>Company:</strong> IJT</p>
              <p><strong>App:</strong> EchoReads</p>
              <p><strong>Version:</strong> 1.0</p>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><strong>Next Review:</strong> {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>
        </div>

        {/* Footer Links - Only Public Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/terms"
              className={`font-medium transition-colors duration-200 hover:underline ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 hover:underline ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
