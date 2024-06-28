'use client'

import CryptoJS from 'crypto-js'
import React, { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const HashGenerator = () => {
  const [inputText, setInputText] = useState('')
  const [hashes, setHashes] = useState({
    md5: '',
    sha1: '',
    sha224: '',
    sha256: '',
    sha384: '',
    sha512: '',
  })

  const generateHashes = (text: string) => {
    setHashes({
      md5: text ? CryptoJS.MD5(text).toString(CryptoJS.enc.Hex) : '',
      sha1: text ? CryptoJS.SHA1(text).toString(CryptoJS.enc.Hex) : '',
      sha224: text ? CryptoJS.SHA224(text).toString(CryptoJS.enc.Hex) : '',
      sha256: text ? CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex) : '',
      sha384: text ? CryptoJS.SHA384(text).toString(CryptoJS.enc.Hex) : '',
      sha512: text ? CryptoJS.SHA512(text).toString(CryptoJS.enc.Hex) : '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setInputText(text)
    generateHashes(text)
  }

  const handleCopyToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={inputText}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
              placeholder="Digite o texto para gerar o hash"
            />
          </div>
        </div>

        {Object.entries(hashes).map(([key, hash]) => (
          <div key={key} className="hash-container">
            <div className="flex items-center justify-between">
              <span className="text-center font-bold">{key.toUpperCase()}</span>
              <div
                className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
                onClick={() => handleCopyToClipboard(hash)}
                title={`Copiar ${key} hash`}
              >
                <RxClipboardCopy color="white" />
              </div>
            </div>
            <div className="hash-text-container">
              <span className="hash-text">{hash}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hash-container {
          overflow-x: auto;
          max-width: 100%;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ccc;
        }

        .hash-text-container {
          max-width: 100%;
          overflow-x: auto;
        }

        .hash-text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
        }

        .font-bold {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}
