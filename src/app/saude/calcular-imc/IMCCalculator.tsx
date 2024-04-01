/* eslint-disable prettier/prettier */
'use client'

import React, { useState } from 'react'

export const IMCCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | string>('0')
  const [height, setHeight] = useState<number | string>('0')
  const [result, setResult] = useState<string>('')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setWeight(value)
    setIsButtonDisabled(
      value === '' || height === '' || value === '0' || height === '0',
    )
  }

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHeight(value)
    setIsButtonDisabled(
      value === '' || weight === '' || value === '0' || weight === '0',
    )
  }

  const handleWeightFocus = () => {
    if (weight === '0') {
      setWeight('')
    }
  }

  const handleHeightFocus = () => {
    if (height === '0') {
      setHeight('')
    }
  }

  const calculateIMC = () => {
    const weightValue = typeof weight === 'string' ? parseFloat(weight) : weight
    const heightValue = typeof height === 'string' ? parseFloat(height) : height

    const imc = weightValue / (heightValue / 100) ** 2
    let condition = ''
    let bgColor = ''
    let textColor = ''

    if (imc < 18.49) {
      condition = 'Você está abaixo do peso ideal'
      bgColor = 'bg-red-200' // Vermelho claro
      textColor = '#a94442' // Vermelho vivo
    } else if (imc > 18.49 && imc < 24.9) {
      condition = 'Parabéns, você está no seu peso ideal'
      bgColor = 'bg-green-200' // Verde claro
      textColor = '#3c763d' // Verde vivo
    } else if (imc >= 24.9 && imc < 29.9) {
      condition = 'Você está acima do seu peso ideal'
      bgColor = 'bg-yellow-200' // Amarelo claro
      textColor = '#8a6d3b' // Amarelo vivo
    } else if (imc >= 29.9 && imc < 34.9) {
      condition = 'Obesidade Grau I'
      bgColor = 'bg-red-200' // Vermelho claro
      textColor = '#a94442' // Vermelho vivo
    } else if (imc >= 34.9 && imc < 39.9) {
      condition = 'Obesidade Grau II'
      bgColor = 'bg-red-200' // Vermelho claro
      textColor = '#a94442' // Vermelho vivo
    } else {
      condition = 'Obesidade Grau III'
      bgColor = 'bg-red-200' // Vermelho claro
      textColor = '#a94442' // Vermelho vivo
    }

    setResult(
      `<div class="p-4 rounded ${bgColor} ${textColor} flex-grow flex flex-col justify-center items-center"> <!-- Adicionado flex-grow -->
        <span class="text-lg font-bold"><span class="font-semibold">${imc.toFixed(
        2,
      )}</span></span><br>
        <span class="text-base">${condition}</span>
      </div>`,
    )
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <label htmlFor="weight">Peso (kg):</label>
            <br></br>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={handleWeightChange}
              onFocus={handleWeightFocus}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="height">Altura (cm):</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={handleHeightChange}
              onFocus={handleHeightFocus}
              className="w-full rounded-md border border-gray-500 px-4 py-2"
            />
          </div>
        </div>

        <button
          // eslint-disable-next-line prettier/prettier
          className={`rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
            // eslint-disable-next-line prettier/prettier
            }`}
          onClick={calculateIMC}
        >
          Calcular IMC
        </button>

        {result && (
          <div
            className="text mt-4 flex justify-center"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}

        <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Resultado</th>
                <th className="border px-4 py-2">Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Abaixo de 18,5</td>
                <td className="border px-4 py-2">Abaixo do peso ideal</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entre 18,5 e 24,9</td>
                <td className="border px-4 py-2">Peso ideal</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entre 25,0 e 29,9</td>
                <td className="border px-4 py-2">Sobrepeso</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entre 30,0 e 34,9</td>
                <td className="border px-4 py-2">Obesidade grau I</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entre 35,0 e 39,9</td>
                <td className="border px-4 py-2">Obesidade grau II</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entre 40 e acima</td>
                <td className="border px-4 py-2">Obesidade grau III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default IMCCalculator
