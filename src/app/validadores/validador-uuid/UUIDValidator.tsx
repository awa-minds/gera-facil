'use client'

import React, { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'
import { validate as validateUUID } from 'uuid'

export const UUIDValidator: React.FC = () => {
  const [uuid, setUuid] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [uuidVersion, setUuidVersion] = useState<number | null>(null)

  const formatUUID = (uuid: string): string => {
    uuid = uuid.replace(/[^\w-]/g, '') // Remove caracteres inválidos
    return uuid
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(uuid)
  }

  const handleChangeUUID = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const uuidFormatted = formatUUID(value)
    setUuid(uuidFormatted)
  }

  const validate = () => {
    const isValid = validateUUID(uuid)
    setIsValid(isValid)
    if (isValid) {
      const version = uuid.charAt(14)
      setUuidVersion(parseInt(version, 16))
    } else {
      setUuidVersion(null)
    }
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={uuid}
              onChange={handleChangeUUID}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar UUID"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        {isValid !== null && (
          <div className="text grid justify-center">
            {isValid ? (
              <span className="text-green-500">
                UUID Válido - Versão {uuidVersion}
              </span>
            ) : (
              <span className="text-red-500">UUID Inválido</span>
            )}
          </div>
        )}

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={validate}
        >
          Validar UUID
        </button>
      </div>
    </div>
  )
}

export default UUIDValidator
