import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function VideoSwiper() {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);
  const mobileData = [
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/dd/fe/987_mob_LknJQldOA8zbgDD2I0k5.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/8b/94/1026_mob_OI7T4TQOWmbHzWfbsiAb.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/f3/d5/1017_mob_OhNaNHGNZPCOAxcnlTMx.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/ab/0f/706_mob_9u72hMeDMasHiJzBXS5O.webp"

  ];
  const desktopData = [
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/53/ff/987_desk_A5yiKkXwgy1TUVBmbPuW.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/5c/ef/1026_desk_JH6nUJnltX0JOV4Z1VY2.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/be/54/1017_desk_VfOUnQOLM0muKbQ5ZTB9.webp",
    "https://storage-cdn11.gloria-jeans.ru/cms/banners/7f/2e/706_desk_4m2Q9htJWqFXLQkcd2tQ.webp"
  ]

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        // İlk slide üçün autoplay-u dayandır
        swiper.autoplay.stop();
      }}
      onSlideChange={() => {
        // Əgər geri qayıdıblarsa və 1-ci slide aktivdirsə video play et
        if (swiperRef.current.activeIndex === 0 && videoRef.current) {
          videoRef.current.play();
          swiperRef.current.autoplay.stop(); // autoplay dayansın video bitənə qədər
        }
      }}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper videoswiper relative w-full "
    // style={{ height: '100%' }} // Tam ekran hündürlüyü
    // autoplay={{
    //   delay: 3000, // Digər slide-lar üçün
    //   disableOnInteraction: false,
    // }}
    >
      {/* 1-ci slide */}
      <SwiperSlide className="w-full relative overflow-hidden   ">
        <video
          ref={videoRef}
          playsInline
          muted
          style={{
            objectFit: 'cover'
          }}
          autoPlay
          onEnded={() => {
            // Video bitdikdən sonra autoplay aktiv et və növbəti slide-a keç
            swiperRef.current.autoplay.start();
            swiperRef.current.slideNext();
          }}
        >
          <source src="/img/glj.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>

      {/* Digər slidelar */}
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

      {/* <SwiperSlide>
        <img className='md:hidden' src="https://storage-cdn11.gloria-jeans.ru/cms/banners/dd/fe/987_mob_LknJQldOA8zbgDD2I0k5.webp" alt="" />
        <img className='max-md:hidden' src="https://storage-cdn11.gloria-jeans.ru/cms/banners/53/ff/987_desk_A5yiKkXwgy1TUVBmbPuW.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.e-stradivarius.net/assets/public/f4a8/3f49/d2314b28bc07/d55e82d1cb21/2400_CasualSport/2400_CasualSport.jpg?ts=1754043444055&w=1311.25&f=auto" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.e-stradivarius.net/assets/public/a57e/2a8e/21594049ae7e/3c0854b9ed77/2400_STRTEEN/2400_STRTEEN.jpg?ts=1755075650907&w=1311.25&f=auto" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.e-stradivarius.net/assets/public/5616/edf8/60ce4a16b700/37b9b89f467f/2400_D91/2400_D91.jpg?ts=1754651438235&w=1311.25&f=auto" alt="" />
      </SwiperSlide> */}
    </Swiper>
  );
}

export default VideoSwiper;
