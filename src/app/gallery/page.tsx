import Link from "next/link";

export default function GalleryPage() {
  // Sample gallery images - in a real app, these would come from an API or database
  const galleryItems = [
    {
      id: 1,
      title: "Nature Collection",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop",
      description: "Beautiful landscape prints",
    },
    {
      id: 2,
      title: "Urban Photography",
      imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop",
      description: "City skylines and street photography",
    },
    {
      id: 3,
      title: "Portrait Series",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
      description: "Professional portrait prints",
    },
    {
      id: 4,
      title: "Abstract Art",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop",
      description: "Modern abstract designs",
    },
    {
      id: 5,
      title: "Black and White",
      imageUrl: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1600&auto=format&fit=crop",
      description: "Classic monochrome photography",
    },
    {
      id: 6,
      title: "Wildlife Collection",
      imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1600&auto=format&fit=crop",
      description: "Stunning wildlife photography",
    },
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Gallery</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Browse through our featured collections and get inspired for your next print order.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Premium Quality</span>
                <Link
                  href="/upload"
                  className="text-sm font-medium text-[#ff5941] hover:underline"
                >
                  Order Print
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="text-[#ff5941] hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
} 