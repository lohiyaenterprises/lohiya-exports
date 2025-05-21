"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or interested in placing an order? Fill out the form and our team will
              get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-xl mr-4 mt-1">📱</div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <div>+91 70594 11223</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 text-xl mr-4 mt-1">✉️</div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div>contact@lohiyaexports.com</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 text-xl mr-4 mt-1">📍</div>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <div>
                    #10A2, Sitaram Business Centre,
                    <br />
                    VIP Road, Ward 2<br />
                    Vesu, Surat, Gujarat - 395007
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-3 px-4 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
