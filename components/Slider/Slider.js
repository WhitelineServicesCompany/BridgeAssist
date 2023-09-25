import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function CustomNextButton({ onClick, lastSlide }) {
    const opacity = lastSlide ? 0.2 : 1;
    return (
        <div
            style={{
                width: '50px',
                height: '50px',
                border: '1px solid red',
                borderRadius: '50%',
                marginLeft: '15px',
                opacity: opacity
            }}
            onClick={onClick}
            className={`custom-next-button d-flex align-items-center justify-content-center ${styles.dnone}`}
        >
            <AiOutlineRight style={{ color: 'red' }} />
        </div>
    );
}

function CustomPrevButton({ onClick, activeIndex }) {
    const opacity = activeIndex === 0 ? 0.2 : 1;
    return (
        <div
            style={{
                width: '50px',
                height: '50px',
                border: '1px solid red',
                borderRadius: '50%',
                marginRight: '15px',
                opacity: opacity
            }}
            onClick={onClick}
            className={`custom-prev-button d-flex align-items-center justify-content-center ${styles.dnone}`}

        >
            <AiOutlineLeft style={{ color: 'red' }} />
        </div>
    );
}

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastSlide, setLastSlide] = useState(false);

    return (
        <div>

            <div className="swiper-navigation d-flex justify-content-center align-items-center">
                <CustomPrevButton className="navx" onClick={() => { }} activeIndex={activeIndex} />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.custom-next-button',
                        prevEl: '.custom-prev-button',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        renderBullet: (index, className) => {
                            return '<span class="' + className + '"></span>';
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.activeIndex);
                        if (swiper.isEnd) {
                            setLastSlide(true);
                        } else {
                            setLastSlide(false);
                        }
                    }}
                    className={`width3 m-0 px-3 py-5 ${styles.swiperContainer}`}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            pagination:{
                                clickable: false,
                                dynamicBullets: false,
                                renderBullet: (index, className) => {
                                    return '';
                                },
                            }
                        },
                    }}
                    
                >
                    <SwiperSlide>
                        <div style={{ width: '100%', maxWidth: '250px', margin: 'auto', height: '350px', borderRadius: '20px' }}
                            className={`${styles.divimage} `}>
                            <div className="pb-2 d-flex align-items-end justify-content-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                                <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`} style={{
                                    borderRadius: '20px',
                                    width: '90%', backgroundColor: '#004C97'
                                }}>
                                    <p className={`m-0 fw-semibold ${styles.divp}`} style={{ color: 'white' }}>Lorem ipsum dolor sit
                                        amet, consectetuer
                                        adipiscing elit, sed</p>
                                    <p style={{ width: '100%' }} className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '100%', maxWidth: '250px', margin: 'auto', height: '350px', borderRadius: '20px' }}
                            className={`${styles.divimage} `}>
                            <div className="pb-2 d-flex align-items-end justify-content-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                                <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`} style={{
                                    borderRadius: '20px',
                                    width: '90%', backgroundColor: '#004C97'
                                }}>
                                    <p className={`m-0 fw-semibold ${styles.divp}`} style={{ color: 'white' }}>Lorem ipsum dolor sit
                                        amet, consectetuer
                                        adipiscing elit, sed</p>
                                    <p style={{ width: '100%' }} className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '100%', maxWidth: '250px', margin: 'auto', height: '350px', borderRadius: '20px' }}
                            className={`${styles.divimage} `}>
                            <div className="pb-2 d-flex align-items-end justify-content-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                                <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`} style={{
                                    borderRadius: '20px',
                                    width: '90%', backgroundColor: '#004C97'
                                }}>
                                    <p className={`m-0 fw-semibold ${styles.divp}`} style={{ color: 'white' }}>Lorem ipsum dolor sit
                                        amet, consectetuer
                                        adipiscing elit, sed</p>
                                    <p style={{ width: '100%' }} className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '100%', maxWidth: '250px', margin: 'auto', height: '350px', borderRadius: '20px' }}
                            className={`${styles.divimage} `}>
                            <div className="pb-2 d-flex align-items-end justify-content-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                                <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`} style={{
                                    borderRadius: '20px',
                                    width: '90%', backgroundColor: '#004C97'
                                }}>
                                    <p className={`m-0 fw-semibold ${styles.divp}`} style={{ color: 'white' }}>Lorem ipsum dolor sit
                                        amet, consectetuer
                                        adipiscing elit, sed</p>
                                    <p style={{ width: '100%' }} className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '100%', maxWidth: '250px', margin: 'auto', height: '350px', borderRadius: '20px' }}
                            className={`${styles.divimage} `}>
                            <div className="pb-2 d-flex align-items-end justify-content-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                                <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`} style={{
                                    borderRadius: '20px',
                                    width: '90%', backgroundColor: '#004C97'
                                }}>
                                    <p className={`m-0 fw-semibold ${styles.divp}`} style={{ color: 'white' }}>Lorem ipsum dolor sit
                                        amet, consectetuer
                                        adipiscing elit, sed</p>
                                    <p style={{ width: '100%' }} className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: '100%', maxWidth: '250px', margin: 'auto', height: '350px', borderRadius: '20px' }}
                            className={`${styles.divimage} `}>
                            <div className="pb-2 d-flex align-items-end justify-content-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                                <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`} style={{
                                    borderRadius: '20px',
                                    width: '90%', backgroundColor: '#004C97'
                                }}>
                                    <p className={`m-0 fw-semibold ${styles.divp}`} style={{ color: 'white' }}>Lorem ipsum dolor sit
                                        amet, consectetuer
                                        adipiscing elit, sed</p>
                                    <p style={{ width: '100%' }} className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <CustomNextButton onClick={() => { }} lastSlide={lastSlide} />
            </div>
        </div>
    );
}

export default Slider;