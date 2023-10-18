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

type Props = {
    image: string,
}

export const RandomFox = ({ image }: Props): JSX.Element => {
    return <img src={image} width={320} height="auto" className="rounded" />
}