import style from '@/styles/Home.module.css';
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Bouton from '@/components/Button/Button'
import Footer from '@/components/Footer/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bridge Assistant</title>
      </Head>
      <main>
        <Header imgHeader={'BA_Website_PagesHOME PAGE-10.png'} title='Un pont vers une vie épanouie chez vous' />
        <div className={`text-center m-auto mt-5 width2`} style={{ color: '#004C97' }}>
          <h1>Pourquoi nous choisir ?</h1>
          <p className='m-3'>Choisir Bridge Assist, c'est opter pour une tranquillité d'esprit inégalée. Nous offrons une assistance personnalisée, réactive et innovante. Découvrez
            pourquoi nous sommes le choix idéal :</p>
        </div>
        <div className="row m-0 m-auto width2 mt-5 mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12" >
            <div className={`${style.rounded1} ${style.gradientbox} ${style.contentbox}`}>
              <Image
                src="/images/Innovation et expertise-11.png"
                alt="Innovation et expertise"
                width={50}
                height={50}
              />
              <h2>Innovation et expertise</h2>
              <p>
                Chez Bridge Assist, nous combinons notre profonde connaissance du secteur des assurances
                avec une approche innovante pour offrir des solutions d'assistance automobile, domiciliaire,
                bris de glace et voyage efficaces et adaptées aux besoins de nos clients.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className={`${style.rounded1} ${style.gradientbox} ${style.contentbox}`}>
              <Image
                src="/images/Service Complet-11.png"
                alt="Innovation et expertise"
                width={50}
                height={50}
              />
              <h2>Service complet 24/7</h2>
              <p>
                notre dévouement envers nos
                clients ne s'arrête jamais. Nous
                sommes disponibles 24 heures

                sur 24, 7 jours sur 7, pour une as-
                sistance rapide et ecace à tout

                moment. Que ce soit pour une
                panne de voiture, un problème
                à domicile, lors d’un voyage ou
                pour bris de glace, nos équipes

                chevronnées sont à votre dispo-
                sition.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className={`${style.rounded1} ${style.gradientbox} ${style.contentbox}`}>
              <Image
                src="/images/Proximité-11.png"
                alt="Innovation et expertise"
                width={50}
                height={50}
              />
              <h2>Proximité avec vous</h2>
              <p>
                chez Bridge Assist, nous construi-
                sons des relations fortes et du-
                rables. Nous valorisons la proxi-
                mité et nous nous engageons à

                être le partenaire de conance
                sur lequel vous pouvez compter

                pour tous vos besoins d'assistan-
                ce. Nous sommes plus qu'une

                simple compagnie d'assistance,
                nous sommes votre allié en
                toutes circonstances.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-center fs-4 blueColor">Explorez Bridge Assist en téléchargeant notre présentation</h1>
        <Bouton />

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', height: '80%', width: '100%', top: '0', zIndex: '0', backgroundColor: '#004C97' }}>

          </div>
          <div className='width2 mx-auto py-5' style={{ zIndex: '99', position: 'relative' }}>
            <h1 className='text-center mb-5 ' style={{ color: 'white', zIndex: '99' }}>Nos produits</h1>
            <div className={`${style.conteneur}`} style={{ width: '100%', zIndex: '99' }}>
              <img src="/images/BA_Website_AUTO-10.png" alt="Image 1" className={`${style.img1}`} />
              <img src="/images/BA_Website_B-Travel-10.png" alt="Image 2" className={`${style.img2}`} />
              <br className={`${style.br}`} />
              <img src="/images/BA_Website_B-Glass-10.png" alt="Image 3" className={`${style.img3}`} />
              <img src="/images/BA_Website_PagesHOME PAGE-10.png" alt="Image 4" className={`${style.img4}`} />
            </div></div>

        </div>
        <Footer />
      </main>
    </>
  )
}
