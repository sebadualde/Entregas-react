import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../assets/logo.svg'

export default function NavBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#111827'}}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Urban Style" width="44" height="44" className="me-2" />
          <span>Urban Style</span>
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Todos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categoria/remeras">Remeras</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categoria/pantalones">Pantalones</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categoria/zapatillas">Zapatillas</Link></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}