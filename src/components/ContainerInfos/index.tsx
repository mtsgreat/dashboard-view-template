import classNames from "classnames"
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
interface ContainerInfoProps {
    titulo: string,
    valor: string,
    porcentagem: string,
    secundaryColor?: boolean,
    negative?: boolean
}
export default function ContainerInfo({titulo, valor, porcentagem, secundaryColor = false, negative = false}:ContainerInfoProps){
    return (
        <div className={classNames('bg-gray-700 p-5 rounded-2xl h-32', {
            'bg-gray-500 ':secundaryColor
        })}>
            <h4 className="font-roboto text-lg text-white">{titulo}</h4>
            <div className="flex justify-between items-baseline h-14 mt-3">
                <span className="font-roboto text-2xl text-white font-semibold">{valor}</span>
                <p className="flex gap-1 font-roboto text-white"><span>{porcentagem}</span> {negative ? <TrendingDownIcon/> : <TrendingUpIcon/> } </p>
            </div>
        </div>
    )
}