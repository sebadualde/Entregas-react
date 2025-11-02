import { useState, useEffect } from 'react'

export default function CartWidget(){
  const [count, setCount] = useState(() => {
    const v = localStorage.getItem('cartCount')
    return v ? parseInt(v,10) : 0
  })

  useEffect(()=>{
    localStorage.setItem('cartCount', String(count))
  },[count])

  return (
    <div className="d-flex align-items-center ms-3">
      <button className="btn btn-outline-light position-relative btn-pill" onClick={()=>setCount(c=>c+1)} aria-label="Carrito">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .49.598l-1.5 6A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.49-.402L1.01 1.607 1.01 1.607 1 1.5H.5z"/>
        </svg>
        {count>0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count}</span>}
      </button>
    </div>
  )
}
