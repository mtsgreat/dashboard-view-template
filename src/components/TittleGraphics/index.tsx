interface TittleGraphicsProps {
    tittle: string
}

export default function TittleGraphics({tittle}: TittleGraphicsProps ){
    return (
        <h1 className='font-roboto font-semibold text-3xl'>{tittle}</h1>
    )
}