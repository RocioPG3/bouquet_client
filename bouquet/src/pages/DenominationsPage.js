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
                    <div className="imageText">
                        <img className="imageDO" src="https://static3.larioja.com/lomejordelvinoderioja/multimedia/201907/30/media/cortadas/unnamed-ksNF-U80876854257LTF-1248x770@La%20Rioja.jpg" alt="" />
                        <h2>Rioja</h2>
                        <p>Esta DO se encuentra en La Rioja, Navarra, País Vasco y Burgos, siendo una de las referencias del vino en España, no en vano es la denominación más antigua junto a Jerez. La DOC Rioja se suele dividir en tres zonas Rioja Alta, Rioja Alavesa, y Rioja Baja. La diferencia se debe al clima más frío en la Rioja Alta y Alavesa y continental en la Baja.  </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/09/18/15057240818716.jpg" alt="" />
                        <h2>Ribera del Duero</h2>
                        <p>La Ribera del Duero es una de las grandes zonas de producción de vinos y en una de sus partes se extiende la D.O. Ribera del Duero, con mas de 2000 historia de producción de vinos, la denominación como hoy la conocemos, surge de la unión de diversos viticultores y bodegueros que apostaron por las especiales características de la zona para la optima producción de vinos de calidad, esto ocurrió en 1980, consiguiendo la categoría de Denominación de Origen en 1982.</p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://rutadelvinoyecla.com/images/establecimientos/informacion/do-p-yecla/dop-yecla-02.jpg" alt="" />
                        <h2>Yecla</h2>
                        <p> La Denominación de Origen Yecla posee una tradición vinícola importante desde siglos pasados. Ya desde la romanización hispánica, la vid era cultivada en este territorio. Pero fue a mediados del siglo XIX cuando la plaga de la filoxera castiga amplios territorios europeos, sobre todo Francia; lo que motivó el despegue espectacular de la economía vitícola. </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://nuevecuatrouno.com/wp-content/uploads/2019/11/enoturismo-aldeanueva-ebro.jpeg" alt="" />
                        <h2>Toro</h2>
                        <p>Esta DO es del año 1987. Se puede considerarse una de las grandes denominaciones de España, ya que se tiene constancia de su origen desde los griegos que vinieron a la península, y siempre sus vinos han estado protagonizando partes de la historia de España. Sin ir más lejos la batalla que ganaron los Reyes Católicos en Toro fue en un campo de viñedos </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.asajacr.com/wp-content/uploads/2019/06/purple-grapes-553464_1280.jpg" alt="" />
                        <h2>Valdepeñas</h2>
                        <p>Situada en el sur de Castilla-La Mancha, la zona de producción de la Denominación de Origen Valdepeñas, está presidida por el río Jabalón de este a oeste y abarca 22.000 hectáreas de viñedos -algunos centenarios-, mimados por más de 2.500 agricultores.</p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.riberadelguadiana.eu/file/2020/09/RBWMS_RBS05909_01_rbwms.jpg" alt="" />
                        <h2>Ribera del Guadiana</h2>
                        <p> Extremadura tiene una larga tradición vitivinícola, que se remonta al siglo IV a.c. y ha ido evolucionando a lo largo del tiempo en función de las distintas culturas que han ido habitando esta región. Los romanos hicieron famosos los vinos de Lusitania, tras esto los cristianos fueron desarrollando el cultivo de la vid.</p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://static.visitacostadelsol.com/visitacostadelsol/subidas/imagenes/9/5/arc_29459_v2_g.jpg" alt="" />
                        <h2>Sierra de Málaga</h2>
                        <p>La zona de Málaga ha sido productora de vino desde tiempos de los fenicios y las viñas se han respetado por los romanos, visigodos y los árabes. Tras los reyes católicos los productores se asociaron para defender sus derechos y en el año 1900 se creo un sello de calidad de exportadores de Málaga para asegurar la calidad de los productos.  </p>
                    </div>
                    <div className="imageText">
                        <img className="imageDO" src="https://www.turismoarlanza.es/es/wp-content/uploads/2021/09/2021-09-21-19.26.50.jpg" alt="" />
                        <h2>Arlanza</h2>
                        <p>Esta DO se encuentra situadas entre Burgos y Palencia, de gran tradición vitivinícola, fue muy importante en la Edad Media, pero a principios del siglo XX sufrió un declive muy importante, que tuvo una recuperación, cuando en los años 90 se le otorgo una IGP a la zona de Arlanza que termino en el año 2007 con la consecución de la Denominación de Origen </p>
                    </div>




              </div>

   
              
              <button className='button' onClick={(e) => handleClick(e)}>Busca tu bodega</button>
    </div>

    </div>
  )
}
