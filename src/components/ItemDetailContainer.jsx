import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const productos = [
  { id:1, name:'Remera Roja', category:'remeras', price:12000, description:'Remera de algodón, corte holgado.', image:'https://source.unsplash.com/800x800/?tshirt,red' },
  { id:2, name:'Pantalón Azul', category:'pantalones', price:18000, description:'Pantalón cómodo estilo cargo.', image:'https://source.unsplash.com/800x800/?pants,blue' },
  { id:3, name:'Zapatillas Blancas', category:'zapatillas', price:25000, description:'Zapatillas urbanas, suela cómoda.', image:'https://source.unsplash.com/800x800/?sneakers,white' },
  { id:4, name:'Remera Negra', category:'remeras', price:11000, description:'Remera básica negra.', image:'https://source.unsplash.com/800x800/?tshirt,black' }
]

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(()=>{
    const p = new Promise(res=> setTimeout(()=> res(productos.find(x=> x.id === parseInt(id))), 700))
    p.then(r=> setItem(r))
  },[id])

  return (
    <div className="container">
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  )
}