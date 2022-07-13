import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import './AboutMe.scss'
import Family from '../../Assets/familia.jpg'
import { Link } from "react-router-dom";
const AboutMe = (props) => {

  const constraintsRef = useRef(null)


  const [selectedItem, setSelectedItem] = useState(null)

  const items = [
    {
      id : 1,
      slug: 'one',
      title : '¿De donde salió este minion?',
      body : () => {
        return(
          <>
          <p>
            Hola de nuevo. Mi nombre ya lo sabes.
            Soy peruano. Nací en una pequeña ciudad
            llamada Puerto Maldonado con poco más de
            120 años de historia muy conocida por su
            gastronomía y biodiversidad. Si algunas vez
            quieres veranear por acá, escríbeme, te
            puedo dar uno u otro consejo. 
            <br/>
            <br/>
            En mi familia nunca faltó un plato de comida,
            o almenos mis hermanas y yo siempre teníamos uno.
            Mis padres son personas, pero no hubiera podido 
            pedir a Dios otras mejores para educarme y amarme.
            <br/>
            <br/>
            Ahora yo tengo mi propia familia por la que me
            esfuerzo día a día. Por ellos trato de ser una
            mejor persona. Sigo esforzándome.
          </p>
          <div className="image-cont">
          <img src={Family}/>
          </div>
          </>
        )
      }
    },
    {
      id : 2,
      slug: 'two',
      title : 'Dígame Ingeniero.',
      body: () => {
        return(
          <>
            <p>
              Bueno aún no. Pronto.</p>
              <h3>Universidad Nacional Amazónica de Madre
              de Dios (UNAMAD)</h3>
              <p>
              En el 2018 logré ingresar a la carrera de
              Ingeniería de Sistemas e Informática en primer lugar.
              Y sin estudiar (demasido). Realmente fue gracias 
              a Dios. Ahora, 5 años despues, estoy a pocos meses
              de graduarme.
            </p>
            <h3>Instituto Cultural Peruano-Norteamericano (ICPNA)(Inglés)</h3>
            <p>
              En el 2016 ingrese a este reconocido instituto gracias
              a una beca estatal. Despues de 1,5 años estudiando continuamente
              todas las noches la beca concluyó, pero gracias al esfuerzo 
              de mis padres pude continuar hasta terminar a mediados 
              del 2019. Sali con un alto nivel de inglés tanto de manera
              escrita como oral. Lamentablemente por falta de oportunidades
              no pude practicarlo en un ambiente real. Hoy en día 
              practico constantemente para recuperar al 100% mi inglés.
            </p>
            <h3>Academia de Ciencias de la Computación e Informática (ACADEMLO)</h3>
            <p>
              A principios del 2022 empecé mi total dedicación a la
              programación de la mano de Academlo para convertirme en un
              desarrollador web. Fueron muchos meses
              de dedicación y arduo estudio constante. Mi familia fue
              mi principal inspiración para no rendirme.
            </p>
          </>
        )
      }
    },
    {
      id : 3,
      slug: 'three',
      title : 'Mi sueño es...',
      body: () => {
        return(
          <>
            <p>
              ...llegar a ser una gran profesional y un
              referente en mi área de trabajo.
              <br/>
              <br/>
              A través de la experiencia que iré generando
              quiero ayudar a jovenes de mi comunidad a
              convertirse en desarrolladores. Sé desde ahora
              que es un camino complicado y dificil de recorrer,
              especialmente si vives en un lugar en el que
              el avance tecnológico está muy retrasado; pero
              también sé que es una carrera desafiante y
              emocionante, y sé que hay talento por descubrir,
              y no quiero que el talento se pierda por falta
              de oportunidades.
              <br/>
              <br/>
              Siempre he pensado que la comunidad de desarrolladores
              es de las más amigables y humildes. He conocido a 
              completos extraños que no se molestaban en quedarse
              unas horas en las noches con tal de apoyarme y
              resolverme una que otra duda. Estoy muy agradecido
              con todos aquellos que me han ayudado, y quiero
              retribuir todo el apoyo que he recibido.
            </p>
          </>
        )
      }
    }
  ]
  return(
    <motion.div
      ref={constraintsRef}
      className='app-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1, delay: 0.2}}
      exit={{ opacity: 0 }}
      >
      <Link to='/' className='button-back'>Regresar</Link>
      <span className='back-circle two about'/>
      <span className='back-circle one about'/>

      {items.map(item => (
        <motion.div key={item.id} 
        layoutId={item.id} 
        onClick={() => setSelectedItem(item)}
        className={`item-sect ${item.slug}`}
        >
          <motion.h3>{item.title}</motion.h3>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedItem && (
          <motion.div layoutId={selectedItem.id}
          className='selected-item'
          >
            {selectedItem.body()}
            <motion.button onClick={() => setSelectedItem(null)}
            className='item-button'
            >
              Salir
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    
    </motion.div>
  )
}
export default AboutMe;