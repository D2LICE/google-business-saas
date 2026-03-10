import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-manrope'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body>{children}</body>
    </html>
  )
}