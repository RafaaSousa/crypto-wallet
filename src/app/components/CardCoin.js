import Button from "./Button";

export default function CardCoin({coin, price, onClick}) {
  return (
    <div className="cardCoin">
          <ul>
            <li onClick={onClick}>
              <img src="./images/yellow_bitcoin.png" />
              <p>{coin}</p>
              <p>{price}</p>
            </li>
          </ul>
        </div>
  )
}
