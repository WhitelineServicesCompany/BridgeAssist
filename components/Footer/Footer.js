import Image from "next/image";
import style from "./Footer.module.css";
import React, { useState } from 'react';

const Footer = () => {
    const [iconeSelectionnee, setIconeSelectionnee] = useState(null);

    const gererClickIcone = (iconId) => {
        setIconeSelectionnee(iconeSelectionnee === iconId ? null : iconId);
    };

    return (
        <>
            <footer style={{fontSize:'14px'}}>
                <div className={`row width2 mx-auto py-3 mt-3 ${style.footerdesk} ${style.par} ${style.customborder}`}>
                    <address className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <p>
                            <Image src="/images/Icones/ICONES BLEU-12.png" alt="Icône de téléphone" width="25" height="25" />
                            +213 00 00 00 00
                        </p>
                        <p>
                            <Image src="/images/Icones/ICONES BLEU-13.png" alt="Icône d'e-mail" width="25" height="25" />
                            lorem@ipsum.oi
                        </p>
                        <p>
                            <Image src="/images/Icones/ICONES BLEU-11.png" alt="Icône d'adresse" width="25" height="25" />
                            Lorem Ipsum dafrin qoda, para esty
                        </p>
                    </address>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-between">
                        <img
                            src="/images/LOGO-14.png"
                            alt="Logo Bridge Assist"
                            className={`${style.logoFooter}`}
                        />
                        <p className="mt-2">2023 Bridge Assist ©</p>
                        <p style={{fontStyle:'italic'}}>Powred by Whiteline Services</p>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 text-end">
                        <nav>
                            <p>Termes et conditions</p>
                            <p>Politique de confidentialité</p>
                            <p>Plan du site</p>
                        </nav>
                        <div className={`${style.socialIcon} justify-content-end mt-3`}>
                            <a href="#" aria-label="Lien vers Facebook">
                                <Image src="/images/Icones/F-12.png" alt="Icône Facebook" width={20} height={20} />
                            </a>
                            <a href="#" aria-label="Lien vers Instagram">
                                <Image src="/images/Icones/IST-13.png" alt="Icône Instagram" width={20} height={20} />
                            </a>
                            <a href="#" aria-label="Lien vers LinkedIn">
                                <Image src="/images/Icones/in-12.png" alt="Icône LinkedIn" width={20} height={20} />
                            </a>
                            <a href="#" aria-label="Lien vers X">
                                <Image src="/images/Icones/X-12.png" alt="Icône X" width={20} height={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`width2 mx-auto py-3 mt-3 d-none ${style.footermob} ${style.par} ${style.customborder} d-flex flex-column align-items-center`} style={{ gap: '5px' }}>
                    <img
                        src="/images/LOGO-14.png"
                        alt="Logo Bridge Assist"
                        className={`${style.logoFooter}`}
                    />
                    <p className="mt-2">2023 Bridge Assist ©</p>
                    <div  className="d-flex justify-content-between align-items-center" style={{width:'100%'}}>
                           <div style={{ display: 'flex', justifyContent: 'center',gap:'15px' }}>
                        <div className={`${style.btnIcon}`} onClick={() => gererClickIcone('phone')} aria-label="Afficher le téléphone">
                            <Image src="/images/Icones/ICONES BLEU-12.png" alt="Icône de téléphone" width="30" height="30" />
                        </div>
                        <div className={`${style.btnIcon}`} onClick={() => gererClickIcone('email')} aria-label="Afficher l'email">
                            <Image src="/images/Icones/ICONES BLEU-13.png" alt="Icône d'e-mail" width="30" height="30" />
                        </div>
                        <div className={`${style.btnIcon}`} onClick={() => gererClickIcone('address')} aria-label="Afficher l'adresse">
                            <Image src="/images/Icones/ICONES BLEU-11.png" alt="Icône d'adresse" width="30" height="30" />
                        </div>
                    </div>
                    <div className={`${style.socialIcon} my-2`}>
                        <a href="#" aria-label="Lien vers Facebook">
                            <Image src="/images/Icones/F-12.png" alt="Icône Facebook" width={20} height={20} />
                        </a>
                        <a href="#" aria-label="Lien vers Instagram">
                            <Image src="/images/Icones/IST-13.png" alt="Icône Instagram" width={20} height={20} />
                        </a>
                        <a href="#" aria-label="Lien vers LinkedIn">
                            <Image src="/images/Icones/in-12.png" alt="Icône LinkedIn" width={20} height={20} />
                        </a>
                        <a href="#" aria-label="Lien vers X">
                            <Image src="/images/Icones/X-12.png" alt="Icône X" width={20} height={20} />
                        </a>
                    </div>
                    </div>
                 <div style={{width:'100%',textAlign:'center'}}>
                      {iconeSelectionnee === 'phone' && <p>+213 00 00 00 00</p>}
                    {iconeSelectionnee === 'email' && <p>lorem@ipsum.oi</p>}
                    {iconeSelectionnee === 'address' && <p>Lorem Ipsum dafrin qoda, para esty</p>}
                 </div>
                  
                 
                    <div className="d-flex justify-content-between" style={{fontSize:'14px',width:'100%'}}>
                        <p>Termes et conditions</p>
                        <p>Politique de confidentialité</p>
                    </div>
                    <p>Plan du site</p>

                    <p style={{fontStyle:'italic'}}>Powred by Whiteline Services</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
