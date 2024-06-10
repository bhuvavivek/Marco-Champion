import { Bebas_Neue, Open_Sans } from 'next/font/google'
import './globals.css'

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', variable: '--font-bebas'
})
const open_sans = Open_Sans({ subsets: ['latin'], variable: '--font-open' })

export const metadata = {
  title: 'Marco Champion',
  description: 'Marco Champion',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body  >{children}</body>
    </html>
  )
}
