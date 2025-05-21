import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quality & Style At Scale – We've Got You Covered
          </h1>
          <p className="text-gray-600 mb-6">
            From formal corporate wear to casual print collections, we manufacture stylish, perfectly fitted shirts in
            bulk—ensuring top-notch craftsmanship and timely delivery.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            CONTACT US
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=350"
            alt="Model wearing a stylish shirt"
            width={350}
            height={400}
            className="rounded-md"
          />
        </div>
      </section>

      {/* Apparel Range Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Apparel Range</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            We manufacture a variety of shirts, including corporate formal wear, casual designs, and private label
            collections. No matter the style, we guarantee premium fabrics and flawless fits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Formal Shirts", image: "/placeholder.svg?height=300&width=250" },
              { title: "Casual Shirt", image: "/placeholder.svg?height=300&width=250" },
              { title: "Semi Formal Shirts", image: "/placeholder.svg?height=300&width=250" },
              { title: "Pure linen shirt", image: "/placeholder.svg?height=300&width=250" },
              { title: "Hawai Shirt", image: "/placeholder.svg?height=300&width=250" },
              { title: "Digital Print Shirts", image: "/placeholder.svg?height=300&width=250" },
            ].map((item, index) => (
              <div key={index} className="mb-8">
                <Link href="/products">
                  <div className="overflow-hidden rounded-md mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={250}
                      height={300}
                      className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">WHY CHOOSE US?</h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Factory production"
                width={500}
                height={400}
                className="rounded-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">What Sets Us Apart from Competitors</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">EFFICIENT AND COST-EFFECTIVE</h4>
                <p className="text-gray-600">
                  We use the Progressive Bundle System (PBS) to maintain strict production monitoring, ensuring quality
                  control at every step. This reduces defects, turnaround time, and production costs while also
                  delivering higher efficiency at competitive prices.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">SEAMLESS SOURCING</h4>
                <p className="text-gray-600">
                  Our strong ties with leading textile mills in India ensure direct access to premium fabrics at
                  competitive prices. This enables strict quality control and cost efficiency, delivering durable and
                  stylish shirts.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">WELL-DESIGNED</h4>
                <p className="text-gray-600">
                  Our in-house design team works closely with you to ensure that every shirt meets your exact
                  requirements, blending style, comfort, and functionality seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
