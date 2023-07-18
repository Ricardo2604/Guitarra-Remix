import { useState, useEffect } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from '../models/guitarras.server';


export async function loader({params}) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)
       
  return guitarra
}

export function meta({data}) {

   
    return[{
    title: `Guitarra - ${data.data[0].attributes.nombre}`,
    description: `Guitarras,  Ventas de guitarras, guitarra ${data.data[0].attributes.nombre}`

  }
    
  ]
  
}


function Guitarra() {
  const { agregarCarrito } =useOutletContext()

  const [cantidad, setCantidad] = useState(0)
  const [mensaje, setMensaje] = useState("")
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

 

  const handleSubmit= e =>{
    e.preventDefault();
    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad')
      return      
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
    setMensaje("Agregado al carrito exitosamente");
  }

  useEffect(() => {
    let timer;
    if (mensaje) {
      setMensajeVisible(true);
      timer = setTimeout(() => {
        setMensajeVisible(false);
        setMensaje("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [mensaje]);

  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url } alt={`imagen de la guitarra ${nombre}`}/>
      <div>
        <h3 className="contenido">{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}$</p>
        
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>

          <select
            id="cantidad"
            onChange={e => setCantidad(parseInt(e.target.value)) }
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
        <p className={`mensaje ${mensajeVisible ? "" : "oculto"}`}>{mensaje}</p>
      </div>

    </div>
  )
}

export default Guitarra

