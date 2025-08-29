import type ItemInterFace from "../ItemInterFace/ItemInterFace";
import "./Listing.css";

export default function Listing({ item }: ItemInterFace) {

    let str: string | undefined

    if (item.title?.length > 50) {
        str = item.title;
        str = str?.slice(0, 50) + "...";
    }

    return (
        <div className={item.MainImage?.url_570xN ? "item" : "none"}>
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage?.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{str ? str : item.title}</p>
                <p className="item-price">{item.currency_code}{item.price}</p>
                <p className="item-quantity level-medium">{item.quantity} left</p>
            </div>
        </div>
    )

}