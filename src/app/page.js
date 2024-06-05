import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import FormLayout from './components/FormLayout'

import './home.css'


export default function Home() {
  return (
    <div className='container'>
      <FormLayout 
        title="Login 👋" 
        subtitle="controle sua carteira cripto sem burocracias">
          <Button className="btn_redesocias">
                <img src='./images/google.png'/>
                Entre com Google
          </Button>
          <Button className='btn_redesocias'>
                <img src='./images/facebook.png'/>
                Entre com Facebook
          </Button>

          <span className='login__container_span'>ou entre com um email</span>

          <Input className="inputform" type="email" placeholder="Email" />
          <Input className="inputform" type="password" placeholder="Senha" />

          <span className='inputform_span'>Esqueceu a senha?</span>

          <Button className='btn_submit' type="submit">Entrar</Button>
          <Button className='btn_submit btn_submit_white' type="submit">Não tenho cadastro</Button>
      </FormLayout>
    </div>
  );
}
