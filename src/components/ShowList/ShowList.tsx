import Listing from "../Listing/Listing.tsx";
import data from "../../data/etsy.json";
import type { Item }  from '../ItemInterFace/ItemInterFace.tsx';

const activeData = data.filter((el) => el.state === 'active')

const catalog: Item[] = [];

activeData.forEach((el) => {
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

export default function ShowList(){

  return(
    <div className='item-list'>
      <>
        {catalog.map((el) =>
          <Listing key={el.listing_id} item={el} />
        )}
      </>
    </div>
  )
}