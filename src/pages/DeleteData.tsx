import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const DeleteData: React.FC = () => {
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
            EchoReads - Data Deletion & Privacy Control
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Control your data and privacy settings
          </p>
        </div>

        {/* App Identification */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            EchoReads Reading App - Data Deletion Options
          </h2>
          <p className={`mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            This page provides you with comprehensive options to control and delete your data within the EchoReads app. You can delete specific types of data or all your data at once.
          </p>
        </section>

        {/* Data Deletion Options */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Data Deletion Options
          </h2>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Option A: Delete Specific Reading History
              </h3>
              <ol className={`list-decimal list-inside space-y-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li><strong>Log into your EchoReads account</strong></li>
                <li><strong>Go to Library → Reading History</strong></li>
                <li><strong>Select specific books/articles</strong> to remove</li>
                <li><strong>Click 'Delete Selected'</strong> to remove from history</li>
              </ol>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Option B: Clear Reading Progress
              </h3>
              <ol className={`list-decimal list-inside space-y-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li><strong>Go to Library → Reading Progress</strong></li>
                <li><strong>Select content</strong> to reset progress</li>
                <li><strong>Click 'Reset Progress'</strong> to clear completion data</li>
              </ol>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Option C: Clear Search History
              </h3>
              <ol className={`list-decimal list-inside space-y-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li><strong>Go to Search tab</strong></li>
                <li><strong>Click 'Clear Search History'</strong></li>
                <li><strong>Confirm</strong> to remove all search queries</li>
              </ol>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Option D: Reset Recommendations
              </h3>
              <ol className={`list-decimal list-inside space-y-3 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li><strong>Go to Profile → Settings → Privacy</strong></li>
                <li><strong>Click 'Reset Content Preferences'</strong></li>
                <li><strong>Confirm</strong> to clear personalized suggestions</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Data Deletion Details */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Data Deletion Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Data That Can Be Deleted
              </h3>
              <ul className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li>Individual reading history entries</li>
                <li>Reading progress for specific content</li>
                <li>Search queries and suggestions</li>
                <li>Content preferences and recommendations</li>
                <li>Reading session data</li>
                <li>Personal reading statistics</li>
                <li>Bookmark and favorite lists</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Data That Cannot Be Deleted
              </h3>
              <ul className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <li>Account information (use account deletion instead)</li>
                <li>Subscription records (required for billing)</li>
                <li>Legal compliance data (retained as required by law)</li>
                <li>Payment transaction history</li>
                <li>Security and fraud prevention data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Processing Time
          </h2>
          <div className={`p-6 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
          }`}>
            <ul className={`list-disc list-inside space-y-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Individual deletions:</strong> Processed within 24 hours</li>
              <li><strong>Bulk deletions:</strong> Processed within 48 hours</li>
              <li><strong>No data retention period:</strong> for deleted items</li>
              <li><strong>Immediate removal:</strong> from your app interface</li>
              <li><strong>Backend processing:</strong> may take up to 72 hours</li>
            </ul>
          </div>
        </section>

        {/* Alternative Methods */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Alternative Methods
          </h2>
          <div className={`p-6 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
          }`}>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you prefer to submit a data deletion request via email:
            </p>
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-primary-background' : 'bg-white'
            }`}>
              <p className={`mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <strong>Email:</strong> privacy@echoreads.online
              </p>
              <p className={`mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <strong>Subject:</strong> Data Deletion Request - [Your Email]
              </p>
              <p className={`transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <strong>Include:</strong> Specific data types you want deleted
              </p>
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
              <li><strong>Email confirmation:</strong> Users receive email confirmation of deletion requests</li>
              <li><strong>Processing notification:</strong> Status updates during the deletion process</li>
              <li><strong>Completion notification:</strong> Deletion completion notification within specified timeframes</li>
              <li><strong>Verification option:</strong> Contact us to verify data has been removed</li>
            </ul>
          </div>
        </section>

        {/* Data Export */}
        <section className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Export Your Data
          </h2>
          <div className={`p-6 rounded-lg transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border border-gray-700' : 'bg-light-section-background border border-gray-200'
          }`}>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Before deleting your data, you can export a copy for your records:
            </p>
            <ol className={`list-decimal list-inside space-y-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Go to Profile → Settings → Privacy</strong></li>
              <li><strong>Click 'Export My Data'</strong></li>
              <li><strong>Select data types</strong> to include in export</li>
              <li><strong>Download</strong> your data as a JSON file</li>
            </ol>
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
              If you have questions about data deletion or need assistance:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Privacy Email:
                </p>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  privacy@echoreads.online
                </p>
              </div>
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

export default DeleteData;
