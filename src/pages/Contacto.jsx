import React from 'react'

const Contacto = () => {
  return (
    <div className='grid text-center mt-5 m-5'>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <div className="mb-3 ">
        <label 
          for="exampleFormControlInput1" 
          className="form-label"
        >
        Correo:
        </label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label 
          for="exampleFormControlTextarea1" 
          className="form-label"
        >
        Descripción
        </label>
        <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3">
        </textarea>
        <button 
          type="button"
          className='btn btn-danger mt-3'
        >
        Enviar
        </button>
      </div>
    </div>
  )
}

export default Contacto