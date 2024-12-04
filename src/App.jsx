import React from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Four from './pages/Four'
import Five from './pages/Five'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  const navigate = useNavigate()
  function handleHome() {
    navigate('/')
  }
  return (
    <div>
      <header className=' bg-blue-500'>
        <div className='max-w-[1200px] w-full mx-auto flex justify-between items-center py-4'>
          <h1 onClick={handleHome} className='text-white text-[28px] cursor-pointer select-none'>LOGO</h1>
          <ul className='flex justify-between max-w-[700px] w-full capitalize text-white text-[17px] items-center'>
            <NavLink to='/' className='hover:underline'>Birinchi vazifa</NavLink>
            <NavLink to='/two' className='hover:underline'>Ikkinchi vazifa</NavLink>
            <NavLink to='/three' className='hover:underline'>Uchinchi vazifa</NavLink>
            <NavLink to='/four' className='hover:underline'>To'rtinchi vazifa</NavLink>
            <NavLink to='/five' className='hover:underline'>Beshinchi vazifa</NavLink>

          </ul>
          <button className='text-blue-500 text-[18px] rounded-md capitalize bg-white px-[10px] py-[5px]'>Sing up</button>
        </div>
      </header>
      <Routes>
        <Route index element={<One />} ></Route>
        <Route path='/two' element={<Two />} ></Route>
        <Route path='/three' element={<Three />} ></Route>
        <Route path='/four' element={<Four />} ></Route>
        <Route path='/five' element={<Five />} ></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
