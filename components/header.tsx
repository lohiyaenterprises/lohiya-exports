"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const productOptions = [
  { key: "formal", label: "Formal Shirts", path: "/products" },
  { key: "casual", label: "Casual Shirts", path: "/products" },
  { key: "specialty", label: "Specialty Shirts", path: "/products" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold text-rose-600">
              Lohiya
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/") ? "text-rose-600 border-b-2 border-rose-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive("/products")
                    ? "text-rose-600 border-b-2 border-rose-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Products
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {productOptions.map((option) => (
                      <Link
                        key={option.key}
                        href={option.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/about") ? "text-rose-600 border-b-2 border-rose-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Contact Us Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/")
                  ? "border-rose-500 text-rose-700 bg-rose-50"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <div
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive("/products")
                    ? "border-rose-500 text-rose-700 bg-rose-50"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Products
              </div>
              <div className="pl-6 space-y-1">
                {productOptions.map((option) => (
                  <Link
                    key={option.key}
                    href={option.path}
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/about")
                  ? "border-rose-500 text-rose-700 bg-rose-50"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive("/contact")
                  ? "border-rose-500 text-rose-700 bg-rose-50"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
