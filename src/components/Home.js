import React from 'react'
import '../utils/style.css'
import LOGO from '../assets/images/logo.png'
import {FaPlus} from 'react-icons/fa'
import Playground from './Playground'

const Home = () => {
  return (
    <div className='w-screen h-screen flex'>
        {/* --------- LEFT--------- */}
        <div className=' h-screen w-[40%] bg-left-section'>
          <div className='h-64 w-80 flex flex-col gap-3 justify-center items-center'>
            <img src={LOGO} alt='logo' />
            <h2 className='text-white text-[2.75rem]'><span className='font-semibold'>Code </span>Deck</h2>
            <h2 className='text-gray-400 text-[1.5rem]'>Code. Compile. Debug.</h2>
            <button className='bg-gray-200 text-[1.2rem] py-3 px-5 rounded-full font-bold btn-shadow flex justify-center items-center gap-2 transition-all ease-in duration-200 hover:scale-75'> 
              <FaPlus />
              <p className='btn-text'>Create New Playground</p>
            </button>
          </div>
        </div>
        


        {/* ----------- RIGHT------------ */}
        <div className='h-screen w-[60%] p-10 '>
          <div className='flex justify-between'>
            <h2 className='text-[2rem]'>My <span className='font-semibold'>Playground</span></h2>
            <div className='flex justify-center items-center text-[1.25rem] gap-2'>
              <FaPlus />New Folder
            </div>
          </div>
          <hr className='p-[1px] bg-black' />

          <Playground />

        </div>
    </div>
  )
}

export default Home