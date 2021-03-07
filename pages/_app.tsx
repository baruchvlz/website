import { ElementType } from 'react'
import '../styles/globals.css'

function MyApp<P = Record<string, any>>({ Component, pageProps }: { Component: ElementType, pageProps: P }) {
  return <Component {...pageProps} />
}

export default MyApp
