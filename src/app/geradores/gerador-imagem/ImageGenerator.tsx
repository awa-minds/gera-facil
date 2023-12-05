'use client'

import React, { useState } from 'react'

const apiKey = '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'

const maxImages = 4 // Number of images to generate for each prompt

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Function to clear image grid
function clearImageGrid(): void {
  const imageGrid = document.getElementById('image-grid')
  if (imageGrid) {
    imageGrid.innerHTML = ''
  }
}

// Function to generate images
async function generateImages(input: string): Promise<void> {
  clearImageGrid()

  const loading = document.getElementById('loading')
  if (loading) {
    loading.style.display = 'block'
  }

  const imageUrls: string[] = []

  for (let i = 0; i < maxImages; i++) {
    // Generate a random number between 1 and 10000 and append it to the prompt
    const randomNumber = getRandomNumber(1, 10000)
    const prompt = `${input} ${randomNumber}`
    // We added a random number to the prompt to create different results
    const response = await fetch(
      'https://api-inference.huggingface.co/models/prompthero/openjourney',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ inputs: prompt }),
      },
    )

    if (!response.ok) {
      alert('Failed to generate image!')
    }

    const blob = await response.blob()
    const imgUrl = URL.createObjectURL(blob)
    imageUrls.push(imgUrl)

    const img = document.createElement('img')
    img.src = imgUrl
    img.alt = `art-${i + 1}`
    img.onclick = () => downloadImage(imgUrl, i)
    img.style.width = 'calc(50% - 3px)'
    img.style.height = 'auto'
    const imageGrid = document.getElementById('image-grid')
    if (imageGrid) {
      imageGrid.appendChild(img)
    }
  }

  if (loading) {
    loading.style.display = 'none'
  }
}

function downloadImage(imgUrl: string, imageNumber: number): void {
  const link = document.createElement('a')
  link.href = imgUrl
  // Set the filename based on the selected image
  link.download = `image-${imageNumber + 1}.jpg`
  link.click()
}

export const GenerateImage = () => {
  const [input, setInput] = useState<string>('')

  const handleGenerateClick = () => {
    generateImages(input)
  }

  return (
    <div className="m-auto flex min-w-[380px] max-w-lg flex-col gap-6 rounded-md bg-white p-6">
      <div className="flex flex-col gap-3">
        <header>
          <p>
            Escreva aqui sua solicitação para gerar imagens com o poder da IA
          </p>
        </header>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            spellCheck="false"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-md border border-gray-500 px-4 py-2"
          />
          <button
            className="w-full rounded-md bg-awa-100 px-6 py-2 text-white transition-colors hover:bg-awa-300"
            onClick={handleGenerateClick}
          >
            Gerar Imagem
          </button>
          <div id="loading" style={{ display: 'none' }}>
            Loading...
          </div>
          <div
            id="image-grid"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
