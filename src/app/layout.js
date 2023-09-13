import './styles/main.css';
import './styles/utilities.css';
import './styles/form.css';
import "./styles/variables.css";
import './homepage.css';
import { Inter } from 'next/font/google'
import 'highlight.js/styles/atom-one-light.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LamChat',
  description: 'LamChat ai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}