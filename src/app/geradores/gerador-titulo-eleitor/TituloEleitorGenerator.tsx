'use client'

import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const TituloEleitorGenerator = () => {
  const [titulo, setTitulo] = useState('')
  const [mask, setMask] = useState(true)

  const generateTitulo = () => {
    const tituloTemp = gerarNumerosTitulo()
    formatTitulo(tituloTemp)
  }

  const formatTitulo = (value: string) => {
    if (!mask) {
      value = value.toString().replace(/\D/g, '')
    } else {
      value = value.toString()
      value =
        value.substring(0, 4) +
        ' ' +
        value.substring(4, 8) +
        ' ' +
        value.substring(8, 12)
    }
    setTitulo(value)
  }

  const gerarNumerosTitulo = () => {
    let numeros = gerar8NumerosAleatorios()
    const estado = gerarEstado()
    numeros += estado
    const digitosVerificadores = calcularDigitosVerificadores(numeros)
    numeros += digitosVerificadores
    return numeros
  }

  const gerar8NumerosAleatorios = () => {
    let numeros = ''
    for (let i = 0; i < 8; i++) {
      numeros += Math.floor(Math.random() * 10)
    }
    return numeros
  }

  const gerarEstado = () => {
    const estados = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
    ]
    return estados[Math.floor(Math.random() * estados.length)]
  }

  const calcularDigitosVerificadores = (value: string) => {
    const base = value.split('').map(Number)

    // Calcular o primeiro dígito verificador
    let soma = 0
    const multiplicadores1 = [2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < 8; i++) {
      soma += base[i] * multiplicadores1[i]
    }
    let resto = soma % 11
    const dv1 = resto === 10 ? 0 : resto

    // Calcular o segundo dígito verificador
    soma = 0
    const multiplicadores2 = [7, 8, 9]
    for (let i = 8; i < 10; i++) {
      soma += base[i] * multiplicadores2[i - 8]
    }
    soma += dv1 * 9
    resto = soma % 11
    const dv2 = resto === 10 ? 0 : resto

    return `${dv1}${dv2}`
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(titulo)
  }

  useEffect(() => {
    if (titulo === '') {
      generateTitulo()
    } else {
      formatTitulo(titulo)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mask])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              defaultValue={titulo}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar Título de Eleitor"
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
          onClick={generateTitulo}
        >
          Gerar Título de Eleitor
        </button>
      </div>
    </div>
  )
}
