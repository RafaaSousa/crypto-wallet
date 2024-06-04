import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import FormLayout from '@/app/components/FormLayout';




export default function SignIn() {
  return (
    <div className='container'>
      <FormLayout 
        title="Cadastro 👋" 
        subtitle="controle sua carteira cripto sem burocracias">
          <Button className="btn_redesocias">
                <img src='./images/google.png'/>
                Me cadastrar com Google
          </Button>
          <Button className='btn_redesocias'>
                <img src='./images/facebook.png'/>
                Me cadastrar com Facebook
          </Button>

          <span className='login__container_span'>ou preencha seus dados manualmentel</span>

          <Input className="inputform" type="email" placeholder="Email" />
          <Input className="inputform" type="password" placeholder="Senha" />
          <Input className="inputform" type="password" placeholder="Confirmação de Senha" />

          <span className='inputform_span'>Esqueceu a senha?</span>

          <Button className='btn_submit' type="submit">me cadastrar</Button>
          <Button className='btn_submit btn_submit_white' type="submit">Fazer login</Button>
      </FormLayout>
    </div>
  );
}
