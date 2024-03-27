/*
Por defecto si no se coloca aquí 'use client', se renderiza en el servidor y a esto se le llama "server components"

Eventos (onClick, onChange, onHover, etc) que se renderizan en el cliente, se llaman "client components" y 
no se pueden utilizar en componentes de servidor.

Caulquier HOOK cómo useEffect, tampoco se puede utilizar en componentes de servidor.

VENTAJAS de renderizar en el servidor:
- Se pueden llamar a pedir datos directamente con fetch
- se pueden llamar API's propias con cabecera de autorización de manera segura y directa porqué todo queda del lado del server

*/

/*
opciones CORRECTAS para desplegar el link: http://localhost:3000/oscar
- app/oscar/page.tsx 
- app/(otra)/oscar/page.tsx 
- app/(otra)/(otra)/oscar/page.tsx 

opciones INCORRECTAS para desplegar el link: http://localhost:3000/oscar
- app/oscar/otroNombre.tsx 
- app/(otra)/otra/oscar/page.tsx 

*/
import React from 'react'

async function pagina() {
  console.log('log del lado del servidor'); //Este log no aparece en consola porqué esta en el servidor
  
  const esperaXSegundos = (segundos: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, segundos * 1000);
    })
  }

  //Llamada a una API que devuelve hechos sobre perros
  await esperaXSegundos(3); //forzamos una espera para comprobar que en automática llama a "loading.tsx"
  const respuesta = await fetch('https://dogapi.dog/api/v2/facts')
  const dato = await respuesta.json();

  //throw new Error('Error de prueba'); //Forzamos un error
  
  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-2xl font-bold">Server Component - Dog fact:</h1>
      <div>{dato.data[0].attributes.body}</div>
    </div>
  )
}

// const pagina = async () => {
//     return (
//         <div>Página de Oscar</div>
//     )
// }

export default pagina;