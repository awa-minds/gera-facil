'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const RenavamGenerator = () => {
  const [renavam, setRenavam] = useState('')
  const [mask, setMask] = useState(true)

  const generateRenavam = () => {
    const renavamTemp = gerarNumerosRenavam()
    formatRenavam(renavamTemp)
  }

  const formatRenavam = (value: string) => {
    if (!mask) {
      value = value.toString().replace(/\D/g, '')
    } else {
      value = value.toString()
      value =
        value.substring(0, 2) +
        '.' +
        value.substring(2, 5) +
        '.' +
        value.substring(5, 8) +
        '.' +
        value.substring(8, 11) +
        '-' +
        value.substring(11, 12)
    }
    setRenavam(value)
  }

  const gerarNumerosRenavam = () => {
    let numeros = ''
    for (let i = 0; i < 11; i++) {
      numeros += Math.floor(Math.random() * 10)
    }
    const renavamDigitoVerificador = calculateRenavamDigit(numeros)
    const renavamCompleto = numeros + renavamDigitoVerificador

    return renavamCompleto
  }

  const calculateRenavamDigit = (value: string) => {
    const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0

    for (let i = 0; i < value.length; i++) {
      sum += parseInt(value[i]) * weights[i]
    }

    const remainder = sum % 11
    if (remainder === 0 || remainder === 1) {
      return '0'
    } else {
      const digit = 11 - remainder
      return digit.toString()
    }
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(renavam)
  }

  useEffect(() => {
    if (renavam === '') {
      generateRenavam()
    } else {
      formatRenavam(renavam)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mask])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              defaultValue={renavam}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar RENAVAM"
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
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={generateRenavam}
        >
          Gerar RENAVAM
        </button>
      </div>
    </div>
  )
}
