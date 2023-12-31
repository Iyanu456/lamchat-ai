import Head from 'next/head';
import './styles/main.css';
import './styles/utilities.css';
import './styles/form.css';
import "./styles/variables.css";
import './homepage.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,800;6..12,900&display=swap" rel="stylesheet"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}