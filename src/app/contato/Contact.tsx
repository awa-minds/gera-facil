'use client'

import axios from 'axios'
import React, { useState, ChangeEvent, FormEvent } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // eslint-disable-next-line prettier/prettier
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/contact', formData)
      console.log(response.data) // Assuming the response from the backend will be logged
      // You can display a success message or perform other actions on successful form submission
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error, display an error message, etc.
    }
  }

  return (
    <form
      className="mx-auto max-w-md rounded-lg border p-4 shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="name" className="mb-1 block font-medium">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-1 block font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="mb-1 block font-medium">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
      >
        Enviar
      </button>
    </form>
  )
}
