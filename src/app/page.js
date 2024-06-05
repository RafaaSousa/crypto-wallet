"use client"

import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import FormLayout from './components/FormLayout'
import { useState } from 'react'

import './home.css'


export default function Home() {
  const [isSignIn, setIsSignIn] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [isPasswordResetCompleted, setIsPasswordResetCompleted] = useState(false)

  const handlePasswordResetSubmit = (e) => {
    e.preventDefault();
    setIsForgotPassword(false);
    setIsPasswordResetCompleted(true);
  }
  return (
    <div className='container'>
      {!isForgotPassword && !isPasswordResetCompleted ? (
        <FormLayout 
          title={isSignIn ? "Cadastro 👋" :"Login 👋"}
          subtitle="controle sua carteira cripto sem burocracias">
            <Button className="btn_redesocias">
                  <img src='./images/google.png'/>
                  {isSignIn ? "Me cadastrar com Google" :"Entre com Google"}
            </Button>
            <Button className='btn_redesocias'>
                  <img src='./images/facebook.png'/>
                  {isSignIn ? "Me cadastrar com Facebook" : "Entre com Facebook" }
            </Button>

            <hr />

            <span className='login__container_span'>
              {isSignIn ? "ou preencha seus dados manualmentel" : "ou entre com um email"}
            </span>

            <Input className="inputform" type="email" placeholder="Email" />
            <Input className="inputform" type="password" placeholder="Senha" />
            {isSignIn && <Input className="inputform" type="password" placeholder="Confirmação de Senha" />}

            {!isSignIn && (
              <Button 
                className='inputform_span'
                onClick={() => setIsForgotPassword(true)}
              >
                {isSignIn ? "" : "Esqueceu a senha?"}
              </Button>
            )}

            <Button 
              className='btn_submit' 
              type="submit"
            >
              {isSignIn ? "Me cadastrar" : "Entrar"}
            </Button>
            <Button 
              className='btn_submit btn_submit_white' 
              type="button"
              onClick={() => setIsSignIn(!isSignIn)}
            >
                {isSignIn ? "Fazer login" : "Não tenho cadastro"}
            </Button>
        </FormLayout>
      ) : isForgotPassword && !isPasswordResetCompleted ? (
        <FormLayout
          title="Esqueceu sua senha?"
          subtitle="Não se preocupe, nós recuperamos para você">

              <Input className="inputform" type='email' placeholder="Email cadastrado" />
              <Button 
                className='btn_submit' 
                type="button"
                onClick={handlePasswordResetSubmit}
              >
                Enviar recuperação de senha
              </Button>
            <Button
              className='btn_submit btn_submit_white'
              type="button"
              onClick={() => setIsForgotPassword(false)}
            >
              Voltar para login
            </Button>
        </FormLayout>
      ) : (
        <FormLayout
          title="Senha redefinida com Sucesso🎉"
          subtitle="Agora volte para o login e entre com sua nova senha">

            <Button
              className='btn_submit'
              type="button"
              onClick={() => {
                setIsForgotPassword(false);
                setIsPasswordResetCompleted(false);
              }}
            >
              Fazer login
            </Button>
        </FormLayout>
      )}
    </div>
  );
}
