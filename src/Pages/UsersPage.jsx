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
        <h2 className='text-black font-semibold text-[50px] my-[20px] text-center'>Our satisfied customers</h2>
        <div className='container mx-auto allCards flex flex-wrap gap-10'>
        {
          data.map((item)=>(
                        
            <div className='singleUser w-[350px] h-[400px] bg-[#64CCC5] rounded-[10px] p-5 flex items-center flex-col shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
          <div className='img_col w-[200px] h-[200px] rounded-full overflow-hidden'>
              <img src='https://png.pngtree.com/element_pic/17/09/18/eaaa7c9fd4ce780349e072ad967b8779.jpg' alt='ID card picture'/>
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