'use client'

import { useEffect, useState } from 'react'

export const ContadorCaracteres = () => {
  const [texto, setTexto] = useState('')
  const [caracteres, setCaracteres] = useState(0)
  const [palavras, setPalavras] = useState(0)
  const [linhas, setLinhas] = useState(0)

  useEffect(() => {
    setCaracteres(texto.length)
    setPalavras(texto.split(/\s+/).filter(Boolean).length)
    setLinhas(texto.split(/\n/).length)
  }, [texto])

  return (
    <div>
      <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
        <div className="flex flex-col gap-3">
          <div className="">
            <span>Digite ou cole o texto no campo abaixo:</span>
            <div className="flex items-center justify-between gap-1">
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="h-80 w-full rounded-md border border-gray-500 px-4 py-2"
              />
            </div>
            <div className="flex justify-between gap-1 font-bold">
              <div className="flex">
                <span>Caracteres: </span>
                <span>{caracteres}</span>
              </div>
              <div className="flex">
                <span>Palavras: </span>
                <span>{palavras}</span>
              </div>
              <div className="flex">
                <span>Linhas: </span>
                <span>{linhas}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
