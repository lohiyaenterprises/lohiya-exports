"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// Sample product data
const products = [
  {
    id: 1,
    title: "Formal White Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Formal Shirts",
    colors: ["white"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Blue Striped Formal Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Formal Shirts",
    colors: ["blue"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 3,
    title: "Pink Casual Print Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Casual Shirt",
    colors: ["pink"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 4,
    title: "Light Blue Semi-Formal Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Semi Formal Shirts",
    colors: ["blue"],
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    title: "White Linen Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Pure linen shirt",
    colors: ["white"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    title: "Tropical Print Hawaiian Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Hawai Shirt",
    colors: ["green", "blue"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 7,
    title: "Colorful Digital Print Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Digital Print Shirts",
    colors: ["multicolor"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 8,
    title: "Black Formal Shirt",
    image: "/placeholder.svg?height=300&width=250",
    category: "Formal Shirts",
    colors: ["black"],
    sizes: ["M", "L", "XL", "XXL"],
  },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [colorFilter, setColorFilter] = useState<string | null>(null)
  const [sizeFilter, setSizeFilter] = useState<string | null>(null)

  // Get unique colors and sizes for filters
  const allColors = Array.from(new Set(products.flatMap((product) => product.colors)))
  const allSizes = Array.from(new Set(products.flatMap((product) => product.sizes)))

  useEffect(() => {
    let result = [...products]

    if (colorFilter) {
      result = result.filter((product) => product.colors.includes(colorFilter))
    }

    if (sizeFilter) {
      result = result.filter((product) => product.sizes.includes(sizeFilter))
    }

    setFilteredProducts(result)
  }, [colorFilter, sizeFilter])

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-gray-600 hover:text-rose-600">
          Home
        </Link>{" "}
        / <span className="text-gray-900">Products</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Product List</h1>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto">
          <label htmlFor="color-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Color
          </label>
          <select
            id="color-filter"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md"
            onChange={(e) => setColorFilter(e.target.value || null)}
            defaultValue=""
          >
            <option value="">All Colors</option>
            {allColors.map((color) => (
              <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label htmlFor="size-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Size
          </label>
          <select
            id="size-filter"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md"
            onChange={(e) => setSizeFilter(e.target.value || null)}
            defaultValue=""
          >
            <option value="">All Sizes</option>
            {allSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-[250px] flex items-center justify-center bg-gray-50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={200}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{product.category}</p>
              <button className="w-full bg-rose-600 text-white py-2 px-4 rounded hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
