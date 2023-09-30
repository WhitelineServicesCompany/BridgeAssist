import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../BProduits.module.css"
import Bouton from '@/components/Button/Button'

const BTravel = () => {
    return (
        <main>
            <Header imgHeader={'BA_Website_B-Travel-10.png'} title="B-Travel : Assistance Voyage" subTitle="Voyagez l'esprit serein." />
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer}`}>
                    <h1>B-Travel :<br />
                        Assistance Voyage</h1>
                </div>
                <div className={`${styles.rightContainer}`}></div>
            </div>
            <div className={`d-none ${styles.imgtop}`}>
                    <div className={`${styles.imag1} mx-auto`}>
                  <div className={`${styles.imag2}`} style={{backgroundImage: `url('/images/avion.jpg')`}}>

                    </div>
                    </div>
                   
                </div>
            <div className={`${styles.BFlex} width2 my-5 blueColor`}>
                <div className={`${styles.leftContainer}  ${styles.leftContainer2} pb-3`}>
                    <h2 className="redColor">Description du produit :</h2>
                    <p className="fw-semibold">Notre produit d’assistance voyage couvre un large éventail de situations, de l'annulation
                        de vols aux urgences médicales à l'étranger, en passant par la perte de
                        bagages.</p>
                    <h2 className="redColor">Avantages :</h2>
                    <div className="fw-semibold">
                        <ul className={`${styles.customlist}`}>
                            <li>Couverture médicale complète pour une tranquillité d'esprit durant votre séjour</li>
                            <li>Assistance 24/7 en cas d’urgence durant votre voyage</li>
                            <li>Accès à un réseau mondial d'assistance médicale</li>
                            <li>Prise en charge des frais médicaux, des pertes de bagages et des retards/annulations
                                de vols</li>
                        </ul>
                    </div>
                    <h2 className="redColor">Comment ça marche ?</h2>
                    <p className="fw-semibold">
                        En cas de problème à la maison, vous n'avez qu'à nous appeler. Nous enverrons
                        un professionnel pour prendre en charge votre sinistre en un temps record.
                    </p>
  
                </div>
                <div className={`${styles.rightContainer}`}>
                    <div className={`${styles.image}`} style={{ backgroundImage: `url('/images/avion.jpg')`}}>

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
export default BTravel;