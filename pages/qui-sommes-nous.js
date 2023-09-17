import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CardVal from "@/components/Card/Card";
const QuiSommesNous = () => {
    return (
        <main>
            <Header imgHeader={'CONTAACT.png'} />
            <div className="width2 mx-auto py-3 blueColor">
                <p style={{ fontSize: '140%' }}>À propos de Bridge Assist</p>
                <h1 className="my-3">L’essence de Bridge Assist : <br />
                    Une approche innovante de l’assistance</h1>
                <div className="pb-5" style={{ borderBottom: '1px solid #004C97' }}>
                    <p>Fondée avec la vision de révolutionner le paysage des assurances en Algérie, Bridge Assist est une société algérienne d'assistance dédiée à simplifier et
                        à améliorer la vie de ses clients. Nous envisageons un avenir où les sociétés d’assistance seront le premier interlocuteur des clients et donc leur premier
                        fournisseur de service dans le domaine de l’assurance.</p>
                    <p>En plus de nos services d'assistance classiques, nous sommes en recherche constante d’innovation pour élargir notre gamme de services et offrir des
                        produits à haute valeur ajoutée. Notre but essentiel est de créer un écosystème complet permettant à nos clients de gagner du temps et d’être soutenus
                        à chaque instant.</p>
                    <p>En tant que pionniers dans le domaine de l'assistance du futur, nous sommes à l’avant-garde de l’intégration d’innovations majeures, offrant ainsi de
                        nouvelles possibilités pour le suivi médical, la détection de problèmes à domicile, dans le cas de perte de bagages et plus encore.</p>
                    <p>Restez connectés pour en savoir plus et rejoignez-nous dans notre mission de transformation du monde de l’assurance.</p>
                    <p className="text-end fw-bold my-3">Bridge Assist : l'assistance du futur, déjà à vos côtés!</p>
                </div>
                <h1 className="my-3">Valeurs</h1>
                <div className="row text-center my-5">
                    <div className="col-md-4 col-sm-12 d-flex"><CardVal text='nous nous engageons à répondre rapidement
                     et efficacement aux besoins de nos clients.' title='Réactivité' img='écoute-.png' /></div>
                    <div className="col-md-4 col-sm-12"><CardVal text="Nous valorisons l'innovation et cherchons
constamment à améliorer nos services et l'expérience
que nous offrons à nos clients." title='Innovation' img='Innovationn.png' /></div>
                    <div className="col-md-4 col-sm-12"><CardVal text='nous sommes déterminés à maintenir une relation
humaine et personnalisée avec nos
clients, leur assurant un accompagnement de
qualité.' title='Proximité' img='proximité.png' /></div>
                </div>
            </div>
            <div className="mb-5">
                <div></div>
                <div style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', right: '0', color: 'white' }}>
                        <div className="width2">
                            <h1 className="mx-3 fw-bold">Missions</h1>
                            <div className="d-flex align-items-center justify-content-end" style={{ width: '100%' }}>
                                <ul>
                                    <li className="mt-3">Fournir une assistance rapide, efficace et personnalisée à nos clients.</li>
                                    <li className="mt-3">Simplifer l'expérience de l’assistance et de l’assurance.</li>
                                    <li className="mt-3">Innover en proposant des solutions technologiques avant-gardistes en Algérie.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <img className="my-3" style={{ width: '100%', height: 'auto', minHeight: '300px' }} src="/images/Mission-2.png" />
                </div>
                <div style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', right: '0', color: 'white' }}>
                        <div className="width2">
                            <h1 className="mx-3 fw-bold">Vision</h1>
                            <div className="d-flex align-items-center justify-content-end" style={{ width: '100%' }}>
                                <div className="mb-5">Notre vision est de devenir la référence en matière d'assistance en Algérie en
                                   <br className="brNone" /> révolutionnant le paysage des assurances.</div>
                            </div>

                        </div>
                    </div>
                    <img className="my-3" style={{ width: '100%', height: 'auto', minHeight: '200px' }} src="/images/Vision-2.png" />
                </div>

            </div>
            <Footer />
        </main>
    );
}
export default QuiSommesNous;