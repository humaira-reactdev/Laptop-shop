import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirm = () => {

  const navigate=useNavigate()

  const handleShop=()=>{
    navigate('/products')
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-28'>
        <div className='text-black font-bold text-[50px]' >Your order has been confirmed</div>
        <div className='object-scale-down h-48 w-96 mt-16'>
          <img src="https://cdn.dribbble.com/users/129972/screenshots/2888283/74_03_smile.gif" alt="order confirmed" />
        </div>
        <button onClick={handleShop} className='shop_more bg-[#FDFFE2] p-3 rounded-lg mt-[150px] font-semibold'>Shop more</button>
      </div>
      

    </>
    
  )
}

export default Confirm