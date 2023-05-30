'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export const QRCodeGenerator = () => {
  const [qrValue, setQrValue] = useState('')
  const [preValue, setPreValue] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleGenerateQRCode = () => {
    const trimmedValue = qrValue.trim()
    if (!trimmedValue || preValue === trimmedValue) return
    setPreValue(trimmedValue)
    setIsActive(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQrValue(value)
    if (!value.trim()) {
      setIsActive(false)
      setPreValue('')
    }
  }

  return (
    <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
      <div className="flex flex-col gap-3">
        <header>
          <p>Cole uma url ou digite um texto para criar o QR Code</p>
        </header>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            spellCheck="false"
            placeholder="Digite um texto ou URL"
            value={qrValue}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-500 px-4 py-2"
          />
          <button
            className="w-full rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
            onClick={handleGenerateQRCode}
          >
            Gerar QR Code
          </button>
        </div>

        <div className={`flex justify-center ${isActive ? 'block' : 'hidden'}`}>
          <Image
            width={200}
            height={200}
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${
              qrValue || 'www.gerafacil.com.br'
            }`}
            alt="qr-code"
          />
        </div>
      </div>
    </div>
  )
}
