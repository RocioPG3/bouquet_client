import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function DenominationsPage() {

    const navigate = useNavigate();

    function handleClick(e) {
    navigate("/wineries")
    }



  return (
    <div className='denominations'>
      

<h1>¿Qué D.O te gustaría conocer?</h1>

      <div className='heading'>

              <div className="divImages">
                <div className='containerDo1'>
                    <div className="imageText">
                       <div className= "imageDO1"></div>
                        <h2>Rioja</h2>
                        <p>Esta DO se encuentra en La Rioja, Navarra, País Vasco y Burgos, siendo una de las referencias del vino en España, no en vano es la denominación más antigua junto a Jerez. La DOC Rioja se suele dividir en tres zonas Rioja Alta, Rioja Alavesa, y Rioja Baja. La diferencia se debe al clima más frío en la Rioja Alta y Alavesa y continental en la Baja.  </p>
                    </div>
                    <div className="imageText">
                        <div className= "imageDO2"></div>
                        <h2>Ribera del Duero</h2>
                        <p>La Ribera del Duero es una de las grandes zonas de producción de vinos y en una de sus partes se extiende la D.O. Ribera del Duero, con mas de 2000 historia de producción de vinos, la denominación como hoy la conocemos, surge de la unión de diversos viticultores y bodegueros que apostaron por las especiales características de la zona.</p>
                    </div>
                </div>
                <div className='containerDo2'>
                    <div className="imageText">
                        <div className= "imageDO3"></div>
                        <h2>Yecla</h2>
                        <p> La Denominación de Origen Yecla posee una tradición vinícola importante desde siglos pasados. Ya desde la romanización hispánica, la vid era cultivada en este territorio. Pero fue a mediados del siglo XIX cuando la plaga de la filoxera castiga amplios territorios europeos, sobre todo Francia; lo que motivó el despegue espectacular de la economía vitícola. </p>
                    </div>
                    <div className="imageText">
                        <div className= "imageDO4"></div>
                        <h2>Toro</h2>
                        <p>Esta DO es del año 1987. Se puede considerarse una de las grandes denominaciones de España, ya que se tiene constancia de su origen desde los griegos que vinieron a la península, y siempre sus vinos han estado protagonizando partes de la historia de España. Sin ir más lejos la batalla que ganaron los Reyes Católicos en Toro fue en un campo de viñedos </p>
                    </div>
                </div>
                
                <div className='containerDo3'>
                    <div className="imageText">
                        <div className= "imageDO5"></div>
                        <h2>Valdepeñas</h2>
                        <p>Situada en el sur de Castilla-La Mancha, la zona de producción de la Denominación de Origen Valdepeñas, está presidida por el río Jabalón de este a oeste y abarca 22.000 hectáreas de viñedos -algunos centenarios-, mimados por más de 2.500 agricultores.</p>
                    </div>
                    <div className="imageText">
                        <div className= "imageDO6"></div>
                        <h2>Ribera del Guadiana</h2>
                        <p> Extremadura tiene una larga tradición vitivinícola, que se remonta al siglo IV a.c. y ha ido evolucionando a lo largo del tiempo en función de las distintas culturas que han ido habitando esta región. Los romanos hicieron famosos los vinos de Lusitania, tras esto los cristianos fueron desarrollando el cultivo de la vid.</p>
                    </div>
                </div>   
                <div className='containerDo4'>
                    <div className="imageText">
                        <div className= "imageDO7"></div>
                        <h2>Sierra de Málaga</h2>
                        <p>La zona de Málaga ha sido productora de vino desde tiempos de los fenicios y las viñas se han respetado por los romanos, visigodos y los árabes. Tras los reyes católicos los productores se asociaron para defender sus derechos y en el año 1900 se creo un sello de calidad de exportadores de Málaga para asegurar la calidad de los productos.  </p>
                    </div>
                    <div className="imageText">
                        <div className= "imageDO8"></div>
                        <h2>Arlanza</h2>
                        <p>Esta DO se encuentra situadas entre Burgos y Palencia, de gran tradición vitivinícola, fue muy importante en la Edad Media, pero a principios del siglo XX sufrió un declive muy importante, que tuvo una recuperación, cuando en los años 90 se le otorgo una IGP a la zona de Arlanza que termino en el año 2007 con la consecución de la Denominación de Origen </p>
                    </div>
                </div>
                

              </div>

   
              
              <button className='button' onClick={(e) => handleClick(e)}>Busca tu bodega</button>
    </div>

    </div>
  )
}
