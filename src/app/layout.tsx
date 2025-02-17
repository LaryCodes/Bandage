import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/app/redux/provider'
import {ClerkProvider} from '@clerk/nextjs'
import { Toaster } from 'sonner'
import { store } from '@/app/redux/store'
import { Provider } from 'react-redux'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bandage',
  description: 'Developed by Muhammad Laraib',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
      <Providers>
      {children}
      </Providers>
        </body>
    </html>
    </ClerkProvider>
  )
}
