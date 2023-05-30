'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const CPFGenerator = () => {
  const [cpf, setCpf] = useState('')
  const [mask, setMask] = useState(true)

  const generateCPF = () => {
    const cpfTemp = gerarNumerosCPF()
    formatCPF(cpfTemp)
  }

  const formatCPF = (value: string) => {
    if (!mask) {
      value = value.toString().replace(/\D/g, '')
    } else {
      value = value.toString()
      value =
        value.substring(0, 3) +
        '.' +
        value.substring(3, 6) +
        '.' +
        value.substring(6, 9) +
        '-' +
        value.substring(9, 11)
    }
    setCpf(value)
  }

  const gerarNumerosCPF = () => {
    let numeros = gerar9NumerosAleatorios()
    const digito1 = calcularDigitoVerificador(numeros)
    numeros += digito1
    const digito2 = calcularDigitoVerificador(numeros)
    numeros += digito2
    return numeros
  }

  const gerar9NumerosAleatorios = () => {
    let numeros = ''
    for (let i = 0; i < 9; i++) {
      numeros += Math.floor(Math.random() * 10)
    }
    return numeros
  }

  const calcularDigitoVerificador = (value: string | any[]) => {
    let soma = 0
    let pesoInicial = value.length + 1
    for (let i = 0; i < value.length; i++) {
      soma += value[i] * pesoInicial
      pesoInicial--
    }
    const resto = soma % 11
    let digitoVerificador = 11 - resto
    if (digitoVerificador > 9) {
      digitoVerificador = 0
    }
    return digitoVerificador
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(cpf)
  }

  useEffect(() => {
    if (cpf === '') {
      generateCPF()
    } else {
      formatCPF(cpf)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mask])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              defaultValue={cpf}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar cpf"
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
          onClick={generateCPF}
        >
          Gerar CPF
        </button>
      </div>
    </div>
  )
}
