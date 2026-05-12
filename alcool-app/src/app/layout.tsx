import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CuiteTracker',
  description: 'Suis ton taux d\'alcoolémie en soirée',
  manifest: '/manifest.json',
  themeColor: '#18181b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}