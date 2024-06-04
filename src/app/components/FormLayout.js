export default function FormLayout({ children, title, subtitle }) {
  return (
    <div className="login">
        <div className="login__title">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div> 
        <div className="login__container">
          <form>
            {children}
          </form>
        </div>
      </div>
  )
}
