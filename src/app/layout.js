import './globals.css';
// import { Comfortaa } from 'next/font/google';
// import { Roboto } from 'next/font/google';
// import { KaushanScript } from 'next/font/google';

// const Comfortaa = Comfortaa({ subsets: ['comfortaa'] });
// const Roboto = Roboto({ subsets: ['roboto'] });
// const KaushanScript = KaushanScript({ subsets: ['kaushan script'] });


export const metadata = {
  title: 'Brilho da Magia Decorações',
  description: 'Empresa de aluguel de material para decoração de festas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="./img/favicon.ico" type="image/x-icon"></link>
      </head>

      <body>{children}
      </body>
    </html>
  );
}
