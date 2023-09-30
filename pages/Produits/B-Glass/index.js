import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../BProduits.module.css"
import Bouton from '@/components/Button/Button'
import { FaGreaterThan } from 'react-icons/fa';
const BGlass = () => {
    return (
        <main>
            <Header imgHeader={'glassFiltre.png'} title="B-Glass : Assistance Bris de Glace" subTitle="Vos vitres n’ont jamais été
aussi bien protégées." />
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer}`}>
                    <h1>B-Glass :<br />
                        Assistance Bris de Glace</h1>
                </div>
                <div className={`${styles.rightContainer}`}></div>
            </div>
            <div className={`d-none ${styles.imgtop}`}>
                    <div className={`${styles.imag1} mx-auto`}>
                  <div className={`${styles.imag2}`} style={{backgroundImage: `url('/images/BA_Website_B-Glass-10.png')`}}>

                    </div>
                    </div>
                   
                </div>
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer} ${styles.leftContainer2}`}>
                    <h2 className="redColor">Description du produit :</h2>
                    <p className="fw-semibold">Notre assurance bris de glace vous couvre en cas de dommages à vos vitres, que
                        cela soit celles de votre voiture ou les fenêtres de votre maison.</p>
                    <h2 className="redColor">Avantages :</h2>
                    <div className="fw-semibold">
                        <ul className={`${styles.customlist}`}>
                            <li>Réparation ou remplacement rapide de vos vitres endommagées</li>
                            <li>Services sans tracas avec prise en charge directe des coûts</li>
                            <li>Couverture étendue qui s'applique à tous les types de vitres</li>
                        </ul>
                    </div>
                    <h2 className="redColor">Comment ça marche ?</h2>
                    <p className="fw-semibold">
                        En cas de bris de glace, il suffit de nous appeler. Nous organiserons la réparation
                        ou le remplacement de vos vitres le plus rapidement possible.
                    </p>
                    <div><h2 className="blueColor my-3 text-end">Découvrir nos packs <FaGreaterThan className="fs-6 redColor" /></h2></div>
                </div>
                <div className={`${styles.rightContainer}`}>
                    <div className={`${styles.image}`} style={{ backgroundImage: `url('/images/BA_Website_B-Glass-10.png')` }}>

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
export default BGlass;