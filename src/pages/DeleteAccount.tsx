import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const DeleteAccount: React.FC = () => {
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
            Delete EchoReads Account
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Data Deletion Request
          </p>
        </div>

        {/* Warning Alert */}
        <div className={`mb-8 p-6 rounded-lg border-l-4 border-red-500 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-red-900 bg-opacity-20' : 'bg-red-50'
        }`}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className={`text-lg font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-red-400' : 'text-red-800'
              }`}>
                Important: Account Deletion is Permanent
              </h3>
              <p className={`mt-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-red-300' : 'text-red-700'
              }`}>
                Once you delete your account, this action cannot be undone. All your data, reading progress, and preferences will be permanently removed.
              </p>
            </div>
          </div>
        </div>

        {/* App Identification */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            EchoReads - Reading App Account Deletion
          </h2>
          <p className={`mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            This page provides instructions for deleting your EchoReads account and all associated data. This process is designed to comply with data protection regulations and provide you with full control over your personal information.
          </p>
        </section>

        {/* Deletion Steps */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            How to Delete Your Account
          </h2>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Method 1: Through the App
              </h3>
              <ol className={`list-decimal list-inside space-y-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li><strong>Log into your EchoReads account</strong> on your mobile device</li>
                <li><strong>Go to Profile → Settings → Delete Account</strong></li>
                <li><strong>Confirm deletion</strong> by entering your password</li>
                <li><strong>Click 'Permanently Delete Account'</strong> to complete the process</li>
              </ol>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Method 2: Email Request
              </h3>
              <p className={`mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                If you cannot access the app or prefer to submit a deletion request via email:
              </p>
              <div className={`p-4 rounded-lg transition-colors duration-300 ${
                theme === 'dark' ? 'bg-primary-background' : 'bg-white'
              }`}>
                <p className={`mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  <strong>Email:</strong> support@echoreads.online
                </p>
                <p className={`mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  <strong>Subject:</strong> Account Deletion Request - [Your Email]
                </p>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  <strong>Include:</strong> Your registered email address
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Deletion Details */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            What Data Will Be Deleted
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Data That Will Be Deleted
              </h3>
              <ul className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li>User account information (email, password)</li>
                <li>Reading progress and history</li>
                <li>Personal preferences and settings</li>
                <li>Reading session data</li>
                <li>Profile information</li>
                <li>Content preferences and recommendations</li>
                <li>Search history and queries</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Data Retention Period
              </h3>
              <ul className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li><strong>Account deletion:</strong> Processed within 30 days</li>
                <li><strong>Legal compliance:</strong> Some data may be retained for up to 90 days</li>
                <li><strong>Permanent removal:</strong> All personal data removed after 90 days</li>
                <li><strong>No recovery:</strong> Deleted data cannot be restored</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Confirmation Process */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Confirmation Process
          </h2>
          <div className={`p-6 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
          }`}>
            <ul className={`list-disc list-inside space-y-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Email confirmation:</strong> You will receive an email confirming your deletion request</li>
              <li><strong>Processing notification:</strong> We'll notify you when the deletion process begins</li>
              <li><strong>Completion notification:</strong> You'll receive a final email within 30 days confirming account deletion</li>
              <li><strong>Data verification:</strong> You can contact us to verify that your data has been removed</li>
            </ul>
          </div>
        </section>

        {/* Alternative Options */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Alternative Options
          </h2>
          <div className={`p-6 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
          }`}>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Before deleting your account, consider these alternatives:
            </p>
            <ul className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><Link to="/delete-data" className="text-accent-gold hover:underline">Delete specific data</Link> instead of your entire account</li>
              <li>Cancel your subscription to stop billing while keeping your account</li>
              <li>Contact support for account suspension instead of deletion</li>
              <li>Export your reading data before deletion</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Need Help?
          </h2>
          <div className={`p-6 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
          }`}>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you have questions about account deletion or need assistance:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Support Email:
                </p>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  support@echoreads.online
                </p>
              </div>
              <div>
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Response Time:
                </p>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </section>

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

export default DeleteAccount;
