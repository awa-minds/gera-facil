'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const CNHGenerator = () => {
  const [numeroCNH, setNumeroCNH] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateCNH = () => {
    const numerosAleatorios = generateNumerosAleatorios()
    const cnhBase = numerosAleatorios
    const digitosVerificadores = calcularDigitosVerificadores(cnhBase)

    const cnhFormatada = `${numerosAleatorios.substr(
      0,
      3,
    )}${numerosAleatorios.substr(3, 3)}${numerosAleatorios.substr(
      6,
      3,
    )}-${digitosVerificadores}`

    return cnhFormatada
  }

  const generateNumerosAleatorios = () => {
    let numeros = ''
    for (let i = 0; i < 9; i++) {
      numeros += Math.floor(Math.random() * 10)
    }

    return numeros
  }

  const calcularDigitosVerificadores = (cnhBase: string) => {
    const cnhSemDV = cnhBase.slice(0, 9)

    // Cálculo do primeiro dígito verificador
    let peso = 9
    let soma = 0
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cnhSemDV.charAt(i), 10) * peso
      peso--
    }
    let primeiroDV = soma % 11
    if (primeiroDV > 9) {
      primeiroDV = 0
    }

    // Cálculo do segundo dígito verificador
    peso = 1
    soma = 0
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cnhSemDV.charAt(i), 10) * peso
      peso++
    }
    let segundoDV = soma % 11
    if (segundoDV > 9) {
      segundoDV = 0
    }

    return primeiroDV.toString() + segundoDV.toString()
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(numeroCNH)
  }

  const handleClickGerarCNH = () => {
    setNumeroCNH(generateCNH())
  }

  useEffect(() => {
    setNumeroCNH(generateCNH())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={numeroCNH}
              readOnly
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar cnh"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>
        </div>

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={handleClickGerarCNH}
        >
          Gerar CNH
        </button>
      </div>
    </div>
  )
}

export default CNHGenerator
