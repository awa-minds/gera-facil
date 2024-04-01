'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'
import { v4 as uuidv4 } from 'uuid'

export const UUIDGenerator = () => {
  const [uuid, setUuid] = useState('')
  const [, setCopied] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)

  const generateUUID = () => {
    const uuidStr = uuidv4()
    return uuidStr
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(uuid)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    setButtonClicked(true)
    setTimeout(() => setButtonClicked(false), 300)
  }

  const handleClickGenerateUUID = () => {
    setUuid(generateUUID())
    setCopied(false)
  }

  useEffect(() => {
    setUuid(generateUUID())
  }, [])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={uuid}
              readOnly
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              // eslint-disable-next-line prettier/prettier
              className={`flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100 ${buttonClicked ? 'scale-90' : ''
                // eslint-disable-next-line prettier/prettier
                }`}
              onClick={handleCopyToClipboard}
              title="Copiar UUID"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={handleClickGenerateUUID}
        >
          Gerar UUID
        </button>
      </div>
    </div>
  )
}

export default UUIDGenerator
