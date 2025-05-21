import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-12">About Lohiya Exports</h1>

      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="About Lohiya Exports"
            width={500}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, Lohiya Exports has grown from a small family business to one of India's leading
            manufacturers and exporters of high-quality shirts and apparel. Our journey began with a simple mission: to
            combine traditional craftsmanship with modern manufacturing techniques to create exceptional garments at
            scale.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we have built strong relationships with textile mills across India, allowing us to source
            the finest fabrics directly. Our state-of-the-art manufacturing facilities in Surat employ skilled artisans
            and use advanced technology to ensure every garment meets our exacting standards.
          </p>
          <p className="text-gray-600">
            Today, we proudly serve clients across the globe, from boutique retailers to major fashion brands,
            delivering stylish, well-crafted shirts that stand the test of time.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality. From fabric selection to the final stitch, every step in our manufacturing
              process is monitored to ensure excellence.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We continuously invest in new technologies and techniques to improve our products and processes, staying
              ahead of industry trends.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to responsible manufacturing practices that minimize environmental impact and promote
              fair labor conditions.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Our Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-2xl text-rose-600">🧵</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
              <p className="text-gray-600">
                We source only the finest fabrics, from Egyptian cotton to premium linens, ensuring comfort, durability,
                and style in every garment.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-2xl text-rose-600">✂️</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">Precision Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled artisans combine traditional techniques with modern technology to create shirts with
                impeccable stitching and perfect fits.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-2xl text-rose-600">🎨</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">Design Excellence</h3>
              <p className="text-gray-600">
                Our in-house design team stays ahead of global fashion trends, creating timeless designs that appeal to
                diverse markets and preferences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-2xl text-rose-600">🔍</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Our rigorous quality control process includes multiple inspection points throughout production, ensuring
                every shirt meets our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
