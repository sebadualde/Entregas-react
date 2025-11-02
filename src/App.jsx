// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'

function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container-main">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Urban Style" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
