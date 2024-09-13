import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

function Github() {

    const userData = useLoaderData()

  return (
    <div className='flex justify-center items-center py-20'>
        <div className='max-w-full border p-4 rounded-md flex flex-col gap-2 items-center cursor-pointer hover:scale-105 duration-200 shadow-md hover:shadow-lg' 
        onClick={() => window.location.href = userData.html_url}
        >
            <div className='h-[8rem] w-[8rem] p-1 bg-zinc-300 rounded-full overflow-hidden border'>
            <img src={userData.avatar_url} className='h-full w-full object-cover rounded-full' />
            </div>
            <h2 className='font-semibold text-2xl'>{userData.name}</h2>
            <h3 className='font-semibold text-zinc-500'>@{userData.login}</h3>
            <div className='flex gap-4 font-semibold text-center'>
                <p>{userData.followers} followers</p>
                <p>{userData.following} following</p>
                <p>{userData.public_repos} Repos</p>
            </div>
            <p className='max-w-[30ch]'>{userData.bio}</p>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ({params}) => {
    const {username} = params
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    return data
}