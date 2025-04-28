import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Terms and Conditions</h1>
      
      <div className="prose mx-auto">
        <p className="text-gray-600 mb-8">
          Last updated: June 1, 2023
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of our website and services offered by Image Printing Service (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website or using our services, you agree to these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our website or services.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
          <p>
            We provide digital and physical printing services for photographs and digital images. Our services include, but are not limited to, standard photo prints, canvas prints, framed prints, and other photo products.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
          <p>
            To use certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Ordering and Payment</h2>
          <p>
            Orders are subject to acceptance by us. We reserve the right to refuse service to anyone for any reason. Payment must be made at the time of ordering. We accept major credit cards, PayPal, and other payment methods as indicated on our website.
          </p>
          <p className="mt-4">
            All prices are displayed in USD and are subject to change without notice. Shipping costs and applicable taxes will be applied at checkout.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
          <p>
            By uploading images to our website, you represent that you have the legal right to reproduce these images. You retain ownership of your images, but grant us a non-exclusive license to process, reproduce, and print your images solely for the purpose of fulfilling your order.
          </p>
          <p className="mt-4">
            All content on our website, including text, graphics, logos, and software, is the property of Image Printing Service and is protected by copyright laws. You may not reproduce, distribute, modify, or create derivative works of any such content without our express written permission.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Shipping and Delivery</h2>
          <p>
            We aim to process and ship orders promptly. Delivery times vary based on the selected shipping method and destination. We are not responsible for delays caused by shipping carriers or customs authorities for international shipments.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Returns and Refunds</h2>
          <p>
            We strive to provide high-quality products. If you are not satisfied with your order, please contact us within 14 days of receipt. We may offer a reprint, replacement, or refund at our discretion. Custom-made products may not be eligible for returns unless there is a defect in materials or workmanship.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
          <p>
            In no event shall Image Printing Service be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, including but not limited to loss of profits, data, or goodwill.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Privacy Policy</h2>
          <p>
            Your use of our website and services is also governed by our Privacy Policy, which can be found <Link href="/privacy" className="text-[#0015ff] hover:underline">here</Link>.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes constitutes your acceptance of the new Terms and Conditions.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@imageprinting.example<br />
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