"use client"

import FormLayout from "@/app/components/FormLayout";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button"

import { useRouter } from "next/navigation";

export default function Redefine() {
  const router = useRouter()

  return (
  <div className="container">
    <FormLayout
      title="Redefina a sua senha"
      subtitle="Te enviamos um código por email, se necessário
            cheque a caixa de spam."
      >
      <Input
        className="inputform"
        type="text"
        placeholder="Código de verificação"
      />
      <Input 
        className="inputform" 
        type="password" 
        placeholder="Nova Senha" 
      />
      <Input
        className="inputform"
        type="password"
        placeholder="Confirmar Nova Senha"
      />

      <Button 
        className="btn_submit"
        type="button"
        onClick={() => router.push('/auth/password/redefine-completed')}
      >
        Redefinir Senha
      </Button>
    </FormLayout>
  </div>
  )
}
