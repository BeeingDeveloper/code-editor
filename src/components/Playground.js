import React, { useContext } from 'react'
import { StateContext } from '../context/StateProvider'
import LOGO from '../assets/images/logo.png'
import {FcOpenedFolder} from 'react-icons/fc';
import {MdDelete} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'
import {FaPlus} from 'react-icons/fa'



const Playground = () => {

    const {state} = useContext(StateContext);
    const {folder} = state;
  return (
    <div className='h-full w-full pt-10'>
        {
            folder?.map((elm, i)=>{
                return (
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 text-2xl '>
                                <FcOpenedFolder className='my-auto' />
                                <h2>{elm.name}</h2>
                            </div>

                            <div className='flex text-2xl gap-1 h-8'>
                                <MdDelete className='my-auto' />
                                <BiEdit className='my-auto' />
                                <h2 className='flex h-full gap-1'>
                                    <FaPlus className='text-[1.2rem] my-auto' />
                                    <h2 className=''>New Playground</h2>
                                </h2>
                            </div>
                        </div>
                        <hr className='p-[0.5px] bg-black mt-2' />

                        <div className='grid grid-cols-2'>
                            {
                                elm?.playgrounds?.map((item, i)=>{
                                    return(
                                        <div key={i} className='p-2 m-2 bg-white flex justify-between items-center rounded-md shadow-md shadow-gray-400'>
                                            <img src={LOGO} className='h-20' />
                                            <p className='text-xl text-left'>{item.groundName}</p>
                                            <div className='flex text-2xl'>
                                                <MdDelete />
                                                <BiEdit />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Playground
//<Folder folderID={elm} key={i} />