import React from 'react'
import MasterCard from '../../public/masterCard-logo.png'
import Visa from '../../public/visa-logo.png'
import Chip from '../../public/chip.png'

function Card({ card }) {
  return (
    <>
      <article className='pepe flex flex-col justify-between w-[477px] h-[277px] text-slate-700 p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
        <div className="flex justify-between items-center">
          <img src={Chip} alt="" className='w-14' />
          <h3 className='text-2xl font-semibold'>{card.type}</h3>
        </div>
        <section className=''>
          <h3 className='text-2xl font-semibold'></h3>
          <h3 className='text-2xl font-semibold'><span className='text-white text-3xl block text-center'> {card.number}</span></h3>
          <div className="flex justify-between items-center">
            <h3 className='text-2xl font-semibold'>Cvv: {card.cvv}</h3>
            
            {card.type == "CREDIT" ? (
              <img src={MasterCard} alt="MasterCard" className='w-20' />
            ) : (
              <img src={Visa} alt="Visa" className='w-20' />
            )}

          </div>
        </section>
      </article>
    </>
  )
}

export default Card