import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
        <div className="container-fluid grid justify-content-between">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item d-flex align-items-center">
                <img 
                  src="./src/assets/img/home.png" 
                  alt="cake-icons"
                  width={15}
                />
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <img 
                  src="./src/assets/img/contact.png" 
                  alt="cake-icons"
                  width={15}
                />
                <Link className="nav-link active" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className='d-flex align-items-center'>
            <Link className="navbar-brand" to="/">Happy Cake</Link>
            <img 
              src="./src/assets/img/cake-brand.png" 
              alt="cake-icons"
              width={25}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar