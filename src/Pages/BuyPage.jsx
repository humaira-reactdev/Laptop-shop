
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Buy = () => {

    const data=useSelector((state)=>state.counter.value)

    const navigate=useNavigate()

    const handleShop=()=>{
        navigate('/products')
    }

    const handleConfirm=()=>{
        navigate('/Confirm')
    }

    const calculateTotalPayable = (priceString) => {

        const priceNumber = parseFloat(priceString.replace('$', ''))
        const vat = 0.15
        const totalPayable = priceNumber + (priceNumber * vat)
        return totalPayable.toFixed(2)
    }

    const totalPayable = calculateTotalPayable(data.price)


  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='singleCard w-[250px] h-[500px] bg-[#FFFED3] p-5 rounded-lg'>
            <div className='productImage w-full h-[130px] overflow-hidden'>
                <img className='w-full h-full' src={data.image_link} alt="" />
            </div>
            <div className='product_text'>
                <h2 className='text-[18px] font-semibold text-black mt-5 mb-5'>{data.product_title}</h2>
                <hr />
                <h4 className='mt-5 mb-2 text-[20px] font-bold text-[#FF7F3E] text-center'>Total payable: ${totalPayable} </h4>
                <button onClick={handleConfirm} className='w-full h-[40px] flex justify-center items-center bg-[#BBE9FF] rounded-lg font-bold hover:bg-[#E8C5E5]'>Confirm order</button>
                <button onClick={handleShop} className='w-full h-[40px] flex justify-center items-center bg-[#B1AFFF] rounded-lg font-bold mt-2 hover:bg-[#E8C5E5]'>Continue shopping</button>
            </div>                    
        </div>  

    </div>
        
    </>
  )
}

export default Buy
