import '../styles/globals.scss'
import { ContextProvider } from '../context/context';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <ContextProvider>
    <Component {...pageProps} />
    </ContextProvider>
}

export default MyApp
