
import './globals.css';

export const metadata = {
  title: "Crypto Wallet",
  description: "App Crypto Wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}