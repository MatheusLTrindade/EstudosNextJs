import '../styles/globals.css'
import type { Metadata } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
