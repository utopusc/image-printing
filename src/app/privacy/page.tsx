import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>
      
      <div className="prose mx-auto">
        <p className="text-gray-600 mb-8">
          Last updated: June 1, 2023
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            At Image Printing Service, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="mt-4">
            Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> This includes your name, email address, postal address, phone number, and payment information when you create an account, place an order, or contact our customer service.
            </li>
            <li>
              <strong>Images and Content:</strong> We collect and store the photos or images you upload to our website for printing purposes.
            </li>
            <li>
              <strong>Usage Information:</strong> This includes information about how you use our website, such as the pages you visit, the time you spend on each page, and the links you click.
            </li>
            <li>
              <strong>Device Information:</strong> This includes information about the device you use to access our website, such as your IP address, browser type, and operating system.
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p>
            We may use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>To process and fulfill your orders</li>
            <li>To create and manage your account</li>
            <li>To provide customer support</li>
            <li>To improve our website and services</li>
            <li>To communicate with you about orders, promotions, and updates</li>
            <li>To protect our rights, property, or safety, and that of our users</li>
            <li>To comply with applicable laws and regulations</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
          <p>
            We may share your information with the following parties:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party service providers who help us with order fulfillment, payment processing, website hosting, and customer service.
            </li>
            <li>
              <strong>Business Partners:</strong> We may share your information with business partners for joint marketing or promotional purposes.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </li>
          </ul>
          <p className="mt-4">
            We do not sell your personal information to third parties.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Security of Your Information</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Your Choices and Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to erase your personal information</li>
            <li>The right to restrict or object to our processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw your consent at any time</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us using the details provided in the "Contact Us" section.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
          <p>
            Our website and services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information from our servers.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on this page with a new &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@imageprinting.example<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Printing Avenue, Suite 456, New York, NY 10001
          </p>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link 
          href="/" 
          className="text-[#0015ff] hover:underline inline-block"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
} 