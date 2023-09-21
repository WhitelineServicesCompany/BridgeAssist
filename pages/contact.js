import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/Contact.module.css"
import React, { useState } from 'react';
const Contact = () => {
    const [selectedButton, setSelectedButton] = useState('client');
    return (
        <main>
            <Header imgHeader={'BA_Website_Pages-version-MobV2.png'} />
            <div className={`row width2 mx-auto blueColor my-5`} style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 1)' }}>
                <div className={`col-md-7 col-sm-12 py-5`} style={{ backgroundColor: '#EFF4F9' }}>
                    <div className="px-3">
                        <div className={`d-flex`} style={{ gap: '10px' }}>
                            <div
                                className={`px-3 py-1 ${selectedButton === 'client' ? 'bg-red text-white' : ''}`}
                                style={{ borderRadius: '50px' }}
                                onClick={() => setSelectedButton('client')}
                            >
                                <h2>Service Client</h2>
                            </div>
                            <div
                                className={`px-3 py-1 ${selectedButton === 'carriere' ? 'bg-red text-white' : ''}`}
                                style={{ borderRadius: '50px' }}
                                onClick={() => setSelectedButton('carriere')}
                            >
                                <h2>Carrière</h2>
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
                                    <div>
                                        <button type="submit">Envoyer</button>
                                    </div>
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
                                    <div>
                                        <button type="submit">Envoyer</button>
                                    </div>
                                </form>
                            </div>
                        )}

                    </div>
                </div>
                <div className={`col-md-5 col-sm-12 ${styles.infoContact} d-flex flex-column justify-content-center align-items-center py-5`} style={{ padding: '20px' }}>
                    {/* Information Section */}
                    <div className="d-flex flex-column align-items-start text-white" style={{gap:'20px'}}>
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
                    <div className="d-flex flex-column align-items-center mt-auto"> {/* 'mt-auto' pour pousser le contenu vers le bas */}
                        <div className="mb-3">Retrouvez-nous sur</div>
                        <div className="d-flex">
                            {/* Remplacez ces liens par les vôtres et ajoutez plus si nécessaire */}
                            <a href="https://facebook.com" className="mx-2">
                                <img src="/path/to/facebook-icon.png" alt="Facebook Icon" width="24" height="24" />
                            </a>
                            <a href="https://twitter.com" className="mx-2">
                                <img src="/path/to/twitter-icon.png" alt="Twitter Icon" width="24" height="24" />
                            </a>
                            <a href="https://instagram.com" className="mx-2">
                                <img src="/path/to/instagram-icon.png" alt="Instagram Icon" width="24" height="24" />
                            </a>
                            {/* ... Ajoutez plus d'icônes si nécessaire ... */}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}

export default Contact;
