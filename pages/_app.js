import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic';
const MyComponent = dynamic(() => import('./index.js'), { ssr: false });
export default function App({ Component, pageProps }) {

  return(
  <AnimatePresence >
    <MyComponent {...pageProps} />
  </AnimatePresence>
  )
}
