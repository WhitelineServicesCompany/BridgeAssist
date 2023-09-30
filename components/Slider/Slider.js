import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function CustomButton({ direction, onClick, disabled }) {
    const Icon = direction === "next" ? AiOutlineRight : AiOutlineLeft;
    return (
        <div
            style={{ opacity: disabled ? 0.2 : 1 }}
            onClick={disabled ? null : onClick}
            className={`custom-${direction}-button d-flex align-items-center justify-content-center ${direction === "next" ? styles.btnNext : styles.btnPrev} ${styles.dnone}`}
        >
            <Icon className={styles.iconRed} />
        </div>
    );
}

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastSlide, setLastSlide] = useState(false);
    const slidesContent = new Array(6).fill().map(() => (
        <SwiperSlide>
            <div className={`${styles.divimage}`}>
                <div className={`pb-2 d-flex align-items-end justify-content-center ${styles.slideOverlay}`}>
                    <div className={`p-2 d-flex flex-column align-items-center justify-content-center ${styles.bgblue}`}>
                        <p className={`m-0 fw-semibold ${styles.divp}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
                        <p className={`text-white m-0 fw-semibold text-end d-none ${styles.dfn}`}>Lire l'article <AiOutlineRight /></p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));
    return (
        <div>

            <div className="swiper-navigation d-flex justify-content-center align-items-center">
                <CustomButton direction="prev" onClick={() => { }} disabled={activeIndex === 0} />
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
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            pagination: {
                                clickable: false,
                                dynamicBullets: false,
                                renderBullet: (index, className) => {
                                    return '';
                                },
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            pagination: {
                                clickable: false,
                                dynamicBullets: false,
                                renderBullet: (index, className) => {
                                    return '';
                                },
                            }
                        },
                    }}

                >
                    {slidesContent}
                </Swiper>
                <CustomButton direction="next" onClick={() => { }} disabled={lastSlide} />
            </div>
        </div>
    );
}

export default Slider;