import React, { useState } from 'react'
import MasterCard from '../../public/masterCard-logo.png'
import Visa from '../../public/visa-logo.png'
import Chip from '../../public/chip.png'

function Card({ card }) {
  const cardContainerClass = card.type === 'CREDIT' ? 'colorMastercard'  : 'colorVisa'
  const textColor = card.type === 'CREDIT' ? 'text-black'  : 'text-white'

  return (
    <>
      <article className={`${cardContainerClass} cursor-pointer transform transition-transform duration-1000 ease-in-out flex flex-col justify-between w-[477px] h-[277px] ${textColor} p-5 mb-5 rounded-2xl border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}> 
        <div className="flex justify-between items-center">
          <img src={Chip} alt="" className='w-14' />
          <h3 className='text-2xl font-thin'> {card.type} </h3>
        </div>
        <section className=''>
          <h3 className='text-2xl font-semibold'></h3>
          <h3 className='text-2xl font-semibold'><span className={`${textColor} text-3xl block font-mono text-center`}> {card.number} </span></h3>
          <div className="flex justify-between items-center h-20">
            <h3 className='text-2xl font-thin'>{ card.cardHolder }</h3>
            {
            card.type == "CREDIT" ? (
              <img src={MasterCard} alt="MasterCard" className='w-20 h-full object-contain' />
            ) : (
              <img src={Visa} alt="Visa" className='w-20 h-full object-contain' />
            )
            }
          </div>
        </section>
      </article>
    </>
  )
}

export default Card