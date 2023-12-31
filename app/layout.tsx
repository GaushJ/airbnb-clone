import './globals.css'
import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'


export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}
const font = Nunito({
  subsets: ["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
