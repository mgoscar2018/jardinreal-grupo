/*
Componente de loading que automáticamente se renderiza en el servidor cuando hay una espera del lado del servidor
Requerimientos:
- Debe llamarse "loading"
- Debe estar en el mismo nivel de la página que renderiza (para este ejemplo, el archivo "page.tsx")
*/

import React from 'react'
const loading = () => {
  return (
    <div>Cargando...</div>
  )
}

export default loading;