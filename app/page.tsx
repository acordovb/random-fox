'use client';
import { useState } from 'react'
import type { MouseEventHandler } from 'react';
import { RandomFox } from '../components/RandomFox'

const randomNumber = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9)

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setimages] = useState<Array<ImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    }
    setimages([
      ...images,
      newImageItem,
    ])
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello Platzi!
      </h1>
      <button onClick={addNewFox}> Add new Fox</button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  )
}
