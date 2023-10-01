import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Contact.module.css"
import Image from "next/image";
import React, { useState } from 'react';
const Bouton = () => {
    return (
        <div className={`${styles.button} mt-4`}>
            <span className={styles.circle}>
                <span className={styles.fleche}>▼</span>
            </span>
            Envoyer
        </div>

    );
}
const Contact = () => {
    const [selectedButton, setSelectedButton] = useState('client');
    return (
        <main>
            <Header imgHeader={'BA_Website_Pages-version-MobV2.png'} title="Nous contacter" />
            <div className={`row width2 mx-auto blueColor my-5 ${styles.margB}`} style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 1)' }}>
                <div className={`col-md-7 col-sm-12 py-5`} style={{ backgroundColor: '#EFF4F9' }}>
                    <div className="px-3">
                        <div className={`d-flex`} style={{ gap: '10px' }}>
                            <div
                                className={`px-3 py-1 ${selectedButton === 'client' ? 'bg-red text-white' : ''}`}
                                style={{ borderRadius: '50px' }}
                                onClick={() => setSelectedButton('client')}
                            >
                                <h2 className="fs-6 my-1">Service Client</h2>
                            </div>
                            <div
                                className={`px-3 py-1 ${selectedButton === 'carriere' ? 'bg-red text-white' : ''}`}
                                style={{ borderRadius: '50px' }}
                                onClick={() => setSelectedButton('carriere')}
                            >
                                <h2 className="fs-6 my-1">Carrière</h2>
                            </div>
                        </div>
                        {selectedButton === 'client' && (
                            <div className="client">
                                <p className="px-3 py-5 fst-italic">Envoyez un message</p>
                                <form>
                                    <div>
                                        <label htmlFor="name">Nom*:</label>
                                        <input type="text" id="name" name="name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" />
                                    </div>
                                    <div>
                                        <label htmlFor="tel">Téléphone:</label>
                                        <input type="tel" id="tel" name="tel" />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message:</label>
                                        <textarea id="message" name="message" rows="4"></textarea>
                                    </div>
                             
                                        <Bouton />
                                  
                                </form>
                            </div>
                        )}
                        {selectedButton === 'carriere' && (
                            <div className="carriere">
                                <p className="px-3 py-5 fst-italic">Vous êtes intéressé par une carrière chez Bridge Assist ?
                                    Nous sommes toujours à la recherche de talents.<br />
                                    Utilisez le formulaire ci-dessous pour nous envoyer votre CV.</p>
                                <form>
                                    <div>
                                        <label htmlFor="prenom">Prénom *</label>
                                        <input type="text" id="prenom" name="prenom" required />
                                    </div>
                                    <div>
                                        <label htmlFor="nom">Nom *</label>
                                        <input type="text" id="nom" name="nom" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">E-mail *</label>
                                        <input type="email" id="email" name="email" />
                                    </div>
                                    <div>
                                        <label htmlFor="tel">Numéro de Téléphone *</label>
                                        <input type="tel" id="tel" name="tel" />
                                    </div>
                                      <Bouton />
                                </form>
                            </div>
                        )}

                    </div>
                </div>
                <div className={`col-md-5 col-sm-12 ${styles.infoContact} d-flex flex-column justify-content-center align-items-center py-5`} style={{ padding: '20px' }}>
                    {/* Information Section */}
                    <div className="d-flex flex-column align-items-start text-white" style={{ gap: '20px' }}>
                        <div className="d-flex align-items-center mb-2">
                            <img src="/images/Icones/position.png" alt="Address Icon" width="40" height="40" />
                            <span className="mx-3">43, Lorem Ipsum Lorem <br />
                                Ipsum, Lorem Ipsum</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <img src="/images/Icones/téléphone.png" alt="Phone Icon" width="40" height="40" />
                            <span className="mx-3">Votre numéro de téléphone ici</span>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <img src="/images/Icones/e-mail.png" alt="Mail Icon" width="40" height="40" />
                            <span className="mx-3">courrier@bridgeassist.com</span>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="d-flex flex-column align-items-center mt-auto text-white"> {/* 'mt-auto' pour pousser le contenu vers le bas */}
                        <p className="mb-3 fw-semibold">Retrouvez-nous sur</p>
                        <div className="d-flex" style={{ gap: '20px' }}>
                            <a>
                                <Image
                                    src="/images/Icones/RS-14.png"
                                    alt="Innovation et expertise"
                                    width={10}
                                    height={20}
                                />

                            </a>
                            <a>
                                <Image
                                    src="/images/Icones/RS-16.png"
                                    alt="Innovation et expertise"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a>
                                <Image
                                    src="/images/Icones/RS-17.png"
                                    alt="Innovation et expertise"
                                    width={20}
                                    height={20}
                                />
                            </a>
                            <a>
                                <Image
                                    src="/images/Icones/RS-15.png"
                                    alt="Innovation et expertise"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
                style={{
                    border: '0',
                    width: '100%',
                    height: '60vh',
                    borderTopLeftRadius: '50% 50%',
                    borderTopRightRadius: '50% 50%', 
                }}
                className={`${styles.Index}`}
                loading='lazy'
            ></iframe>

            <Footer />
        </main>
    );
}

export default Contact;
