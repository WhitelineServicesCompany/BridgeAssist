import Image from "next/image";
import style from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={`row width2 mx-auto py-3 mt-3 ${style.par} ${style.customborder}`} style={{ color: '#004C97' }}>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <p><img style={{ marginRight: '5px' }} src="/images/Icones/ICONES BLEU-12.png" alt="Address Icon" width="25" height="25" />
                    +213 00 00 00 00</p>
                <p><img style={{ marginRight: '5px' }} src="/images/Icones/ICONES BLEU-13.png" alt="Address Icon" width="25" height="25" />
                    lorem@ipsum.oi</p>
                <p><img style={{ marginRight: '5px' }} src="/images/Icones/ICONES BLEU-11.png" alt="Address Icon" width="25" height="25" />
                    Lorem Ipsum dafrin qoda, para esty</p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-between">
                <img
                    src="/images/LOGO-14.png"
                    alt="Innovation et expertise"
                    style={{ width: '150px', height: 'auto' }}

                />
                <p className="mt-2">2023 Bridge Assist ©</p>
                <p>Powred by Whiteline Services</p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 text-end">
                <p>Termes et conditions</p>
                <p>Politique de confidentialité</p>
                <p>Plan du site</p>
                <p className={`${style.socialIcon} justify-content-end mt-3`}>
                    <a>
                        <Image
                            src="/images/Icones/F-12.png"
                            alt="Innovation et expertise"
                            width={20}
                            height={20}
                        />

                    </a>
                    <a>
                        <Image
                            src="/images/Icones/IST-13.png"
                            alt="Innovation et expertise"
                            width={20}
                            height={20}
                        />
                    </a>
                    <a>
                        <Image
                            src="/images/Icones/in-12.png"
                            alt="Innovation et expertise"
                            width={20}
                            height={20}
                        />
                    </a>
                    <a>
                        <Image
                            src="/images/Icones/X-12.png"
                            alt="Innovation et expertise"
                            width={20}
                            height={20}
                        />
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Footer;