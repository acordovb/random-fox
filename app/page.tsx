'use client';
import { useState } from 'react'
import type { MouseEventHandler } from 'react';
import { LazyImage } from '../components/RandomFox'
import { random } from "lodash";

const randomNumber = () => random(1, 123);
const generateId = () => Math.random().toString(36).substring(2, 9)

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
      {images.map(({ id, url }, index) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            onClick={() => console.log("Hey!!!")}
            className="rounded bg-gray-300"
            width={320}
            height="auto"
            onLazyLoad={(img) => {
              console.log(`Image #${index + 1} cargada. Nodo:`, img);
            }}
          />
        </div>
      ))}
    </main>
  )
}
