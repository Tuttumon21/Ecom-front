import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-row justify-between p-3 bg-gray-500'>
        <div>
            <img src='' alt='Logo'/>
        </div>
        <div className=''>
            <button className='font-bold text-md mx-2 p-2'>Home</button>
            <button className='font-bold text-md mx-2'>Signup</button>
            <button className='font-bold text-md mx-2'>Login</button>
        </div>
    </div>
  )
}

export default Nav