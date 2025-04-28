"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [imageCount, setImageCount] = useState<number>(0)
  const [selectedPackage, setSelectedPackage] = useState<string>("premium")
  const [loading, setLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const count = searchParams.get("images")
    if (!count) {
      // If no images parameter, redirect back to upload
      router.push("/upload")
      return
    }
    setImageCount(parseInt(count, 10))
  }, [searchParams, router])

  const packages = {
    basic: {
      name: "Basic",
      price: 12.99,
      perExtraImage: 0.50
    },
    premium: {
      name: "Premium",
      price: 24.99,
      perExtraImage: 0.75
    },
    professional: {
      name: "Professional",
      price: 49.99,
      perExtraImage: 0.99
    }
  }

  const calculateTotal = () => {
    const selectedPkg = packages[selectedPackage as keyof typeof packages]
    let total = selectedPkg.price
    
    // If more than 20 images for basic, more than 50 for premium, or more than 100 for professional
    if (selectedPackage === "basic" && imageCount > 20) {
      total += selectedPkg.perExtraImage * (imageCount - 20)
    } else if (selectedPackage === "premium" && imageCount > 50) {
      total += selectedPkg.perExtraImage * (imageCount - 50)
    } else if (selectedPackage === "professional" && imageCount > 100) {
      total += selectedPkg.perExtraImage * (imageCount - 100)
    }
    
    return total.toFixed(2)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required"
    if (!formData.country.trim()) newErrors.country = "Country is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    
    try {
      // In a real app, you would submit to a payment processor or backend
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Redirect to confirmation page
      router.push("/confirmation")
    } catch (error) {
      console.error("Payment error:", error)
      alert("There was an error processing your payment. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="md:col-span-1 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Number of images:</p>
              <p className="font-semibold">{imageCount}</p>
            </div>
            
            <div>
              <p className="text-gray-600 mb-2">Package:</p>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="basic">Basic - ${packages.basic.price}</option>
                <option value="premium">Premium - ${packages.premium.price}</option>
                <option value="professional">Professional - ${packages.professional.price}</option>
              </select>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>${calculateTotal()}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>FREE</p>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <p>Total:</p>
                <p>${calculateTotal()}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                rows={3}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#0015ff] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Complete Order - $${calculateTotal()}`
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Link href="/upload" className="text-[#0015ff] hover:underline">
          ← Back to upload
        </Link>
      </div>
    </main>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  )
} 