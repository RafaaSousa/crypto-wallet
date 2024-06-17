"use client";

import Input from "@/app/components/Input";
import CardCoin from "../components/CardCoin";
import { useState } from "react";

export default function Content() {
  const [isDetailCoin, setIsDatailCoin] = useState(false);

  return (
    <div className="content">
      <h1>{isDetailCoin ? "Detalhamento da Moeda" : "Lista de moedas"}</h1>
      <span>
        {isDetailCoin
          ? "veja detalhes sobre a moeda selecionada: {NOME DA MOEDA}"
          : "veja todas as moedas cadastrar em nossa plataforma"}
      </span>
      <hr />

      {!isDetailCoin && (
        <>
          <p>filtrar por:</p>
          <Input className="content_input" placeholder="Buscar..." />
        </>
      )}

      {isDetailCoin ? (
        <>
          <p>Nome: Bitcoin</p>
          <p>Cotação atual: R$1000,00</p>
          <CardCoin
            coin="Bitcoin"
            price="R$ 1000,00"
            onClick={() => setIsDatailCoin(!isDetailCoin)}
          />
        </>
      ) : (
        <CardCoin coin="etherium" price="R$ 1000,00" onClick={() => setIsDatailCoin(!isDetailCoin)}/>
      )}
    </div>
  );
}
