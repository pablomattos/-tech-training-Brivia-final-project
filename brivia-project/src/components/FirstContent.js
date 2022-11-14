import React from 'react'
import ImageContent from '../img/image-first-content.svg'
import '../styles/firstcontent/firstcontent.css'

const FirstContent = () => {
  return (
    <div className='first-content'>
        <div className='content-two'>
            <div className='title-content'>
              <div className='title-name'>
             A2C vira BriviaDez e forma uma das maiores operações de comunicação do país
              </div>
              <div  className='image-content'>
                <img src={ ImageContent } alt= "Logo do primeiro container"/>
              </div>
           </div>
            <div className='text-content'>
            Maior agência full catarinense e uma das top 10 independentes do país,
             a A2C agora faz parte de um projeto ainda maior e mais ambicioso. 
            Com 18 anos de trajetória, a empresa nascida em Joinville e com forte
            presença nacional foi adquirida pela BriviaDez. Resultado dessa ação 
            de M&A, surge a mais completa operação de estratégia, experiência e 
            comunicação do Brasil. Cerca de 250 colaboradores atuarão em seis
            sedes, sendo uma delas no exterior.<br></br><br></br>
            De acordo com Anderson de Andrade,
            sócio-fundador e CEO da A2C, a novidade fortalece o estado nos mercados
            de comunicação e transformação digital.<br></br><br></br>
            — Esse é o maior e mais relevante fato já realizado no setor em Santa Catarina.
             São duas empresas nativas da nova economia e da era da transformação completa dos
            modelos de negócios — aponta o executivo, que fará parte do Conselho de
            Administração da BriviaDez.
            </div>
        </div>
    </div>
  )
}

export default FirstContent