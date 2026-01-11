import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "Teacher",
            rating: 5,
            text: "Amazing web developer with a passion for creating beautiful and functional websites."
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Client",
            rating: 4,
            text: "Consistent web developer who delivers high-quality work on time."
        },
        {
            id: 3,
            name: "Bob Johnson",
            role: "Client",
            rating: 5,
            text: "Web developer who has helped me grow my business online."
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "Teacher",
            rating: 5,
            text: "Web developer with a deep understanding of web design and development."
        },
        {
            id: 5,
            name: "Michael Wilson",
            role: "Client",
            rating: 4,
            text: "Consistent web developer who delivers high-quality work for my content writing projects."
        }
    ]

    return (
        <div id='testimonials' className='py-10  relative bg-orange-100 ' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>Customer Feedback That Speaks Volumes</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div 
                            
                            className='border border-gray-800 shadow-md   flex flex-col p-4 rounded-lg  shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>{item.role}</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
