export default function ItemDetail({ item }){
  return (
    <div className="card mx-auto shadow-sm" style={{maxWidth:520}}>
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body text-center">
        <h3 className="card-title">{item.name}</h3>
        <p className="text-muted">{item.description}</p>
        <h4 className="text-success mb-3">${item.price}</h4>
        <button className="btn btn-dark btn-pill w-100">Agregar al carrito</button>
      </div>
    </div>
  )
}
