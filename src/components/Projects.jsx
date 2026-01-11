import React from 'react'
import Portfolio from '../assets/Portfolioo.png'
import CompleteOnlineStore from '../assets/Complete-Online-Store.png'
import Youtube from '../assets/Nike.png'
import Webelite from '../assets/builder.png'
import Gocart from '../assets/gocart.png'
import OREBI from '../assets/OREBI.png'

import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'coffee-shop-website',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Portfolio,
          live: "https://coffee-shop-website-ochre.vercel.app/",
          github: "https://github.com/mdtohidbd/Coffee-Shop-Website"
        },
        {
          title: 'Super  car-website',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: CompleteOnlineStore,
          live: "https://complete-online-store.vercel.app/shop",
          github: "https://github.com/mdtohidbd/Complete-Online-Store"
        },
        {
          title: ' Nike GT Cut Academy',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Youtube,
          live: "https://nike-website-using-react-js.vercel.app/",
          github: "https://github.com/mdtohidbd/Nike-Website-using-React-JS"
        },
        {
          title: 'Webelite builder',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Webelite,
          live: "https://wander-buddy2.vercel.app/",
          github: "https://github.com/mdtohidbd/Wander-Buddy2"
        },
        {
          title: 'OREBI',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: OREBI,
          live: "https://e-commerce-business-eight.vercel.app/",
          github: "https://github.com/mdtohidbd/e-commerce-business"
        },
         {
          title: 'Gocart',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Gocart,
          live: "https://ai-multi-vendor-e-commerce.vercel.app/",
          github: "https://github.com/mdtohidbd/AI-Multi-Vendor-E-Commerce-"
        },
      ];

  return (
    <section id='projects' className='relative py-10 px-4 bg-teal-100 shadow-2xl'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8  border-b border-red-500 w-max pb-4 text-slate-700'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 shadow-bg-teal-100 hover:shadow-2xl transition-all hover:bg-bg-teal-100  hover:scale-105 hover:shadow-bg-teal-100 shadow-xl rounded-xl'>
             {projectJson.map((items, idx) => {
        return <Cards key={items.title + idx} item={items}/>
    })}
        </div>
      </div>
    </section>
  )
}

export default Projects
