import Image from "next/image";
import style from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={`row width2 mx-auto py-3 my-3 ${style.customborder}`} style={{color:'#004C97'}}>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <p>T : +213 00 00 00 00</p>
                <p>E : lorem@ipsum.oi</p>
                <p>A : Lorem Ipsum dafrin qoda, para esty</p>
                <p className={`${style.socialIcon}`}>
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
                            src="/images/Icones/X-12.png"
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
                </p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-between">
            <img
                            src="/images/LOGO-14.png"
                            alt="Innovation et expertise"
                            style={{width:'200px',height:'auto'}}
                           
                        />
                        <p className="mt-2">2023 Bridge Assist ©</p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 text-end">
                <p>Termes et conditions</p>
                <p>Politique de confidentialité</p>
                <p>Plan du site</p>
                <p>Powred by Whiteline Services</p>
            </div>
        </div>
    );
}
export default Footer;