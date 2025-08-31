import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Details() {
    const [swiper, setSwiper] = useState(null)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
        }
    }, [swiper])
    return (

        <>
            <div className='grid grid-cols-2 max-md:grid-cols-1'>
                <div className="w-full pt-3">
                    <Swiper
                        navigation={{
                            prevEl: null,
                            nextEl: null,
                        }}
                        onSwiper={setSwiper}
                        modules={[Navigation]}
                        className="rounded-[15px] sm:rounded-[20px] h-full w-full">

                        <SwiperSlide className='w-full h-full'>
                            <img
                                src={"https://telefonclubb.s3.eu-central-1.amazonaws.com/1728114001237-262355-b9ce627f34cab9fd786a69174ce60871.jpeg"}
                                alt={`slide 1`}
                                className="w-full h-full object-contain lg:object-cover"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div></div>
            </div>
        </>
    )
}

export default Details
