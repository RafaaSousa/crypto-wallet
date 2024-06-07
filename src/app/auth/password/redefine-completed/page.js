"use client"

import { useRouter } from 'next/navigation';

import Button from "@/app/components/Button";

export default function RedefineCompleted() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/')
  }

  return (
    <div className='login'>
      <h1>Senha redefinida com Sucesso🎉</h1>
      <p>Agora volte para o login e entre com sua nova senha</p>
      <Button className="btn_submit" type="button" onClick={handleNavigation}>
        Fazer login
      </Button>
    </div>
  );
}