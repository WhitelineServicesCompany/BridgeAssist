import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CardVal from "@/components/Card/Card";
import styles from "@/styles/SommesNous.module.css";
const QuiSommesNous = () => {
    const cardValues = [
        {
            text: 'Nous nous engageons à répondre rapidement et efficacement aux besoins de nos clients.',
            title: 'Réactivité',
            img: 'écoute-.png'
        },
        {
            text: "Nous valorisons l'innovation et cherchons constamment à améliorer nos services et l'expérience que nous offrons à nos clients.",
            title: 'Innovation',
            img: 'Innovationn.png'
        },
        {
            text: 'Nous sommes déterminés à maintenir une relation humaine et personnalisée avec nos clients, leur assurant un accompagnement de qualité.',
            title: 'Proximité',
            img: 'proximité.png'
        }
    ];
    return (

        <main>
            <Header imgHeader={'CONTAACT.png'} title='Qui sommes-nous ?' />
            <div className="width2 mx-auto py-3 blueColor">
                <p className={styles.tailleTexteP}>À propos de Bridge Assist</p>
                <h1 className="my-3">L’essence de Bridge Assist : <br />
                    Une approche innovante de l’assistance</h1>
                <div className={`pb-5 ${styles.bordureBasBleue}`}>
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
                <h1 className="my-3">Nos valeurs</h1>
                <div className="row text-center my-5">
                    {cardValues.map((card, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-xs-12 d-flex mx-auto">
                            <CardVal text={card.text} title={card.title} img={card.img} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-5">

                <div className={`row m-0 mb-3 py-5 ${styles.missions} ${styles.hauteurMinSection}`}>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <h1 className="fw-bold">Nos missions</h1>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <ul>
                            <li className="mt-3">Fournir une assistance rapide, efficace et personnalisée à nos clients.</li>
                            <li className="mt-3">Simplifer l'expérience de l’assistance et de l’assurance.</li>
                            <li className="mt-3">Innover en proposant des solutions technologiques avant-gardistes en Algérie.</li>
                        </ul>
                    </div>
                </div>

                <div className={`row m-0 py-5 ${styles.vision} ${styles.hauteurMinSection}`}>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <h1 className="fw-bold">Notre vision</h1>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div>
                            Notre vision est de devenir la référence en matière d'assistance en Algérie en révolutionnant le paysage des assurances.
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}
export default QuiSommesNous;