import './priceCard.css'

export const PriceCard = (props) => {
  const {name, price} = props
  return <div className="price_item">
  <span>{name}</span>
  <span>${price}</span>
</div>
}
