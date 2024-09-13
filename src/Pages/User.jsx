import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    
    const {id} = useParams()

  return (
    <div className='h-screen flex justify-center items-center text-2xl font-semibold capitalize bg-zinc-100' >
        User : {id}
    </div>
  )
}

export default User