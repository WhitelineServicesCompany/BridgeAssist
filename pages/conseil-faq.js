import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/styles/ConseilFaq.module.css"
import Slider from "@/components/Slider/Slider";
import CollapsibleContainer from '@/components/Collapse/CollapsibleContainer'

const ConseilFaq = () => {
    return (
        <main>
            <Header imgHeader={'Conseil&Faq.png'} title="Conseils & FAQ" />
            <main>
                <section>
                    <div className={`width2 mx-auto my-5 blueColor d-flex`}>
                    <h1 className={`${styles.title}`}>Conseils utiles</h1>
                                            <div className="d-flex justify-content-end align-items-end" style={{ flex: '1', borderBottom: `1px solid #004C97` }}>
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
                    <Slider />
                    <div className={`${styles.divider} mb-5 pb-5 width2 mx-auto`}></div>
                </section>
                <section>
                    <div className="width2 mx-auto blueColor">
                        <h1>FAQ</h1>
                        <p className="my-3 text-center">Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                    </div>
                    <div className="d-flex flex-column">
                        <CollapsibleContainer title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?">
                            <p className="fw-semibold blueColor">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                                odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </CollapsibleContainer>
                        <CollapsibleContainer title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?">
                            <p className="fw-semibold blueColor">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                                odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </CollapsibleContainer>
                        <CollapsibleContainer title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?">
                            <p className="fw-semibold blueColor">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                                odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </CollapsibleContainer>
                        <CollapsibleContainer title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?">
                            <p className="fw-semibold blueColor">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                                vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                                odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </CollapsibleContainer>
                    </div>
                </section>
            </main>
            <Footer />
        </main>
    );
}
export default ConseilFaq;