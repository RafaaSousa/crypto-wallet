import './home.css'

export default function Home() {
  return (
    <div className='container'>
      <div className="login">
        <div className="login__title">
          <h1>Login 👋</h1>
          <span>controle sua carteira cripto sem burocracias</span>
        </div> 
        <div className="login__container">
          <form>
            <div className='btn_redesocias'>
              <button><img src='./images/google.png'></img>Entre com Google</button>
              <button><img src='./images/facebook.png'></img>Entre com Facebook</button>
            </div>

            <span>ou entre com um email</span>

            <div className='inputform'>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <span>Esqueceu a senha?</span>
            </div>


            <div className='btn_submit'>
              <button type="submit">Entrar</button>
              <button type="submit">Não tenho cadastro</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
