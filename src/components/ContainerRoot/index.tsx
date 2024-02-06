
interface childrenProps {
    children: React.ReactNode
}

export default function ContainerRoot({ children }: childrenProps) {
    return (
        <div className='flex flex-col lg:grid lg:grid-cols-4 gap-4 p-4 bg-black'>
            {children}
        </div>
    )
}