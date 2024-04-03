import React from 'react'

const Home = () => {
  return (
    <div className='grid text-center mt-5'>
      <h1>Bienvenido a <strong>Happy Cake</strong></h1>
      <p>El lugar de los pasteles felices</p>
      <img 
        src="./src/assets/img/cake.png" 
        alt="cake-icons"
        width={75} 
      />
    </div>
  )
}

export default Home