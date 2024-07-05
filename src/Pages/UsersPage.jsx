import React, { useState, useEffect } from 'react'

const UsersPage = () => {
    const [data, setData]=useState([])

      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))

      } , [])

  return (
    <>
        <h2 className='text-black font-semibold text-[50px] my-[20px]'>Our satisfied customers</h2>
        <div className='allCards flex flex-wrap gap-10'>
        {
          data.map((item)=>(
                        
            <div className='singleUser w-[350px] h-[400px] bg-[#64CCC5] rounded-[10px] p-5 flex items-center flex-col'>
          <div className='img_col w-[200px] h-[200px] rounded-full overflow-hidden'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7av_tdhO4CdLxhteZIv2Gjf_CWOj7ZGrXw&s' alt='ID card picture'/>
          </div>
          <div className="user_text">
            <p className='text-xl font-semibold text-white'>id:{item.id}</p>
            <h1 className='text-3xl font-bold text-white'>Username: {item.name}</h1>
            <p className='text-xl font-normal text-white'>Email:{item.email}</p>
          </div>
        </div>

          ))
        }
      </div>
    </>
  )
}

export default UsersPage