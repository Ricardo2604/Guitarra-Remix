
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'



export function meta() {
  return [
    {
    title: 'Sobre Nosotros',
    description: 'Venta de guitarras, blog y musica'
    },
  ]
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
 



function Nosotros() {
  
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='imagen sobre nosotros' />

        <div>
          <p>
            En nuestra tienda de guitarras, nos enorgullece ofrecerte más que solo instrumentos musicales. 
            Aquí, nuestra pasión por la música y las guitarras se combina con nuestros valores fundamentales para brindarte una experiencia única. 
            Valoramos la excelencia en todo lo que hacemos y nos esforzamos por ofrecerte productos y servicios de la más alta calidad.
            Creemos en la autenticidad, por lo que solo trabajamos con las marcas de guitarras más reconocidas y confiables del mercado. 
            Además, fomentamos un ambiente inclusivo y acogedor, donde músicos de todos los niveles y géneros pueden sentirse inspirados y apoyados. 
            Nuestro equipo de expertos está siempre dispuesto a brindarte asesoramiento personalizado y ayudarte a encontrar la guitarra perfecta que se ajuste a tus necesidades y estilo. 
            Valoramos la comunidad musical y nos esforzamos por promover eventos y programas que reúnan a los amantes de la música, brindando oportunidades para compartir, aprender y crecer juntos.
            En nuestra tienda, la integridad y la honestidad son fundamentales, y nos aseguramos de que cada transacción sea transparente y justa. 
            Además, nos preocupamos por el medio ambiente y tomamos medidas para minimizar nuestro impacto, eligiendo materiales sostenibles y promoviendo prácticas comerciales responsables. 
            En resumen, en nuestra tienda de guitarras, encontrarás no solo un lugar para adquirir instrumentos, sino una comunidad comprometida con la música, la calidad, la autenticidad y el cuidado del entorno, todo ello para ofrecerte la mejor experiencia posible en tu viaje musical.
          </p>
        </div>

      </div>

    </main>
  )
}

export default Nosotros
