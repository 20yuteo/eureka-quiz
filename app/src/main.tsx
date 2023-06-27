import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import router from './components/Router.tsx'
import Header from './components/Header/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
