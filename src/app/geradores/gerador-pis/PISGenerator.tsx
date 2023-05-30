'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

// eslint-disable-next-line no-undef
export const PISGenerator = (): JSX.Element => {
  const [pis, setPis] = useState<string>('')
  const [mask, setMask] = useState<boolean>(true)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generatePis = (): string => {
    let pisBase = ''

    // Gerando os 9 dígitos iniciais do PIS
    for (let i = 0; i < 10; i++) {
      pisBase += Math.floor(Math.random() * 10).toString()
    }

    // Calculando o dígito verificador do PIS
    const pisDigitoVerificador = calcularDigitoVerificador(pisBase)

    // Compondo o número completo do PIS
    const pisCompleto = pisBase + pisDigitoVerificador

    return pisCompleto
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formatPIS = (value: string): string => {
    if (!mask) {
      value = value.replace(/\D/g, '')
    } else {
      value = value
        .substring(0, 3)
        .concat(
          '.',
          value.substring(3, 8),
          '.',
          value.substring(8, 10),
          '-',
          value.substring(10, 11),
        )
    }
    return value
  }

  const calcularDigitoVerificador = (base: string): string => {
    let soma = 0
    let peso = 2
    let digitoVerificador = ''

    // Calculando a soma dos produtos dos dígitos pela sequência de pesos
    for (let i = base.length - 1; i >= 0; i--) {
      soma += parseInt(base.charAt(i)) * peso
      peso++
      if (peso > 9) {
        peso = 2
      }
    }

    // Calculando o dígito verificador utilizando o algoritmo do módulo 11
    const resto = soma % 11
    if (resto === 0 || resto === 1) {
      digitoVerificador = '0'
    } else {
      digitoVerificador = (11 - resto).toString()
    }

    return digitoVerificador
  }

  const handleCopyToClipboard = (): void => {
    navigator.clipboard.writeText(pis)
  }

  useEffect(() => {
    if (pis === '') {
      const generatedPis = generatePis()
      setPis(formatPIS(generatedPis))
    }
  }, [formatPIS, generatePis, pis]) // Executar apenas no carregamento inicial

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={pis}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
              onChange={(e) => setPis(e.target.value)}
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar pis"
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
          onClick={() => setPis(formatPIS(generatePis()))}
        >
          Gerar PIS
        </button>
      </div>
    </div>
  )
}
