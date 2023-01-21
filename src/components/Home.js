import React, { useState } from 'react'
import '../utils/style.css'
import LOGO from '../assets/images/logo.png'
import {FaPlus} from 'react-icons/fa'
import Playground from './Playground'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '0.5rem'
};


const Home = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [folderName, setFolderName] = useState('');

  const createFolder = ()=>{

  }


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
              <FaPlus onClick={handleOpen}/>


              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <input 
                  placeholder='enter folder name...' 
                  value={folderName}
                  onChange={(e)=>setFolderName(e.target.value)}
                  className='bg-slate-200 p-2 outline-none border border-black rounded-md' />
                  <button onClick={createFolder} className='bg-slate-300 p-2 rounded-md ml-2' >Create Folder</button>
                </Box>
              </Modal>


            </div>
          </div>
          <hr className='p-[0.5px] bg-black' />

          {/* <Playground /> */}

        </div>
    </div>
  )
}

export default Home