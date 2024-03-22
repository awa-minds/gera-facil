'use client'

import { useState } from 'react'

export function Contact() {
  const [sentMessage, setSentMessage] = useState('')

  async function handleSubmit(e: any) {
    e.preventDefault()
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.REACT_APP_TOKEN_MAIL, // Usando a chave de ambiente
        name: e.target.name.value,
        email: e.target.email.value,
        subject: 'GERAFACIL',
        message: e.target.message.value,
      }),
    })
    const result = await response.json()
    if (result.success) {
      setSentMessage('Mensagem enviada com sucesso!')
      e.target.reset() // Limpa os campos do formulário após o envio bem-sucedido
    }
  }

  return (
    <>
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
            name="name"
            required
            placeholder="Seu Nome"
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="mb-1 block font-medium">
            Mensagem:
          </label>
          <textarea
            name="message"
            required
            placeholder="Digite a mensagem:"
            className="w-full resize-none rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300">
          Enviar
        </button>
      </form>
      {sentMessage && (
        <div className="bg-green-500 text-white px-4 py-2 fixed bottom-5 right-5 rounded-lg">
          <p>{sentMessage}</p>
        </div>
      )}
    </>
  )
}  