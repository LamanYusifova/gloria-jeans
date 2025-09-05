import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function VideoSwiper() {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

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
  ];

  return (
    <div className="relative w-full">
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center  z-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin "></div>
        </div>
      )}

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop(); // İlk slide üçün autoplay dayandırılır
        }}
        onSlideChange={() => {
          // Əgər geri qayıdırlarsa və 1-ci slide aktivdirsə video yenidən oynadılır
          if (swiperRef.current.activeIndex === 0 && videoRef.current) {
            videoRef.current.play();
            swiperRef.current.autoplay.stop();
          }
        }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper videoswiper w-full"
      >
        {/* 1-ci slide (video) */}
        <SwiperSlide className="w-full relative overflow-hidden">
          <video
            ref={videoRef}
            playsInline
            muted
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
            autoPlay
            onLoadedData={() => setLoading(false)} // Video hazır olduqda loading gizlənir
            onEnded={() => {
              swiperRef.current.autoplay.start();
              swiperRef.current.slideNext();
            }}
          >
            <source src="/img/glj.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>

        {/* Digər slidelar (mobil) */}
        {mobileData.map((item, i) => (
          <SwiperSlide className="md:hidden!" key={i}>
            <img src={item} alt="photo" />
          </SwiperSlide>
        ))}

        {/* Digər slidelar (desktop) */}
        {desktopData.map((item, i) => (
          <SwiperSlide className="max-md:hidden!" key={i}>
            <img src={item} alt="photo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VideoSwiper;
