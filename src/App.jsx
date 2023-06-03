import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import './App.css'
import { Register } from './components/Register'

function App () {
  return (
    <>
      <img
        src='/public/background.svg'
        alt='background'
        className='w-full sticky top-0 h-[18vh] object-cover'
      />
      <Routes>
        <Route
          path='/'
          element={<Welcome />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Welcome />}
        />
      </Routes>
      <footer className='w-full bg-primary fixed bottom-0 h-[30px]' />
    </>
  )
}

export default App
