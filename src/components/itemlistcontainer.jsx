import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const productos = [
  { id:1, name:'Remera Roja', category:'remeras', price:12000, image:'https://source.unsplash.com/600x600/?tshirt,red' },
  { id:2, name:'Pantalón Azul', category:'pantalones', price:18000, image:'https://source.unsplash.com/600x600/?pants,blue' },
  { id:3, name:'Zapatillas Blancas', category:'zapatillas', price:25000, image:'https://source.unsplash.com/600x600/?sneakers,white' },
  { id:4, name:'Remera Negra', category:'remeras', price:11000, image:'https://source.unsplash.com/600x600/?tshirt,black' }
]

export default function ItemListContainer({ greeting }){
  const { categoriaId } = useParams()
  const [items, setItems] = useState([])

  useEffect(()=>{
    const p = new Promise(res => setTimeout(()=> res(productos), 700))
    p.then(data => setItems(categoriaId ? data.filter(d=>d.category===categoriaId) : data))
  },[categoriaId])

  return (
    <div className="container">
      <h2 className="header-title">{categoriaId ? `Categoría: ${categoriaId}` : greeting || 'Todos los productos'}</h2>
      <ItemList items={items} />
    </div>
  )
}
