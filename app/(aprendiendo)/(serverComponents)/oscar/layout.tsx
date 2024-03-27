/*
Un layout es un componente que se va a renderizar en todas las páginas de nuestra aplicación o cómo en este caso, en las páginas que 
se encuentran dentro de este nivel de directorio.

Suele tener la siguiente estructura:
import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';


export default function nombreLayout ({children}:{children: React.ReactNode}) {

  return (
    <>
        <Head>
            <title>Título</title>
            <meta name="Descripción" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar/>
        {children}
        <Footer/>
        <ToastContainer />
    </>
  );
}

*/

import React from 'react'

export default function oscaLayout ({children}:{children: React.ReactNode}) {
  return (
    <div className='bg-amber-100 min-h-screen'>
      {children}
    </div>
  )
}
