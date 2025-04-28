import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Pricing Plans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Basic</h2>
          <p className="text-gray-600 mb-4">Perfect for occasional prints</p>
          <div className="text-3xl font-bold mb-4">$12.99</div>
          <ul className="space-y-2 mb-8 flex-grow">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Standard photo prints
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Up to 20 photos
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic editing
            </li>
          </ul>
          <Link 
            href="/upload" 
            className="bg-black text-white py-2 px-4 rounded-full text-center hover:bg-gray-800 transition-colors"
          >
            Choose Plan
          </Link>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-xl p-6 shadow-lg flex flex-col bg-blue-50 border-blue-200">
          <div className="bg-[#0015ff] text-white text-sm font-medium px-4 py-1 rounded-full w-fit mb-4">POPULAR</div>
          <h2 className="text-2xl font-bold mb-2">Premium</h2>
          <p className="text-gray-600 mb-4">For family and special events</p>
          <div className="text-3xl font-bold mb-4">$24.99</div>
          <ul className="space-y-2 mb-8 flex-grow">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Premium photo quality
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Up to 50 photos
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Professional retouching
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Canvas option
            </li>
          </ul>
          <Link 
            href="/upload" 
            className="bg-[#0015ff] text-white py-2 px-4 rounded-full text-center hover:bg-blue-700 transition-colors"
          >
            Choose Plan
          </Link>
        </div>

        {/* Professional Plan */}
        <div className="border rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Professional</h2>
          <p className="text-gray-600 mb-4">For professional photographers</p>
          <div className="text-3xl font-bold mb-4">$49.99</div>
          <ul className="space-y-2 mb-8 flex-grow">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Ultra HD quality
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Unlimited photos
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced editing
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              All print formats
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority shipping
            </li>
          </ul>
          <Link 
            href="/upload" 
            className="bg-black text-white py-2 px-4 rounded-full text-center hover:bg-gray-800 transition-colors"
          >
            Choose Plan
          </Link>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/" 
          className="text-[#0015ff] hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
} 