import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
            Terms of Service for EchoReads
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
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none transition-colors duration-300 ${
          theme === 'dark' ? 'prose-invert' : ''
        }`}>
          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              1. Acceptance of Terms
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              By downloading, installing, or using the EchoReads mobile application ("App") and related services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App or Services.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              EchoReads is operated by IJT ("Company," "we," "us," or "our"). These Terms constitute a legally binding agreement between you and the Company.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2. Description of Services
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              EchoReads is a digital reading platform that provides access to:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Magazines:</strong> Professional publications and periodicals</li>
              <li><strong>Articles:</strong> Informative articles and blog posts</li>
              <li><strong>Digests:</strong> Educational content and stories, including kid-friendly materials</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              The App offers both free and premium subscription-based access to content, reading progress tracking, offline reading capabilities, and personalized recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3. User Accounts and Registration
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3.1 Account Creation
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>You must create an account to access certain features of the App</li>
              <li>You must provide accurate, current, and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must be at least 13 years old to create an account (or the minimum age required in your jurisdiction)</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3.2 Account Security
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3.3 Account Deletion
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>You may delete your account at any time by visiting: https://echoreads.online/delete-account</li>
              <li>Account deletion will permanently remove your data and cannot be undone</li>
              <li>Some data may be retained as required by law or for legitimate business purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4. Subscription Plans and Billing
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4.1 Available Plans
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Free Plan:</strong> Limited access to content with advertisements</li>
                              <li><strong>Echo Plus Plan:</strong> Premium access to 8000+ magazines and enhanced features</li>
                <li><strong>Echo Pro Plan:</strong> Ultimate reading experience with all premium features</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4.2 Subscription Terms
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
              <li>Subscription fees are charged monthly in advance</li>
              <li>Prices are subject to change with 30 days' notice</li>
              <li>All subscription fees are non-refundable except as required by law</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4.3 Billing and Payment
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Payment is processed through Google Play Store billing system</li>
              <li>You authorize us to charge your payment method for subscription fees</li>
              <li>Failed payments may result in service suspension</li>
              <li>Subscription cancellations take effect at the end of the current billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5. Content and Intellectual Property
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.1 Content Ownership
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>All content in the App is owned by the Company or licensed from third parties</li>
              <li>Content is protected by copyright, trademark, and other intellectual property laws</li>
              <li>You may not copy, distribute, or create derivative works without permission</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.2 Content Usage
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Content is provided for personal, non-commercial use only</li>
              <li>You may not share, sell, or redistribute content</li>
              <li>Offline downloads are for personal use and may not be shared</li>
              <li>Content access is subject to your subscription plan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              6. Acceptable Use Policy
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              6.1 Prohibited Activities
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You agree not to:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the App's functionality or other users' experience</li>
              <li>Share your account credentials with others</li>
              <li>Use automated tools to access the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7. Privacy and Data Protection
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7.1 Data Collection
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We collect and process the following types of data:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Account Information:</strong> Name, email address, profile data</li>
              <li><strong>Usage Data:</strong> Reading progress, preferences, app interactions</li>
              <li><strong>Device Information:</strong> Device IDs, crash logs, performance data</li>
              <li><strong>Content Data:</strong> Reading history, search queries, downloads</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7.2 Data Usage
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Your data is used for:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Providing and improving our services</li>
              <li>Personalizing your reading experience</li>
              <li>Processing payments and subscriptions</li>
              <li>Customer support and communication</li>
              <li>Analytics and service optimization</li>
              <li>Fraud prevention and security</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7.5 Data Retention
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Account data is retained while your account is active</li>
              <li>Reading history and preferences are stored for service functionality</li>
              <li>Some data may be retained for legal or business purposes</li>
              <li>You may request partial data deletion at: https://echoreads.online/delete-data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8. Family Sharing and Parental Controls
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.1 Family Sharing
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
                              <li>Echo Plus and Echo Pro plans include family sharing features</li>
              <li>Family members must be added through the App's family sharing system</li>
              <li>Each family member maintains their own reading preferences and history</li>
              <li>Family sharing is subject to platform limitations and restrictions</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.2 Parental Controls
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Parents are responsible for monitoring their children's use of the App</li>
              <li>Content is curated to be appropriate for all ages</li>
              <li>Parents can set reading time limits and content restrictions</li>
              <li>We recommend parental supervision for users under 13</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9. Service Availability and Updates
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9.1 Service Availability
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>We strive to provide continuous service but cannot guarantee 100% uptime</li>
              <li>Service may be temporarily unavailable for maintenance or updates</li>
              <li>We are not responsible for service interruptions beyond our control</li>
              <li>Service availability may vary by region</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10. Termination and Suspension
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10.1 Termination by User
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>You may terminate your account at any time</li>
              <li>Termination will cancel any active subscriptions</li>
              <li>No refunds will be provided for unused subscription periods</li>
              <li>Your data will be deleted according to our data retention policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11. Disclaimers and Limitations
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11.1 Service Disclaimers
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>The App and Services are provided "as is" without warranties</li>
              <li>We do not guarantee that the App will meet your specific requirements</li>
              <li>We are not responsible for content accuracy or completeness</li>
              <li>Service quality may vary based on your device and internet connection</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11.2 Limitation of Liability
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Our liability is limited to the amount you paid for the App or Services</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not responsible for third-party content or services</li>
              <li>Some jurisdictions do not allow liability limitations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              12. Changes to Terms
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              12.1 Modifications
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>We may modify these Terms at any time</li>
              <li>Changes will be effective immediately upon posting</li>
              <li>We will notify users of significant changes</li>
              <li>Continued use of the App constitutes acceptance of modified Terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              13. Contact Information
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              13.1 Customer Support
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              For questions, concerns, or support:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Email:</strong> support@echoreads.online</li>
              <li><strong>Website:</strong> https://echoreads.online</li>
              <li><strong>In-App Support:</strong> Available through the App's help section</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              13.2 Legal Inquiries
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Email:</strong> legal@echoreads.online</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              14. Miscellaneous
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              14.1 Severability
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If any provision of these Terms is found to be unenforceable, the remaining provisions remain in effect. Invalid provisions will be modified to the minimum extent necessary.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              14.2 Entire Agreement
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              These Terms constitute the entire agreement between you and the Company. Previous agreements or understandings are superseded. Additional terms may apply to specific features or services.
            </p>
          </section>

          {/* Final Notice */}
          <div className={`p-6 rounded-lg border-2 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border-accent-gold' : 'bg-light-section-background border-accent-gold'
          }`}>
            <p className={`text-center font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              By using EchoReads, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
            </div>
          </div>
        </div>

        {/* Footer Links - Only Public Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/privacy"
              className={`font-medium transition-colors duration-200 hover:underline ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}
            >
              Privacy Policy
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

export default TermsOfService;
