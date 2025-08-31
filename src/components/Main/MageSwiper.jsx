import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function MageSwiper({mobileData, desktopData}) {
    const swiperRef = useRef(null);
    const videoRef = useRef(null);

    

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper videoswiper w-full bg-black h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-screen">
            {mobileData.map((item, i) => (
                <SwiperSlide className='md:hidden!' key={i}>
                    <img src={item} alt="photo" />
                </SwiperSlide>
            ))}

            {desktopData.map((item, i) => (
                <SwiperSlide className='max-md:hidden!' key={i}>
                    <img src={item} alt="photo" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MageSwiper;
