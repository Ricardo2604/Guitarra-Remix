import { Outlet, useOutletContext } from "@remix-run/react";
import CssGuitarra from "../styles/guitarras.css"


export function links(){
  return[
    {
      rel: 'stylesheet',
      href: CssGuitarra,

    }
  ]
}

function Tienda() {  
  
  return (
    <main className="contenedor">     
      <Outlet
        context={useOutletContext()}

      />      
    </main>
  )
}

export default Tienda
