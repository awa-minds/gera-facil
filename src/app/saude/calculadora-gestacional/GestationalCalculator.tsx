/* eslint-disable prettier/prettier */
'use client'

import React, { useState } from 'react'

export const GestationalCalculator: React.FC = () => {
  const [day, setDay] = useState<number | string>('')
  const [month, setMonth] = useState<number | string>('')
  const [year, setYear] = useState<number | string>('')
  const [dueDate, setDueDate] = useState<string>('')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(e.target.value)
    setIsButtonDisabled(!e.target.value || !month || !year)
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value)
    setIsButtonDisabled(!day || !e.target.value || !year)
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
    setIsButtonDisabled(!day || !month || !e.target.value)
  }

  const calculateDueDate = () => {
    if (!day || !month || !year) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    const lastMenstrualDate = new Date(`${year}-${month}-${day}`)
    const dueDate = new Date(
      lastMenstrualDate.getTime() + 280 * 24 * 60 * 60 * 1000,
    )

    const formattedDate = formatDateToBrazilianLocale(dueDate)

    setDueDate(formattedDate)
  }

  const formatDateToBrazilianLocale = (date: Date) => {
    const options = {
      weekday: 'long' as const,
      year: 'numeric' as const,
      month: 'long' as const,
      day: 'numeric' as const,
    };
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
    return formattedDate;
  };

  const renderDays = () => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return days
  }

  const renderMonths = () => {
    const months = [
      { value: '01', label: 'Janeiro' },
      { value: '02', label: 'Fevereiro' },
      { value: '03', label: 'Março' },
      { value: '04', label: 'Abril' },
      { value: '05', label: 'Maio' },
      { value: '06', label: 'Junho' },
      { value: '07', label: 'Julho' },
      { value: '08', label: 'Agosto' },
      { value: '09', label: 'Setembro' },
      { value: '10', label: 'Outubro' },
      { value: '11', label: 'Novembro' },
      { value: '12', label: 'Dezembro' },
    ]
    return months.map((month) => (
      <option key={month.value} value={month.value}>
        {month.label}
      </option>
    ))
  }

  const renderYears = () => {
    const years = []
    const currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return years
  }

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <h1 className="flex items-center justify-center">
          Primeiro dia da última menstruação
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <select
              id="day"
              value={day}
              onChange={handleDayChange}
              className="rounded-md border border-gray-500 px-4 py-2"
            >
              <option value="">Dia</option>
              {renderDays()}
            </select>

            <select
              id="month"
              value={month}
              onChange={handleMonthChange}
              className="rounded-md border border-gray-500 px-4 py-2"
            >
              <option value="">Mês</option>
              {renderMonths()}
            </select>

            <select
              id="year"
              value={year}
              onChange={handleYearChange}
              className="rounded-md border border-gray-500 px-4 py-2"
            >
              <option value="">Ano</option>
              {renderYears()}
            </select>
          </div>
        </div>

        <button
          className={`rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
            }`}
          onClick={calculateDueDate}
          disabled={isButtonDisabled}
        >
          Calcular Data Provável do Parto
        </button>

        {dueDate && (
          <div className="text mt-4 flex flex-col items-center bg-green-100">
            <p>
              <b>Data Provável do Parto</b>
            </p>
            <p>
              <b>{dueDate}</b>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GestationalCalculator
