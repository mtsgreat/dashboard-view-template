import ContainerInfo from "../ContainerInfos";

export default function CardsInfo(){
    return (
        <>
        <ContainerInfo 
        titulo='Views' 
        valor='721K' 
        porcentagem='+11.01%' 
        secundaryColor
      />
      <ContainerInfo 
        titulo='Visits' 
        valor='306K' 
        porcentagem='-0.03%' 
        negative
      />
      <ContainerInfo 
        titulo='News Users' 
        valor='1,150' 
        porcentagem='+15.02%' 
        secundaryColor/>
      <ContainerInfo 
        titulo='Active Users' 
        valor='239K' 
        porcentagem='+6.08%' 
      />
      </>
    )
}