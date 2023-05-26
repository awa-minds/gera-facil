'use client'

import { CheckboxGroup } from '../CheckboxGroup'
import { useEffect, useState } from 'react'
import { RxClipboardCopy } from 'react-icons/rx'
import { Range } from 'react-range'

export const PasswordGenerator = () => {
  const [options, setOptions] = useState([
    { id: 'lowercase', label: 'Minúsculo (a-z)', checked: true },
    { id: 'uppercase', label: 'Maiúsculo (A-Z)', checked: false },
    { id: 'numbers', label: 'Números (0-9)', checked: false },
    { id: 'symbols', label: 'Símbolos (!-$^+)', checked: false },
    { id: 'exc-duplicate', label: 'Excluir duplicados', checked: false },
    { id: 'spaces', label: 'Incluir espaços', checked: false },
  ])
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [passwordSecure, setPasswordSecure] = useState(1)
  const [percentage, setPercentage] = useState(0)
  const [percentageColor, setPercentageColor] = useState('')

  const characters: { [key: string]: string } = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '^!$%&|[](){}:;.,*+-#@<>~',
  }

  const generateComplexity = () => {
    if (passwordLength <= 8) {
      setPercentage(33)
      setPercentageColor('bg-red-500')
    } else if (passwordLength <= 16) {
      setPercentage(50)
      setPercentageColor('bg-yellow-500')
    } else {
      setPercentage(100)
      setPercentageColor('bg-green-500')
    }
  }

  const generatePassword = () => {
    let staticPassword = ''
    let randomPassword = ''
    let excludeDuplicate = false

    options.forEach((option) => {
      if (option.checked) {
        switch (option.id) {
          case 'lowercase':
          case 'uppercase':
          case 'numbers':
          case 'symbols':
            staticPassword += characters[option.id]
            break
          case 'spaces':
            staticPassword += `  ${staticPassword}  `
            break
          default:
            excludeDuplicate = true
        }
      }
    })

    for (let i = 0; i < passwordLength; i++) {
      const randomChar =
        staticPassword[Math.floor(Math.random() * staticPassword.length)]

      if (excludeDuplicate) {
        if (!randomPassword.includes(randomChar) || randomChar === ' ') {
          randomPassword += randomChar
        } else {
          i--
        }
      } else {
        randomPassword += randomChar
      }
    }

    setPassword(randomPassword)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    generateComplexity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordLength])

  useEffect(() => {
    generatePassword()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, passwordLength])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <input
              value={password}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100"
              onClick={handleCopyToClipboard}
              title="Copiar senha"
            >
              <RxClipboardCopy color="white" />
            </div>
          </div>

          <Range
            step={1}
            min={1}
            max={3}
            values={[passwordSecure]}
            onChange={(values) => setPasswordSecure(values[0])}
            renderTrack={({ props }) => (
              <div
                {...props}
                className="h-1.5 rounded border border-slate-300 bg-slate-200"
              >
                <div
                  className={`h-1 w-[${percentage}%] ${percentageColor} transition-all duration-500`}
                ></div>
              </div>
            )}
            renderThumb={({ props }) => <div {...props} />}
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h2>Tamanho da Senha</h2>
            <span>{passwordLength}</span>
          </div>

          <Range
            step={1}
            min={1}
            max={30}
            values={[passwordLength]}
            onChange={(values) => setPasswordLength(values[0])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1.5 rounded border border-slate-300 bg-slate-200"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div {...props} className="h-4 w-4 rounded-full bg-awa-100" />
            )}
          />
        </div>

        <div className="text flex flex-col gap-3">
          <h2>Configurações da Senha</h2>
          <div className="grid grid-cols-2">
            <CheckboxGroup options={options} setOptions={setOptions} />
          </div>
        </div>

        <button
          className="rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
          onClick={generatePassword}
        >
          Gerar Senha
        </button>
      </div>
    </div>
  )
}
