import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[f1-500] flex items-center justify-center gap-2 pb-2'>
        <div className='lg:pt-3 pt-1 mb-2 border-3 py-0 text-white border-white rounded-full px-10 uppercase hover:border-[#d3fd50] hover:text-[#d3fd50] duration-300'>
            <Link to={'/projects'} className='text-[5.5vw] leading-[5.5vw] '>Projects</Link>
        </div>
        <div className='lg:pt-3 pt-1 mb-2 border-3 py-0 text-white border-white rounded-full px-10 uppercase hover:border-[#d3fd50] hover:text-[#d3fd50] duration-300'>
            <Link to={'/agence'} className='text-[5.5vw] leading-[5.5vw] '>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText