import React, { useState } from 'react'
import MasterCard from '../../public/masterCard-logo.png'
import Visa from '../../public/visa-logo.png'
import Chip from '../../public/chip.png'

function Card({ card }) {


  const getCardColor = () => {
    let color;
    if (card.color === 'TITANIUM') {
      color = card.type === 'CREDIT' ? 'colorMasterTitanium' : 'colorVisaTitanium';
    } else if (card.color === 'SILVER') {
      color = card.type === 'CREDIT' ? 'colorMasterSilver' : 'colorVisaSilver';
    } else if (card.color === 'GOLD') {
      color = card.type === 'CREDIT' ? 'colorMasterGold' : 'colorVisaGold';
    } else {
      color = '';
    }
    return color;
  };

  const formatThruDate = () => {
    const date = new Date(card.thruDate);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Agrega ceros a la izquierda si es necesario
    const year = date.getFullYear().toString().slice(-2); // Obtiene solo los últimos dos dígitos del año
    return `${month}/${year}`;
  };

  

  return (
    <>
      <article className={`${getCardColor()} flex flex-col justify-between w-60 min-h-36 text-white p-5 rounded-2xl border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}>

        <div className="flex justify-between items-center">
          <img src={Chip} alt="" className='w-6 h-5' />
          <h3 className='text-lg font-thin'> {card.type} </h3>
        </div>
        <section className=''>
          <h3 className='font-semibold'><span className={`text-lg block font-mono text-center`}> {card.number} </span></h3>
          <div className="flex justify-between items-center min-h-10">
            <h3 className='text-sm font-thin'>{card.cardHolder}</h3>
            <div>
              <h3 className='text-xs font-thin relative top-6 left-2'>Valid: {formatThruDate()}</h3>
              <h3 className='text-xs font-thin relative top-3 right-[80px]'>cvv: {card.cvv}</h3>
            </div>
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