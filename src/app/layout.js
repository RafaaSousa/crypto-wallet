import './globals.css';

export const metadata = {
  title: "Crypto Wallet",
  description: "App Crypto Wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="background-left">
            <h1>O MUNDO CRIPTO</h1>
            <span>ESPERA POR VOCÊ</span>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}