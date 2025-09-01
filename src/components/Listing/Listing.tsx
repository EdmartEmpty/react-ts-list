import type ItemInterFace from "../ItemInterFace/ItemInterFace";
import "./Listing.css";

export default function Listing({ item }: ItemInterFace) {
  const title: string =
    item.title.length > 50 ? `${item.title.slice(0.5)}...` : item.title;

  const quantity: string =
    item.quantity <= 10 ? `low` : item.quantity >= 20 ? `high` : `medium`;

  const priceLog: string =
    item.currency === "USD"
      ? new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "USD",
        }).format(+item.price)
      : item.currency === "EUR"
      ? new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "EUR",
        }).format(+item.price)
      : `${item.price} ${item.currency}`;

  return (
    <div className={item.img ? "item" : "none"}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.img} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price"> {priceLog}</p>
        <p className={`item-quantity level-${quantity}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}
