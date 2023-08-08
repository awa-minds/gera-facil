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
      value = value.substring(0, 10) + '-' + value.substring(10)
    }
    setRenavam(value)
  }

  const gerarNumerosRenavam = () => {
    let numeros = ''
    for (let i = 0; i < 10; i++) {
      numeros += Math.floor(Math.random() * 10)
    }
    console.log(numeros)
    const renavamDigitoVerificador = calculateRenavamDigit(numeros)
    console.log(renavamDigitoVerificador)
    const renavamCompleto = numeros + renavamDigitoVerificador

    return renavamCompleto
  }

  type ClearValueOptions = {
    fillZerosAtLeft?: boolean
    trimAtRight?: boolean
    rejectEmpty?: boolean
  }

  function clearValue(
    value: string | number,
    length: number,
    options?: ClearValueOptions,
  ): string {
    let stringValue = String(value).substr(0, length)

    if (options?.trimAtRight) {
      stringValue = stringValue.trimRight()
    }

    if (options?.rejectEmpty && stringValue === '') {
      throw new Error('Value is empty.')
    }

    if (options?.fillZerosAtLeft && stringValue.length < length) {
      stringValue = stringValue.padStart(length, '0')
    }

    return stringValue
  }

  function sumElementsByMultipliers(
    value: string,
    multiplier: string | number[],
  ): number {
    if (typeof multiplier === 'string') {
      multiplier = multiplier.split('').map((n) => Number(n))
    }

    return multiplier.reduce(
      (accu: number, curr: any, i: number) =>
        accu + curr * Number(value.charAt(i)),
      0,
    )
  }

  const calculateRenavamDigit = (value: string | number): string => {
    const renavam = clearValue(value, 10, {
      fillZerosAtLeft: true,
      trimAtRight: true,
      rejectEmpty: true,
    })

    const sum1 =
      sumElementsByMultipliers(renavam, [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]) * 10
    const dv1 = sum1 % 11 >= 10 ? 0 : sum1 % 11

    return `${dv1}`
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
