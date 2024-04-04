import React from 'react'

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1>El sitio al que quieres acceder no existe.</h1>
        <p>Intenta ir a Home o Contacto en el menú superior izquierdo</p>
        <img 
            src="./src/assets/img/no-content.png" 
            alt="cake-icons"
            width={75} 
        />
    </div>
  )
}

export default NotFound