import './App.css'

function App () {
  return (
    <>
      <img
        src='/public/background.svg'
        alt='background'
        className='w-full sticky top-0 h-[18vh] object-cover'
      />
      <section className='flex flex-col justify-center items-center m-4'>
        <div className='flex flex-col items-center justify-between border-primary border p-5 rounded-3xl max-w-[600px] w-full h-[75vh] shadow-2xl'>
          <div className='flex gap-4 items-center justify-center text-secondary text-2xl text-center'>
            <span className='icon-book text-6xl' />
            <h1 className='font-bold'>Cuaderno <br /> Digital</h1>
          </div>
          <h2 className='text-xl font-bold'>Bienvenido a tu cuaderno digital</h2>
          <p className='text-center'>Lleva tu cuaderno en la palma de tu mano. Agrega, organiza y accede a tus notas de forma fácil y rápida con nuestra página web de Cuaderno Digital. Toma el control de tus ideas estés donde estés.</p>
          <button>Registrarse</button>
          <button>Iniciar sesión</button>
        </div>
      </section>
      <footer className='w-full bg-primary sticky bottom-0 h-[30px]' />
    </>
  )
}

export default App
