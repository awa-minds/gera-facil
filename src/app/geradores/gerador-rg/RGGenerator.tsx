'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const RGGenerator = () => {
  const [rg, setRg] = useState('')
  const [mask, setMask] = useState(true)

  const generateRG = () => {
    const rgTemp = gerarNumerosRG()
    formatRG(rgTemp)
  }

  const formatRG = (value: string) => {
    if (!mask) {
      value = value.replace(/\D/g, '')
    } else {
      value = value.toString()
      value =
        value.substring(0, 2) +
        '.' +
        value.substring(2, 5) +
        '.' +
        value.substring(5, 8) +
        '-' +
        value.substring(8, 9)
    }
    setRg(value)
  }

  const gerarNumerosRG = () => {
    let numeros = ''
    for (let i = 0; i < 9; i++) {
      numeros += Math.floor(Math.random() * 10)
    }
    return numeros
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(rg)
  }

  useEffect(() => {
    if (rg === '') {
      generateRG()
    } else {
      formatRG(rg)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mask])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={rg}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
              readOnly
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-blue-500"
              onClick={handleCopyToClipboard}
              title="Copiar RG"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        <div className="text flex flex-col gap-3">
          <div className="grid grid-cols-2">
            <label className="flex cursor-pointer items-baseline space-x-1.5">
              <input
                type="checkbox"
                className="form-checkbox h-3.5 w-3.5"
                checked={mask}
                onChange={() => setMask(!mask)}
              />
              <span>Pontuação</span>
            </label>
          </div>
        </div>

        <button
          className="rounded-md bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          onClick={generateRG}
        >
          Gerar RG
        </button>
      </div>
    </div>
  )
}
