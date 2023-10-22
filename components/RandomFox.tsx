// 'use client';
//The first way to develop a componen is like implicit function
// export const RandomFox = () => {
//     return <img></img>
// }

// // This is the thirt way to develop a componen. This way use react type component to set what type of constant expotort variable is the componen
// import type {FunctionComponent} from 'react'
// export const RandomFox: FunctionComponent = () => {
//     return <img></img>
// }

// The last way to develop a react component with typescript  is similar to the thirt way we use the export type from the react library
// import type {FC} from 'react'
// export const RandomFox: FC = (): JSX.Element => {
//     return <img></img>
// }

// The second way to develop a componen is with explicit type to return in a function

import { useRef, useEffect, useState } from 'react'

type Props = {
    image: string,
}

export const RandomFox = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [src, setsrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
    useEffect(() => {
        // nuevo obervador
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // en cada interseccion se hace un console log
                if (entry.isIntersecting) {
                    setsrc(image)
                }
            })
        })
        // el observador debe estar pendiente del nodo
        if (node.current) {
            observer.observe(node.current)
        }
        // desconectarse del componente y hacer un rerednder
        return () => {
            observer.disconnect()
        }

    }, [image])
    return <img ref={node} src={src} width={320} height="auto" className="rounded bg-gray-300" />
}