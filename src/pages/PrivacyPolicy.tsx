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
            Privacy Policy — EchoReads
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Effective Date: 31 October 2025
          </p>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Last Updated: 31 October 2025
          </p>
          <p className={`text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Version: 2.0
          </p>
          <div className={`mt-4 text-base transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            <p><strong>Company (Data Controller):</strong> ECHO READS (PRIVATE) LIMITED ("EchoReads", "we", "us", "our")</p>
            <p><strong>Website:</strong> https://echoreads.online</p>
            <p><strong>Support:</strong> <a href="mailto:privacy@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>privacy@echoreads.online</a></p>
          </div>
          <p className={`mt-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use EchoReads on iOS, Android, and the web. By using EchoReads, you agree to this Policy. If you do not agree, please do not use the Service.
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
              1. Scope & Roles
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              This Policy applies to the EchoReads mobile apps and website, and related services and communications (the "Service").
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Controller:</strong> ECHO READS (PRIVATE) LIMITED is the data controller for web purchases and account management.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Store Purchases:</strong> When you subscribe via Apple (iOS) or Google (Android), those stores act as independent controllers for billing and purchase records; we receive limited purchase status via our subscription management provider (RevenueCat) to grant entitlements.
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
              2.1 Information You Provide
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Account & Profile:</strong> name, email, password (hashed), profile image (optional), preferences (e.g., language, theme), communication preferences.</li>
              <li><strong>Content Activity:</strong> bookmarks, reading lists, reading progress, saved downloads (device-local), likes/favourites.</li>
              <li><strong>Support & Feedback:</strong> emails, in-app support messages, bug reports, survey responses, feature requests.</li>
              <li><strong>Web Checkout (if available):</strong> limited payment details via our payment provider (we do not store full card numbers).</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2.2 Information Collected Automatically
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Device & App:</strong> device model, OS/version, app version, device identifiers (e.g., IDFV/Android App Set ID), IP address, time zone, language, crash logs, diagnostics, performance metrics.</li>
              <li><strong>Usage:</strong> screens viewed, taps/clicks, session duration, search queries, content opened, offline/online status, download events.</li>
              <li><strong>Purchase Entitlements:</strong> subscription/product identifiers, transaction state, renewal status, period start/end (via RevenueCat and store APIs).</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2.3 Data We Do Not Intentionally Collect
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Precise geolocation, contact lists, SMS, calendars, or health data.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We do not track you across third-party apps/websites for targeted advertising.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2.4 Sources
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Directly from you;</li>
              <li>Automatically from your device/app;</li>
              <li>From Apple/Google (purchase confirmations/receipts) via RevenueCat;</li>
              <li>From analytics/crash services (see Section 8).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3. How We Use Your Information (Purposes)
            </h2>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We use data to:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Provide the Service:</strong> create and secure your account; sync reading progress; enable search, recommendations, offline features.</li>
              <li><strong>Subscription Management:</strong> verify purchases and entitlements, apply plan limits, manage renewals (via RevenueCat, Apple, Google).</li>
              <li><strong>Personalisation:</strong> surface relevant magazines/articles/digests based on your activity and preferences.</li>
              <li><strong>Performance & Quality:</strong> monitor crashes, fix bugs, improve stability and speed.</li>
              <li><strong>Security & Fraud Prevention:</strong> detect misuse, suspicious activity, or unauthorised access.</li>
              <li><strong>Customer Support & Communications:</strong> respond to queries, send service notifications (renewal reminders, policy updates).</li>
              <li><strong>Compliance:</strong> meet legal, tax, accounting, and regulatory obligations.</li>
            </ul>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Legal bases (EEA/UK):</strong>
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Contract (Art. 6(1)(b) GDPR) for providing the Service;</li>
              <li>Legitimate interests (Art. 6(1)(f)) for analytics, security, improvement;</li>
              <li>Consent (Art. 6(1)(a)) where required (e.g., non-essential cookies on web);</li>
              <li>Legal obligation (Art. 6(1)(c)) for compliance duties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4. Cookies & Similar Technologies (Web)
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We use:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Essential cookies</strong> (login/session, fraud/security) – required for the site to work;</li>
              <li><strong>Analytics cookies</strong> (aggregated usage metrics) – where required, used with your consent;</li>
              <li><strong>Preference cookies</strong> (language/theme).</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You can manage cookies in your browser and (where provided) our cookie banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5. Sharing & Disclosures
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.1 Service Providers (Processors)
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We share data with trusted vendors who process it under our instructions:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Hosting/Infrastructure (e.g., cloud hosting, CDN)</li>
              <li>Subscription Management: RevenueCat (purchase status & entitlements)</li>
              <li>Crash & Diagnostics (e.g., platform crash reporters)</li>
              <li>Analytics (aggregated app/web metrics)</li>
              <li>Email/SMS (transactional support messages)</li>
              <li>Support Tools (ticketing, in-app help)</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We require appropriate confidentiality, security, and data protection commitments from these providers.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.2 App Stores (Independent Controllers)
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Apple App Store and Google Play process your payments and store purchase history. We receive limited purchase/receipt metadata to activate your plan.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5.3 Legal, Safety & Business Transfers
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may disclose information if required by law, to protect users, investigate fraud, or in a merger, acquisition, or sale of assets (subject to standard protections).
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We do not sell or rent your personal information for marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              6. Data Retention
            </h2>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Account data:</strong> kept while your account is active; deleted when you delete your account (subject to legally required retention).</li>
              <li><strong>Usage analytics:</strong> up to 24 months (aggregated or pseudonymised where feasible).</li>
              <li><strong>Crash logs/diagnostics:</strong> typically 90–180 days.</li>
              <li><strong>Purchase/entitlement records:</strong> retained as required for accounting, tax, and anti-fraud (generally 6–10 years under applicable law).</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We retain only as long as necessary for the purposes set out in this Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7. Security
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We implement technical and organisational measures including:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Encryption in transit (TLS) and at rest (where supported by our providers);</li>
              <li>Least-privileged access controls, audit logging;</li>
              <li>Secrets management and secure development practices;</li>
              <li>Routine patching and vulnerability management.</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              No method of transmission or storage is 100% secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8. Third-Party Services & SDKs
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Depending on your platform and region, the app or website may use:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>RevenueCat</strong> (entitlement syncing; receives purchase tokens/receipts and anonymised device identifiers to manage subscriptions)</li>
              <li><strong>Crash & diagnostics</strong> (e.g., platform crash reporting services)</li>
              <li><strong>Analytics</strong> (aggregated usage metrics; we do not build advertising profiles)</li>
              <li><strong>Email/Support</strong> (ticketing and email delivery)</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We provide links to third-party policies upon request. Their handling of your data is governed by their own privacy terms when they act as controllers (e.g., Apple/Google for payments).
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9. Your Rights & Choices
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Depending on your location, you may have rights to:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Access your data and get a copy (data portability where applicable);</li>
              <li>Correct inaccurate or incomplete data;</li>
              <li>Delete your data (erasure);</li>
              <li>Restrict or object to certain processing;</li>
              <li>Withdraw consent (where processing is based on consent);</li>
              <li>Lodge a complaint with your supervisory authority.</li>
            </ul>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>How to exercise:</strong>
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Manage profile and preferences in-app;</li>
              <li>Delete account: <a href="https://echoreads.online/delete-account" target="_blank" rel="noopener noreferrer" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>https://echoreads.online/delete-account</a></li>
              <li>Request data export/erasure: <a href="mailto:privacy@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>privacy@echoreads.online</a></li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>CCPA/CPRA (California):</strong> We do not "sell" or "share" personal information for cross-context behavioural advertising. You may exercise access/deletion rights via <a href="mailto:privacy@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>privacy@echoreads.online</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10. Children's Privacy
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              EchoReads is not intended for children under 13 (or the minimum age in your jurisdiction); we do not knowingly collect personal data from children under that age.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If we learn a child's data was collected in error, we will delete it.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Family Sharing:</strong> not currently supported. Parents/guardians should supervise minor use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11. International Transfers
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may transfer data to countries outside your own (e.g., to cloud providers). Where required, we use appropriate safeguards such as Standard Contractual Clauses, and implement supplementary measures to protect your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              12. Platform-Specific Notices
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              12.1 Apple iOS (Purpose Strings & Permissions)
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We request certain iOS permissions only to support specific features. Examples of how we use them (and wording you will see in permission prompts):
            </p>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Camera (if enabled):</strong> "EchoReads uses the camera to let you upload or change your profile photo (and to scan a QR code for sign-in if you choose). Photos are not used for any other purpose."
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Microphone (only if a voice feature is enabled in your region):</strong> "EchoReads uses the microphone to enable optional voice features (e.g., voice notes or voice search). Audio is processed only to provide this feature."
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You can change permissions at any time in iOS Settings.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Note for Users:</strong> If a feature requiring camera/microphone isn't available in your region or account, the app will not request that permission.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              12.2 Google Play (Android)
            </h3>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Payments are processed by Google. Manage subscriptions in the Play Store. You can review app permissions in Android Settings at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              13. Region-Specific Disclosures
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>EEA/UK:</strong> You have GDPR/UK GDPR rights set out in Section 9. Our lawful bases are listed in Section 3. You may contact your data protection authority (e.g., ICO in the UK) if you have concerns.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>US (California):</strong> see Section 9 (CCPA/CPRA).
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>China mainland:</strong> If EchoReads is distributed there, some features/content may be restricted to comply with local publication rules (see Terms of Use). Personal data may be processed in accordance with applicable local law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              14. Changes to this Policy
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may update this Policy to reflect changes to our practices, technologies, or legal requirements. We will update the "Last Updated" date and, where required, notify you (e.g., in-app or by email). Continued use after the effective date means you accept the updated Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              15. Contact Us
            </h2>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Privacy:</strong> <a href="mailto:privacy@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>privacy@echoreads.online</a></li>
              <li><strong>Legal:</strong> <a href="mailto:legal@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>legal@echoreads.online</a></li>
              <li><strong>Support:</strong> https://echoreads.online</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Developer Implementation Appendix (for App Store/Play review)
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              This section is informational for store reviewers and your engineering team. It is part of the public page to satisfy transparency and reduce back-and-forth during review.
            </p>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              A. iOS Info.plist Purpose Strings (copy verbatim if accurate)
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If your build includes these features, set these exact strings:
            </p>
            <p className={`mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>NSCameraUsageDescription</strong>
            </p>
            <p className={`mb-4 italic transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              "EchoReads uses the camera to let you upload or change your profile photo (and to scan a QR code for sign-in if you choose). Photos are not used for any other purpose."
            </p>
            <p className={`mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>NSMicrophoneUsageDescription</strong> (only if a voice feature is shipped)
            </p>
            <p className={`mb-4 italic transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              "EchoReads uses the microphone to enable optional voice features (e.g., voice notes or voice search). Audio is processed only to provide this feature."
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you do not currently ship a microphone-based feature, remove the microphone permission from the app to avoid rejection under 5.1.1.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              B. App Store Privacy "Nutrition Label" — Suggested Mapping
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Data Linked to You (examples):</strong>
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Contact Info: email</li>
              <li>Identifiers: device/app identifiers (IDFV/App Set ID), IP (transient)</li>
              <li>Usage Data: product interaction, diagnostics/crash</li>
              <li>Purchases: subscription status, product IDs, renewal dates (via RevenueCat/store)</li>
            </ul>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Purposes:</strong> App Functionality, Analytics, Account Management, Fraud Prevention.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Tracking:</strong> We do not track users across third-party apps/sites for ads.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              C. Google Play "Data safety" — Typical Selections
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Collected: email, user IDs, app interactions, crash logs, diagnostics, device identifiers, purchase history/entitlements.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Shared: not for advertising; shared only with processors (e.g., RevenueCat, analytics, crash) to provide functionality.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Data is encrypted in transit; you can request deletion; collection is required for app functionality (entitlements) and for analytics (optional/aggregated, where applicable).
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              D. Subscription & Entitlements Architecture
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Processor: Apple/Google (billing).</li>
              <li>Entitlement orchestration: RevenueCat (no direct charging).</li>
              <li>Server validation: Validate against production first; on error 21007, validate sandbox (TestFlight).</li>
              <li>In-app disclosures: Show plan name, price, 1-month auto-renewing, 24-hour renewal notice, and how to cancel (links to Settings paths).</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Versioning & Review
            </h3>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Document URL for stores: https://echoreads.online/privacy-policy</li>
              <li>Next Review: 31 October 2026 (or earlier if functionality or vendors change).</li>
            </ul>
          </section>
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
              Terms of Use
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
