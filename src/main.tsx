import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import Listing from './Listing/Listing.tsx'
import data from "./Data/etsy.json";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='item-list'>
      <>{data.map((el) => <Listing key={el.listing_id} item={el} />)}</>
    </div>
  </StrictMode>,
)
