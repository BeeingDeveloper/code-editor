import React, { useContext } from 'react'
import { StateContext } from '../context/StateProvider'
import Folder from './Folder';

const Playground = () => {

    const {state} = useContext(StateContext);
    const {folder} = state;
  return (
    <div className='h-full w-full bg-red-300'>
        {
            folder?.map((elm, i)=>{
                return <Folder  />
            })
        }
    </div>
  )
}

export default Playground