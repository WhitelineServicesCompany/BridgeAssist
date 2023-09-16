import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const QuiSommesNous = () => {
    return (
        <main>
            <Header imgHeader={'CONTAACT.png'} />
            <div className="width2 mx-auto py-3 blueColor">
                <p style={{fontSize:'140%'}}>À propos de Bridge Assist</p>
                <h1 className="my-3">L’essence de Bridge Assist : <br />
                    Une approche innovante de l’assistance</h1>
                <div className="pb-5" style={{borderBottom:'1px solid #004C97'}}>
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
            </div>
            <Footer />
        </main>
    );
}
export default QuiSommesNous;