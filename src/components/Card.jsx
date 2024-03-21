import React, { useState } from 'react'
import MasterCard from '../../public/masterCard-logo.png'
import Visa from '../../public/visa-logo.png'
import Chip from '../../public/chip.png'

function Card({ card }) {
  const cardContainerClass = card.type === 'CREDIT' ? 'colorMastercard' : 'colorVisa'
  const textColor = card.type === 'CREDIT' ? 'text-black' : 'text-white'

  return (
    <>
      <article className={`${cardContainerClass} flex flex-col justify-between w-60 h-36  ${textColor} p-5 rounded-2xl border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}>

        <div className="flex justify-between items-center">
          <img src={Chip} alt="" className='w-6 h-5' />
          <h3 className='text-lg font-thin'> {card.type} </h3>
        </div>
        <section className=''>
          <h3 className='font-semibold'><span className={`${textColor} text-lg block font-mono text-center`}> {card.number} </span></h3>
          <div className="flex justify-between items-center">
            <h3 className='text-xs font-thin'>{card.cardHolder}</h3>
            {
              card.type == "CREDIT" ? (
                <img src={MasterCard} alt="MasterCard" className='w-10 h-full object-contain' />
              ) : (
                <img src={Visa} alt="Visa" className='w-10 h-full object-contain' />
              )
            }
          </div>
        </section>
      </article>
    </>
  )
}

export default Card