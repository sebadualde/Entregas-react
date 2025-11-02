import Item from './Item'

export default function ItemList({ items }){
  return (
    <div className="row">
      {items.map(it=> (
        <div key={it.id} className="col-sm-6 col-md-4 mb-4">
          <Item item={it} />
        </div>
      ))}
    </div>
  )
}
