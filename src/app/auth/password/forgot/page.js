"use client"

import Button from "@/app/components/Button";
import FormLayout from "@/app/components/FormLayout";
import Input from "@/app/components/Input";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter()

  return (
    <div>
        <FormLayout
          title="Esqueceu sua senha? "
          subtitle="não se preocupe, nós recuperamos pra você"
        >
          <Input
            className="inputform"
            type="email"
            placeholder="Email Cadastrado"
          />

          <Button 
            className="btn_submit"
            type="submit"
            onClick={() => router.push('/auth/password/redefine')}
          >
            enviar recuperação de senha
          </Button>
          <Button
            className="btn_submit btn_submit_white"
            type="button"
            onClick={() => router.push('/')}
          >
            voltar para o login
          </Button>
        </FormLayout>
    </div>
  )
}
