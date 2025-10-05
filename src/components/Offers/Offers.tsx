import React from 'react'
import Offer from './Offer'
import { getOffers } from '@/lib/projectData'
import { OfferI } from '../../lib/interface'
async function Offers() {
  const offers = await getOffers()
  return (
    <section>
      <div className='container px-[10px] mx-auto  mb-[87px] '>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:w-[85%]   mx-auto'>
          {offers.map((offer: OfferI) => (
            <Offer
              key={offer.id}
              offer={offer.description}
              image={offer.image}
              title={offer.action}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
