import './footer.css'
import logoInstagramLandingFooter from '../../images/imgs-landing/logoInstagramLandingFooter.svg'
import logoLinkedinLandingFooter from '../../images/imgs-landing/logoLinkedinLandingFooter.svg'
import logoInovalemBranco from '../../images/imgs-landing/logoInovalemBranco.svg'
import logoEmailLanding from '../../images/imgs-landing/logoEmailLanding.svg'

export function Footer() {
    return (
        <>

            <section className='section-footer'>

                <div className='div1Footer'>
                    <div className='divLogosFooter'>
                        <img className='logoInovalemBranco' src={logoInovalemBranco} />
                    </div>

                    <div className="divLogosFooter2">
                        <img className='logoInstagramLandingFooter' src={logoInstagramLandingFooter} />
                        <img className='logoLinkedinLandingFooter' src={logoLinkedinLandingFooter} />
                        <img className='logoEmailLanding' src={logoEmailLanding} />
                    </div>
                </div>

                <div className='div2Footer'>
                    <div className='div2InfosFooter'>
                        <p> Contato Política de privacidade </p>
                        <p> Política de Cookies </p>
                        <p> Termos de uso </p>
                    </div>
                </div>

                <div className='div3Footer'>
                    <div className=''>
                        <p>Newsletter</p>
                    </div>
                    <p className='contatoEmailFooter'>Quer saber de tudo o que acontece na Inovalem?</p>
                    <p className='contatoEmailFooter'>INSCREVA-SE ⇣ ⇣ ⇣</p>
                    <div className="inputEbuttonFooter">
                        <input className="inputFooter" type="email" placeholder="Digite seu email"></input>
                        <button className="buttonFooter">ENVIAR</button>
                    </div>
                </div>

            </section>


        </>

    )
}