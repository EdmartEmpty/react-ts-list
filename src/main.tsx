import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Listing from './Listing/Listing.tsx'
import data from "./Data/etsy.json";
import type { Item }  from './ItemInterFace/ItemInterFace.tsx';

const catalog: Item[] = [];

data.forEach((el) => {
  catalog.push({
    listing_id: el.listing_id,
    url: el.url || '',
    img: el.MainImage?.url_570xN || '',
    title: el.title || '',
    currency: el.currency_code || '',
    price: el.price || '',
    quantity: el.quantity || 0
  })
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='item-list'>
      <>
        {catalog.map((el) =>
          <Listing key={el.listing_id} item={el} />
        )}
      </>
    </div>
  </StrictMode>,
)
