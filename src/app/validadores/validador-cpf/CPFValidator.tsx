'use client'

import React, { useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'

export const CPFValidator: React.FC = () => {
  const [cpf, setCPF] = useState('')
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const formatarCPF = (cpf: string): string => {
    cpf = cpf.replace(/\D/g, '') // Remover caracteres não numéricos

    if (cpf.length > 3 && cpf.length <= 6) {
      cpf = cpf.replace(/(\d{3})(\d+)/, '$1.$2') // Adicionar o primeiro ponto
    } else if (cpf.length > 6 && cpf.length <= 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3') // Adicionar o primeiro e segundo ponto
    } else if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4') // Adicionar o primeiro e segundo ponto e o hífen
    }

    return cpf
  }

  const validarCPF = (cpf: string): boolean => {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/\D/g, '')

    // Verificar o tamanho do CPF
    if (cpf.length !== 11) {
      return false
    }

    // Verificar dígitos repetidos (caso comum de CPF inválido)
    if (/^(\d)\1+$/.test(cpf)) {
      return false
    }

    // Verificar dígitos verificadores
    let soma = 0
    let resto: number

    // Verificação do primeiro dígito
    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    }
    resto = (soma * 10) % 11

    if (resto === 10 || resto === 11) {
      resto = 0
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false
    }

    soma = 0

    // Verificação do segundo dígito
    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    }
    resto = (soma * 10) % 11

    if (resto === 10 || resto === 11) {
      resto = 0
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false
    }

    return true
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(cpf)
  }

  const handleChangeCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const cpfFormatado = formatarCPF(value)
    setCPF(cpfFormatado)
  }

  const validateCPF = () => {
    const isValid = validarCPF(cpf)
    setIsValid(isValid)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={cpf}
              maxLength={14}
              onChange={handleChangeCPF}
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

        {isValid !== null && (
          <div className="text grid justify-center">
            {isValid ? (
              <span className="text-green-500">CPF Válido</span>
            ) : (
              <span className="text-red-500">CPF Inválido</span>
            )}
          </div>
        )}

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={validateCPF}
        >
          Validar CPF
        </button>
      </div>
    </div>
  )
}
