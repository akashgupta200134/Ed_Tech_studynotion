import React from 'react'
import ContactUsForm from '../components/ContactUs/ContactUsForm'

const ContactSection = () => {
  return (
<div className="mt-24 w-full flex justify-center">
  <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-richblack-800 border border-richblack-600 rounded-2xl shadow-2xl p-10">
    {/* Header */}
    <div className="text-white flex flex-col items-center text-center mb-8">
      <h1 className="text-4xl font-bold font-inter">Get in Touch</h1>
      <p className="text-sm text-richblack-300 mt-2 max-w-md">
        We’d love to hear from you. Please fill out the form below and we’ll
        get back to you as soon as possible.
      </p>
    </div>

    {/* Contact Form */}
    <ContactUsForm />
  </div>
</div>

  )
}

export default ContactSection
