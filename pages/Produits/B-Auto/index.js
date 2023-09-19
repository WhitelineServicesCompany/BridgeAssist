import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../BProduits.module.css"
import Bouton from '@/components/Button/Button'
import { FaGreaterThan } from 'react-icons/fa';
const BAuto = () => {
    return (
        <main>
            <Header imgHeader={'BA_Website_AUTO-10.png'} />
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer}`}>
                    <h1>B-Auto : <br />
                        Assistance Routière</h1>
                </div>
                <div className={`${styles.rightContainer}`}></div>
            </div>
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer} `} style={{ backgroundColor: '#EFF4F9', boxShadow: ' 0 0 20px rgba(0, 0, 0, 0.5)' }}>
                    <h2 className="redColor">Description du produit :</h2>
                    <p className="fw-semibold">
                        Notre assistance routière est disponible en trois packs : Classique, Silver et Gold.
                        Chaque pack offre une gamme de services pour répondre à vos besoins spéci-
                        fiques.</p>
                    <h2 className="redColor">Avantages :</h2>
                    <p className="fw-semibold">
                        Accès à une assistance routière 24/7, où que vous soyez
                        Gamme de services étendue, allant du survoltage de batterie à l'envoi de médicaments <br />
                        Selon le pack, services supplémentaires comme le véhicule de remplacement, l'assistance
                        juridique et bien d'autres
                    </p>
                    <h2 className="redColor">Comment ça marche ?</h2>
                    <p className="fw-semibold">
                        Choisissez le pack qui correspond le mieux à vos besoins et souscrivez à notre assurance.
                        En cas de problème sur la route, contactez-nous et nous vous aiderons le
                        plus rapidement possible.
                    </p>
                    <div><h2 className="blueColor my-3 text-end">Découvrir nos packs <FaGreaterThan className="fs-6 redColor" style={{}} /></h2></div>
                </div>
                <div className={`${styles.rightContainer}`}>
                    <div className={`${styles.image}`}>

                    </div>
                    <div className={`${styles.image2}`}>

                    </div>

                </div>
            </div>
            <div>
                <h1 className="text-center fs-4 blueColor">Les conditions générales</h1>
                <Bouton />
            </div>
            <Footer />
        </main>
    );
}
export default BAuto;