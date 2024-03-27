'use client' //Este si debe ser un componente de cliente

import React from 'react'

const ComponenteError = ({ error }: { error: Error }) => {
  return (
    <div className='bg-red-500 text-white'>{error.message}</div>
  )
}

export default ComponenteError;