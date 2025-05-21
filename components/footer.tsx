import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Lohiya</h2>
            <p className="text-gray-400 text-sm mb-4">Quality & Style At Scale</p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="mr-2">📱</span> +91 70594 11223
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <span className="mr-2">✉️</span> contact@lohiyaexports.com
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Formal Shirts
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Casual Shirt
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Semi Formal Shirts
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Digital Print Shirts
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Pure linen shirt
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <address className="text-gray-400 not-italic">
                #10A2, Sitaram Business Centre,
                <br />
                VIP Road, Ward 2<br />
                Vesu, Surat, Gujarat - 395007
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Copyright © 2023 Lohiya Exports</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Powered by Lohiya Exports</p>
        </div>
      </div>
    </footer>
  )
}
