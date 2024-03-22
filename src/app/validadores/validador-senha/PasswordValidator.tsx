'use client'

import { useState } from 'react'
import { IoMdCheckmarkCircleOutline, IoIosRadioButtonOff } from 'react-icons/io'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import { RxClipboardCopy } from 'react-icons/rx'

type Requirement = {
  regex: RegExp
  index: number
}

const requirements: Requirement[] = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[A-Z]/, index: 3 }, // At least one uppercase letter
  { regex: /[^A-Za-z0-9]/, index: 4 }, // At least one special character
]

export const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // eslint-disable-next-line no-undef
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const isPasswordValid = () => {
    return requirements.map((requirement) => {
      const isValid = requirement.regex.test(password)
      return {
        isValid,
        index: requirement.index,
      }
    })
  }

  const getRequirementText = (index: number) => {
    const texts = [
      'Mínimo de 8 caracteres',
      'Ao menos 1 número',
      'Ao menos 1 letra minúscula',
      'Ao menos 1 letra maiúscula',
      'Ao menos 1 caracter especial',
    ]
    return texts[index]
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-1">
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite a senha"
                value={password}
                onChange={handlePasswordChange}
                className="w-full rounded-md border border-gray-500 px-4 py-2 pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform items-center justify-center rounded-md"
                onClick={togglePasswordVisibility}
                title={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>
            </div>

            <div
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-md bg-awa-100 text-white"
              onClick={handleCopyToClipboard}
              title="Copiar senha"
            >
              <RxClipboardCopy />
            </div>
          </div>
        </div>

        <div className="text flex flex-col gap-3">
          <div className="">
            <label className="flex items-baseline space-x-1.5">
              <ul className="requirement-list">
                {requirements.map((requirement) => {
                  const { isValid } = isPasswordValid().find(
                    (item) => item.index === requirement.index,
                  )!
                  const requirementText = getRequirementText(requirement.index)
                  return (
                    <li
                      key={requirement.index}
                      className={`flex items-center ${
                        isValid ? 'text-green-500' : 'text-awa-300'
                      }`}
                    >
                      {isValid ? (
                        <IoMdCheckmarkCircleOutline className="mr-2 h-4 w-4" />
                      ) : (
                        <IoIosRadioButtonOff className="mr-2 h-4 w-4" />
                      )}
                      <span>{requirementText}</span>
                    </li>
                  )
                })}
              </ul>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
