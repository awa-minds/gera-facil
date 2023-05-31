'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const CNPJGenerator = () => {
  const [cnpj, setCnpj] = useState('')
  const [mask, setMask] = useState(true)

  const generateCNPJ = () => {
    const cnpjTemp = gerarNumerosCNPJ()
    formatCNPJ(cnpjTemp)
  }

  const formatCNPJ = (value: string) => {
    if (!mask) {
      value = value.replace(/\D/g, '')
    } else {
      value = value
        .substring(0, 2)
        .concat(
          '.',
          value.substring(2, 5),
          '.',
          value.substring(5, 8),
          '/',
          value.substring(8, 12),
          '-',
          value.substring(12, 14),
        )
    }
    setCnpj(value)
  }

  const gerarNumerosCNPJ = () => {
    const cnpjBase = gerarNumeroAleatorio(8) + '0001'

    const digito1 = calcularPrimeiroDigitoVerificador(cnpjBase)
    const digito2 = calcularSegundoDigitoVerificador(cnpjBase + digito1)

    return cnpjBase + digito1.toString() + digito2.toString()
  }

  function gerarNumeroAleatorio(quantidadeDigitos: number) {
    let numero = ''
    for (let i = 0; i < quantidadeDigitos; i++) {
      numero += Math.floor(Math.random() * 10)
    }
    return numero
  }

  function calcularPrimeiroDigitoVerificador(cnpjBase: string) {
    const peso = [5, 4, 3, 2, 9, 8, 7, 6]
    const soma = calcularSomaDigito(cnpjBase, peso)
    const resto = soma % 11
    const digito = resto < 2 ? 0 : 11 - resto
    return digito
  }

  function calcularSegundoDigitoVerificador(cnpjBase: string) {
    const peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    const soma = calcularSomaDigito(cnpjBase, peso)
    const resto = soma % 11
    const digito = resto < 2 ? 0 : 11 - resto
    return digito
  }

  function calcularSomaDigito(cnpjBase: string | any[], peso: string | any[]) {
    let soma = 0
    for (let i = 0; i < cnpjBase.length; i++) {
      soma += parseInt(cnpjBase[i]) * peso[i % peso.length]
    }
    return soma
  }

  const handleCopyToClipboard = (): void => {
    navigator.clipboard.writeText(cnpj)
  }

  useEffect(() => {
    if (cnpj === '') {
      generateCNPJ()
    } else {
      formatCNPJ(cnpj)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mask])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              defaultValue={cnpj}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar cnpj"
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
          onClick={generateCNPJ}
        >
          Gerar CNPJ
        </button>
      </div>
    </div>
  )
}
