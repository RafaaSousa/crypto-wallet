"use client"

import FormLayout from './FormLayout'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'




import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FormLogin() {
    const [isSignIn, setIsSignIn] = useState(false)
    const router = useRouter()

  return (
    <div className='login'>
      <FormLayout
        title={isSignIn ? "Cadastro 👋" : "Login 👋"}
        subtitle="controle sua carteira cripto sem burocracias"
      >
        <Button className="btn_redesocias">
          <img src="./images/google.png" />
          {isSignIn ? "Me cadastrar com Google" : "Entre com Google"}
        </Button>
        <Button className="btn_redesocias">
          <img src="./images/facebook.png" />
          {isSignIn ? "Me cadastrar com Facebook" : "Entre com Facebook"}
        </Button>

        <hr />

        <span className="login__container_span">
          {isSignIn
            ? "ou preencha seus dados manualmentel"
            : "ou entre com um email"}
        </span>

        <Input className="inputform" type="email" placeholder="Email" />
        <Input className="inputform" type="password" placeholder="Senha" />
        {isSignIn && (
          <Input
            className="inputform"
            type="password"
            placeholder="Confirmação de Senha"
          />
        )}

        {!isSignIn && (
          <Button
            className="inputform_span"
            type="button"
            onClick={() => router.push("/auth/password/forgot")}
          >
            {isSignIn ? "" : "Esqueceu a senha?"}
          </Button>
        )}

        <Button className="btn_submit" type="submit">
          {isSignIn ? "Me cadastrar" : "Entrar"}
        </Button>
        <Button
          className="btn_submit btn_submit_white"
          type="button"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "Fazer login" : "Não tenho cadastro"}
        </Button>
      </FormLayout>
    </div>
  );
}
