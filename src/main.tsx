import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

