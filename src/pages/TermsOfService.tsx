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
            Terms of Use (EULA) — EchoReads
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
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none transition-colors duration-300 ${
          theme === 'dark' ? 'prose-invert' : ''
        }`}>
          {/* Table of Contents */}
          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Table of Contents
            </h2>
            <ul className={`list-disc pl-6 mb-4 space-y-1 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Overview & Acceptance</li>
              <li>About the Company & Contact</li>
              <li>Relationship with Apple, Google & This EULA</li>
              <li>Accounts & Eligibility</li>
              <li>Services Overview</li>
              <li>Plans & Pricing</li>
              <li>Auto-Renewing Subscriptions (Key Terms Required by Apple)</li>
              <li>Platform-Specific Payment Terms</li>
              <li>Managing & Cancelling Your Subscription</li>
              <li>Free Trials & Promotions</li>
              <li>Refunds & Chargebacks</li>
              <li>Price Changes</li>
              <li>Content & Intellectual Property</li>
              <li>Acceptable Use</li>
              <li>Device Permissions & In-App Purchases</li>
              <li>Service Availability & Updates</li>
              <li>Suspension & Termination</li>
              <li>Privacy & Data Protection</li>
              <li>Family Sharing</li>
              <li>Consumer Rights & Age Requirements</li>
              <li>Disclaimers & Limitation of Liability</li>
              <li>Changes to these Terms</li>
              <li>Governing Law & Venue</li>
              <li>Contact & Notices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              1) Overview & Acceptance
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              These Terms of Use ("Terms", "EULA") govern your use of the EchoReads mobile apps for iOS and Android, and the EchoReads website and related services (collectively, the "Service"). By downloading, installing, accessing, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              "EchoReads", "we", "us", or "our" means ECHO READS (PRIVATE) LIMITED, the operator of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              2) About the Company & Contact
            </h2>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Company:</strong> ECHO READS (PRIVATE) LIMITED (Pakistan)</li>
              <li><strong>Support:</strong> support@echoreads.online</li>
              <li><strong>Website:</strong> https://echoreads.online</li>
              <li><strong>Account Deletion:</strong> https://echoreads.online/delete-account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              3) Relationship with Apple, Google & This EULA
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you download the iOS app from the Apple App Store, your use of the app is also governed by Apple's Standard End User License Agreement (EULA). Apple's Standard EULA is incorporated by reference and applies in addition to these Terms. Where required by Apple's policies, the Apple Standard EULA will prevail solely to the extent of any conflict.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Apple Standard EULA: <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you download the Android app from Google Play, your use is also subject to the Google Play Terms of Service and applicable Google Play policies.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Nothing in these Terms creates any relationship of partnership, agency, or joint venture between you and Apple/Google. Apple and Google are not responsible for providing the Service or any maintenance or support except as required by their terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              4) Accounts & Eligibility
            </h2>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>You must be at least 13 years old (or the minimum age in your jurisdiction) to create an account.</li>
              <li>You are responsible for keeping your login credentials confidential and for all activities under your account.</li>
              <li>You must provide accurate, current information. We may suspend or terminate accounts that violate these Terms.</li>
              <li>You can request deletion at any time: <a href="https://echoreads.online/delete-account" target="_blank" rel="noopener noreferrer" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>https://echoreads.online/delete-account</a>. Some data may be retained where required by law or for legitimate business interests (security, fraud prevention, tax/audit).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              5) Services Overview
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              EchoReads is a digital reading platform providing access to magazines, digests, and articles, with features that may include personal recommendations, offline access, and listening to supported audio content. Specific features and catalog availability may vary by plan, platform, and region.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We also offer a Free tier with limited access (availability and limits may vary).
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              6) Plans & Pricing
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We currently offer the following auto-renewing monthly plans (USD prices shown; local store pricing may vary by region/currency and applicable taxes):
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Echo Plus Monthly</strong> — $5.99 per month</li>
              <li><strong>Echo Pro Monthly</strong> — $9.99 per month</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Plan features are described in-app and on the website and may change over time (e.g., content quotas, offline downloads, audio features). Any change will apply on your next renewal, with notice as required by applicable law or app-store policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              7) Auto-Renewing Subscriptions (Key Terms Required by Apple)
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              The following disclosures apply to all auto-renewing subscriptions offered within the iOS app and more broadly across supported platforms:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Length:</strong> 1-Month Auto-Renewing Subscription for both Echo Plus Monthly and Echo Pro Monthly.</li>
              <li><strong>Price:</strong> $5.99 per month (Echo Plus Monthly) and $9.99 per month (Echo Pro Monthly). Localized pricing may vary.</li>
              <li><strong>Auto-Renewal:</strong> Your subscription will automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
              <li><strong>Renewal Charge Timing:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
              <li><strong>Management:</strong> You can manage and cancel your subscriptions in your account settings on the App Store after purchase.</li>
              <li><strong>Free Trials (if offered):</strong> Any unused portion of a free trial will be forfeited when you purchase a subscription (where permitted by law and store policy).</li>
              <li><strong>Platform Billing:</strong> Payments are processed by Apple (iOS purchases) or Google (Android purchases), not directly by ECHO READS (PRIVATE) LIMITED, when you subscribe via those platforms.</li>
              <li><strong>Refunds:</strong> For purchases made via the App Store or Google Play, refunds are handled by the respective store under their policies (see Section 11).</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              These terms are repeated in Section 9 with platform-specific management and cancellation steps.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8) Platform-Specific Payment Terms
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.1 iOS — Apple In-App Purchase
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you purchase a subscription via the Apple App Store:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Payment is charged to your Apple ID at confirmation of purchase.</li>
              <li>The subscription auto-renews monthly unless you turn off auto-renewal at least 24 hours before the cycle ends.</li>
              <li>Manage/cancel in Settings &gt; [your name] &gt; Subscriptions (see Section 9).</li>
              <li>Billing, refunds, taxes, and receipts are governed by Apple's terms, policies, and systems.</li>
              <li>Apple may notify you of price changes and may require your consent for increases; if you do not consent, your subscription may be cancelled by Apple at the end of the current period.</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.2 Android — Google Play Billing
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you purchase via Google Play:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Payment is processed by Google using your Google account.</li>
              <li>The subscription auto-renews monthly unless you cancel at least 24 hours before renewal.</li>
              <li>Manage/cancel in the Google Play Store (see Section 9).</li>
              <li>Billing, refunds, taxes, and receipts are governed by Google Play's policies.</li>
              <li>Google may notify you of price changes and may require consent; lack of consent may end the subscription at period end.</li>
            </ul>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.3 Web Purchases (If Available)
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you purchase directly on our website:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Payment is processed by our web payment provider (details shown at checkout).</li>
              <li>The subscription auto-renews monthly unless cancelled before the end of the current billing period from your web account settings or by contacting support.</li>
              <li>Refunds for web purchases are handled by ECHO READS (PRIVATE) LIMITED per Section 11 and applicable consumer law.</li>
            </ul>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              8.4 About RevenueCat
            </h3>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We use RevenueCat to manage subscription entitlements and synchronize purchase status across devices/platforms. RevenueCat is not a payment processor; it does not charge you. All monetary transactions are processed by Apple, Google, or our web payment provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9) Managing & Cancelling Your Subscription
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You can continue using premium features until the end of the current billing period after cancellation. Deleting your account or the app does not cancel your subscription.
            </p>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9.1 iOS (App Store)
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              To cancel a subscription purchased through the App Store:
            </p>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Settings &gt; [your name] &gt; Subscriptions &gt; EchoReads &gt; Cancel Subscription.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You can also open the App Store, tap your profile, and manage Subscriptions there.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9.2 Android (Google Play)
            </h3>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              To cancel a subscription purchased through Google Play:
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Open the Google Play Store &gt; tap your profile icon &gt; Payments & subscriptions &gt; Subscriptions &gt; EchoReads &gt; Cancel.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              9.3 Web
            </h3>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you subscribed on the web, manage/cancel from your EchoReads account settings (link provided in your purchase emails) or contact <a href="mailto:support@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>support@echoreads.online</a> for assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              10) Free Trials & Promotions
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              From time to time, we may offer free trials or promotional pricing. Trial length and eligibility are disclosed at sign-up. Trials convert to paid, auto-renewing subscriptions unless you cancel before the trial ends. Where permitted, any unused trial period is forfeited upon purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11) Refunds & Chargebacks
            </h2>
            
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11.1 iOS (App Store)
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              For purchases made through Apple, refunds are determined and processed by Apple under their policies. To request a refund, visit <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>https://reportaproblem.apple.com/</a> or contact Apple Support. We cannot directly refund App Store transactions.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11.2 Android (Google Play)
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              For purchases made through Google Play, refunds are subject to Google's policies. In many regions you can request a refund through the Play Store for a limited time after purchase; otherwise contact <a href="mailto:support@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>support@echoreads.online</a> and we will review your request consistent with local law and Google's rules. We cannot refund directly where Google restricts developer-initiated refunds.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11.3 Web
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              For web purchases, contact <a href="mailto:support@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>support@echoreads.online</a> within a reasonable time. We comply with applicable consumer laws, including any mandatory cooling-off rights (e.g., for EEA/UK consumers) unless you consented to immediate digital content access and acknowledged loss of the withdrawal right. Nothing in these Terms limits your statutory rights.
            </p>

            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              11.4 Chargebacks & Abuse
            </h3>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you dispute a charge with your payment provider while still consuming the Service, we may suspend or terminate access pending resolution. Fraudulent or abusive refund activity may result in account restrictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              12) Price Changes
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may change subscription prices in accordance with app-store rules and local law. You'll receive advance notice (via Apple/Google and/or in-app/email). If a price increase requires your consent and you don't consent, your subscription may not renew and will end at the current period's conclusion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              13) Content & Intellectual Property
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              All content (magazines, digests, articles, images, audio, software) is owned by us or our licensors and protected by intellectual property laws. Subject to your plan, we grant you a limited, personal, non-exclusive, non-transferable, revocable license to access the Service for non-commercial use.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You may not copy, modify, reproduce, distribute, sell, or create derivative works from the content or the software except as expressly permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              14) Acceptable Use
            </h2>
            <p className={`mb-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You agree not to:
            </p>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Violate laws or third-party rights;</li>
              <li>Share your account or credentials;</li>
              <li>Circumvent technical controls or download restrictions;</li>
              <li>Use bots, scrapers, or automated access;</li>
              <li>Upload harmful code or interfere with the Service;</li>
              <li>Misuse reporting, refund, or promotional programs.</li>
            </ul>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may suspend or terminate accounts for violations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              15) Device Permissions & In-App Purchases
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Some features may request access to device capabilities (e.g., camera for profile images; microphone for voice features if available). Permission prompts will describe the requested access. You can change permissions in your device settings.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              In-app purchases are processed by Apple/Google and reflected in your account's entitlements via RevenueCat.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              For details on data collection and purpose, see our Privacy Policy (linked in the app store listing and on our website).
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              16) Service Availability & Updates
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We strive for high availability but do not guarantee uninterrupted Service. Features and catalog availability may vary by device, region, license, or store policy. We may issue updates that are required to continue using the Service.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <strong>Regional Restrictions:</strong> Availability may be limited or suspended to comply with local regulations (e.g., publication or media licensing). Where required permits are not available, the Service or certain content may be inaccessible in those regions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              17) Suspension & Termination
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You may terminate at any time (see Section 9 for cancellation). We may suspend or terminate your access for violations of these Terms, suspected fraud, legal compliance, or by request of an app store. Except where prohibited by law, fees are non-refundable after the billing period begins (subject to Sections 11.1 and 11.2 for store-purchased subscriptions).
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              18) Privacy & Data Protection
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Your use of the Service is also governed by our Privacy Policy, which explains what data we collect, how we use it, and your rights.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Privacy Policy URL: <Link to="/privacy" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>https://echoreads.online/privacy</Link>
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              19) Family Sharing
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Family Sharing is currently not supported for EchoReads subscriptions. Any such functionality advertised by app stores is not applicable unless we expressly state otherwise in the app and on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              20) Consumer Rights & Age Requirements
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              These Terms do not limit non-waivable consumer rights under applicable law. Users under the age threshold in their jurisdiction must have a parent/guardian's consent where required. Parents/guardians are responsible for supervising minors' use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              21) Disclaimers & Limitation of Liability
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              The Service is provided "AS IS" and "AS AVAILABLE." To the maximum extent permitted by law, we disclaim all warranties, express or implied.
            </p>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              To the extent permitted by law, our aggregate liability arising from or relating to the Service shall not exceed the amounts you paid to us for the Service in the twelve (12) months preceding the event giving rise to the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages.
            </p>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Some jurisdictions do not allow limitations of liability or implied warranty disclaimers; in such cases, portions of this section may not apply.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              22) Changes to these Terms
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We may update these Terms to reflect changes to the Service, legal requirements, or platform policies. We'll post the updated Terms with the "Last Updated" date and, where required, provide additional notice. Continued use after changes take effect constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              23) Governing Law & Venue
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Unless mandatory local law provides otherwise, these Terms are governed by the laws of Pakistan, without regard to conflict-of-law principles, and you agree to the courts of Lahore, Pakistan as the exclusive venue. Consumers in the EEA/UK retain any mandatory rights and forums under local consumer law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              24) Contact & Notices
            </h2>
            <ul className={`list-disc pl-6 mb-4 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li><strong>Questions about these Terms, subscriptions, or refunds:</strong> <a href="mailto:support@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>support@echoreads.online</a></li>
              <li><strong>Legal inquiries:</strong> <a href="mailto:legal@echoreads.online" className={`underline ${theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'}`}>legal@echoreads.online</a></li>
            </ul>
          </section>

          {/* Final Notice */}
          <div className={`p-6 rounded-lg border-2 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-section-background border-accent-gold' : 'bg-light-section-background border-accent-gold'
          }`}>
            <p className={`text-center font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              By using EchoReads, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
            <div className={`text-center mt-4 text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <p><strong>Company:</strong> ECHO READS (PRIVATE) LIMITED (Pakistan)</p>
              <p><strong>App:</strong> EchoReads</p>
              <p><strong>Version:</strong> 2.0</p>
              <p><strong>Effective Date:</strong> 31 October 2025</p>
              <p><strong>Last Updated:</strong> 31 October 2025</p>
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
