import style from '@/styles/Home.module.css';
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Bouton from '@/components/Button/Button'
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import React, { useState } from 'react';
export default function Home() {
  const Benefits = () => {
    const benefitsData = [
      {
        image: "/images/Innovation et expertise-11.png",
        title: "Innovation et expertise",
        description: "Chez Bridge Assist, nous combinons notre profonde connaissance du secteur des assurances avec une approche innovante pour offrir des solutions d'assistance automobile, domiciliaire, bris de glace et voyage efficaces et adaptées aux besoins de nos clients."
      },
      {
        image: "/images/Service Complet-11.png",
        title: "Service complet 24/7",
        description: "notre dévouement envers nos clients ne s'arrête jamais. Nous sommes disponibles 24 heures sur 24, 7 jours sur 7, pour une assistance rapide et efficace à tout moment. Que ce soit pour une panne de voiture, un problème à domicile, lors d’un voyage ou pour bris de glace, nos équipes chevronnées sont à votre disposition."
      },
      {
        image: "/images/Proximité-11.png",
        title: "Proximité avec vous",
        description: "chez Bridge Assist, nous construisons des relations fortes et durables. Nous valorisons la proximité et nous nous engageons à être le partenaire de confiance sur lequel vous pouvez compter pour tous vos besoins d'assistance. Nous sommes plus qu'une simple compagnie d'assistance, nous sommes votre allié en toutes circonstances."
      }
    ];

    return (
      <div className="row m-0 m-auto width2 mt-5">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="col-xl-4 col-lg-6 col-md-6 mx-auto col-sm-12 mb-5">
            <BenefitBox data={benefit} />
          </div>
        ))}
      </div>
    );
  };

  const BenefitBox = ({ data }) => {
    const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  
    const handleToggleDescription = () => {
      setDescriptionVisibility(prevVisibility => !prevVisibility);
    };
  
    return (
      <div 
      className={`${style.rounded1} ${style.gradientbox} ${style.contentbox} ${!isDescriptionVisible ? "description-arrondi" : ""}`}
        onClick={handleToggleDescription}
      >
        <Image src={data.image} alt={data.title} width={50} height={50} />
        <h2>{data.title}</h2>
        <p className={!isDescriptionVisible ? "description-hidden" : ""}>
          {data.description}
        </p>
      </div>
    );
  };
  
  const productsData = [
    {
      href: "/Produits/B-Auto",
      image: "/images/BA_Website_AUTO-10.png",
      title: "B-AUTO",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
    },
    {
      href: "/Produits/B-Travel",
      image: "/images/BA_Website_B-Travel-10.png",
      title: "B-TRAVEL",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
    },
    {
      href: "/Produits/B-Glass",
      image: "/images/glassFiltre.png",
      title: "B-GLASS",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
    },
    {
      href: "/Produits/B-Home",
      image: "/images/BA_Website_PagesHOME PAGE-10.png",
      title: "B-HOME",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
    }
  ];
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
        <div className={`text-center m-auto mt-5 width2 blueColor`}>
          <h1>Pourquoi nous choisir ?</h1>
          <p className='m-3'>Choisir Bridge Assist, c'est opter pour une tranquillité d'esprit inégalée. Nous offrons une assistance personnalisée, réactive et innovante. Découvrez
            pourquoi nous sommes le choix idéal :</p>
        </div>
        <Benefits />
        <h1 className="text-center fs-4 blueColor">Explorez Bridge Assist en téléchargeant notre présentation</h1>
        <Bouton />

        <div className={`${style.parentdiv}`}>
          <div className={`${style.firstchilddiv}`} >

          </div>
          <div className={`${style.secondchilddiv} width2 mx-auto py-5`}>
            <h1 className={`${style.headertext}`}>Nos produits</h1>
            <div className={`${style.conteneur}`}>
              {productsData.map((product, index) => (
                <Link key={index} href={product.href} legacyBehavior>
                  <div className={`${style.contimg} ${style[`img${index + 1}`]}`}>
                    <img src={product.image} alt={`Image ${index + 1}`} className={`${style[`img${index + 1}`]}`} />
                    <div className={`${style.Hovcontimg} text-white`}>
                      <h1 className='mb-4'>{product.title}</h1>
                      <p className={`${style.para} width2 text-center`}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

            </div></div>

        </div>
        <Footer />
      </main>
    </>
  )
}
