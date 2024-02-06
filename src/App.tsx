
import './App.css'
import CardsGraphics from './components/CardsGraphics';
import CardsInfo from './components/CardsInfo';
import ContainerRoot from './components/ContainerRoot'

function App() {
  return (
    <ContainerRoot>
       <CardsInfo/>
       <CardsGraphics/>
    </ContainerRoot>
  )
}

export default App
