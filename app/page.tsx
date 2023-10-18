'use client';
import { useState } from 'react'
import { RandomFox } from '../components/RandomFox'

const randomNumber = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setimages] = useState<Array<string>>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
  ])

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello Platzi!
      </h1>

      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      ))}

    </main>
  )
}
