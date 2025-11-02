import { Link } from 'react-router-dom'

export default function Item({ item }){
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{item.name}</h5>
        <p className="text-muted">${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-dark btn-pill w-100">Ver detalle</Link>
      </div>
    </div>
  )
}
