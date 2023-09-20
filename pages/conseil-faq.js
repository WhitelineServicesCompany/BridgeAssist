import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/ConseilFaq.module.css"
const ConseilFaq = () => {
    return (
        <main>
            <Header imgHeader={'Conseil&Faq.png'} />
            <main>
                <section>
                    <div className={`width2 mx-auto my-5 blueColor d-flex`}>
                        <h1 className="mt-3" style={{marginRight:'10px'}}>Conseils utiles</h1>
                        <div className="d-flex justify-content-end align-items-end" style={{ flex: '1', borderBottom:`1px solid #004C97` }}>
                            <div className={`${styles.container}`}>
                                <img className={`${styles.icon}`} src="/images/B-Auto.png" />
                                <img className={`${styles.icon}`} src="/images/B-Home.png" />
                                <img className={`${styles.icon}`} src="/images/B-Glass.png" />
                               <div className={`px-3 pt-3 ${styles.avion}`}>
                                 <img className={`${styles.icon} mb-4`} src="/images/B-Travel.png" />
                               </div>
                               
                            </div>
                        </div>
                    </div>
                    <p className={`width2 mx-auto my-5 blueColor`}>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </section>
            </main>
            <Footer />
        </main>
    );
}
export default ConseilFaq;