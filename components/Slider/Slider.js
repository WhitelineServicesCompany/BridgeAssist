import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css'
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function CustomNextButton({ onClick }) {
    return <div style={{ width: '50px', height: '50px', border: '1px solid red', borderRadius: '50%',marginLeft:'15px' }} onClick={onClick} className="custom-next-button d-flex align-items-center justify-content-center"><AiOutlineRight style={{color:'red'}} /></div>;

}

function CustomPrevButton({ onClick }) {
    return <div style={{ width: '50px', height: '50px', border: '1px solid red', borderRadius: '50%',marginRight:'15px' }} onClick={onClick} className="custom-prev-button d-flex align-items-center justify-content-center"><AiOutlineLeft style={{color:'red'}} /></div>;

}

const Slider = () => {
    return (
        <div>
           
           <div className="swiper-navigation d-flex justify-content-center align-items-center">
                <CustomPrevButton />
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-next-button',
                    prevEl: '.custom-prev-button',
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='width3 m-0 px-3 py-5'
                breakpoints={{

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide><div style={{ width: '100%',maxWidth:'250px', margin: 'auto', height: '350px',borderRadius:'20px' }} className={`${styles.divimage}`}></div></SwiperSlide>
                <SwiperSlide><div style={{ width: '100%',maxWidth:'250px', margin: 'auto', height: '350px',borderRadius:'20px' }} className={`${styles.divimage}`}></div></SwiperSlide>
                <SwiperSlide><div style={{ width: '100%',maxWidth:'250px', margin: 'auto', height: '350px',borderRadius:'20px' }} className={`${styles.divimage}`}></div></SwiperSlide>
                <SwiperSlide><div style={{ width: '100%',maxWidth:'250px', margin: 'auto', height: '350px',borderRadius:'20px' }} className={`${styles.divimage}`}></div></SwiperSlide>
                <SwiperSlide><div style={{ width: '100%',maxWidth:'250px', margin: 'auto', height: '350px',borderRadius:'20px' }} className={`${styles.divimage}`}></div></SwiperSlide>
                <SwiperSlide><div style={{ width: '100%',maxWidth:'250px', margin: 'auto', height: '350px',borderRadius:'20px' }} className={`${styles.divimage}`}></div></SwiperSlide>

            </Swiper>
                <CustomNextButton />
            </div>
        </div>
    );
}

export default Slider;
