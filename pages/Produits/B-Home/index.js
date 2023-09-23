import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../BProduits.module.css"
import Bouton from '@/components/Button/Button'
import { FaGreaterThan } from 'react-icons/fa';
const BHome = () => {
    return (
        <main>
            <Header imgHeader={'BA_Website_PagesHOME PAGE-10.png'} title="B-Home : Assistance Domiciliaire" subTitle="L'assistance à domicile
n'a jamais été aussi facile avec B-Home." />
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer}`}>
                    <h1>B-Home :<br />
                        Assistance Domiciliaire</h1>
                </div>
                <div className={`${styles.rightContainer}`}></div>
            </div>
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer} `} style={{ backgroundColor: '#EFF4F9', boxShadow: ' 0 0 20px rgba(0, 0, 0, 0.5)' }}>
                    <h2 className="redColor">Description du produit :</h2>
                    <p className="fw-semibold">Notre produit d'assistance domiciliaire vous offre une tranquillité d'esprit totale à
                        la maison. Que vous soyez confronté à un problème de plomberie, d'électricité, de
                        serrurerie ou de verrerie, nous avons la solution pour vous.</p>
                    <h2 className="redColor">Avantages :</h2>
                    <div className="fw-semibold">
                        <ul className={`${styles.customlist}`}>
                            <li>Accès à une équipe de professionnels qualifiés</li>
                            <li>Intervention rapide et efficace pour minimiser l'impact du sinistre</li>
                            <li>Coût des services couverts dans le cadre de votre assurance (jusqu'à la limite du
                                contrat.)</li>
                        </ul>
                    </div>
                    <h2 className="redColor">Comment ça marche ?</h2>
                    <p className="fw-semibold">
                        En cas de problème à la maison, vous n'avez qu'à nous appeler. Nous enverrons
                        un professionnel pour prendre en charge votre sinistre en un temps record.
                    </p>
                    <div><h2 className="blueColor my-3 text-end">Découvrir nos packs <FaGreaterThan className="fs-6 redColor" style={{}} /></h2></div>
                </div>
                <div className={`${styles.rightContainer}`}>
                    <div className={`${styles.image}`} style={{ backgroundImage: `url('/images/Plombier.jpg')` }}>

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
export default BHome;