import Input from "@/app/components/Input";

import "@/app/home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="aside">
        <h1>
          Mundo<span>cripto</span>
        </h1>
        <hr />
        <ul>
          <li>
            <img src="./images/icon_bitcoin.png" />
            <p>Cotação das Moedas</p>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Lista de moedas</h1>
        <span>veja todas as moedas cadastrar em nossa plataforma</span>
        <hr />

        <p>filtrar por:</p>
        <Input className="content_input" placeholder="Buscar..." />

        <div className="cardCoin">
          <ul>
            <li>
              <img src="./images/yellow_bitcoin.png" />
              <p>bitcoin</p>
              <p>R$ 305.140,00</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
