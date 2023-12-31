import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { Button, ButtonGroup } from '@chakra-ui/react'

const App = () => { 
  return (
    <div>
      <Navbar/>
      <Button>Agregar</Button>
      <ItemListContainer greeting={"Bienvenido a mi Ecommerce"}/>
      <p className='titulo'>Tienda electronica</p>
    </div>
  )
}

export default App
