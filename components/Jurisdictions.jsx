'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IMAGES from '@/lib/images';
import { ChevronRight } from 'lucide-react';

const Jurisdictions = () => {
  const jurisdictions = [
    {
      heading: "Mainland Company Setup",
      text: "Mainland business setup in UAE lets you choose from a broad range of business activities and enjoy the freedom of conducting business anywhere in nation. UAE mainland business license is issued by Department of Economic Development of respective Emirate.",
      image: IMAGES.HomeNew.jurisdictions1,
      background: '#DBEDFF',
      href: '/services'
    },
    {
      heading: "Freezone Company Setup",
      text: "With UAE freezone company formation, you can start your 100% owned business in one of the 50+ progressive UAE free zones and enjoy exclusive investor benefits. Each UAE freezone has its own governing body who issues the freezone business license to businesses.",
      image: IMAGES.HomeNew.jurisdictions2,
      background: '#9CD6C4',
      href: '/services'
    },
    {
      heading: "Offshore Company Setup",
      text: "Offshore company setup in UAE offers substantial tax savings and access to global markets without needing a physical office or presence in the UAE. Remember that UAE offshore companies can conduct business only outside the UAE and achieve global brand presence.",
      image: IMAGES.HomeNew.jurisdictions3,
      background: '#B2C0B1',
      href: '/services'
    }
  ]

  return (
    <section className='pt-[100px] min-h-[1300px] sm:pt-12 bg-[#F3F7FB]'>
        <div className='container mx-auto px-3 relative'>
            <h2 className='text-3xl lg:text-4xl font-bold text-brand text-center mb-5'>Jurisdictions For Business Setup in UAE</h2>
            <p className='text-lg text-center text-gray mb-[40px]'>Choose the ideal location for your company setup in UAE.</p>
            <div className='flex flex-col items-center space-y-10 pb-6 sm:pb-0'>
                {jurisdictions.map((item,i)=>(   
                    <div key={i} className='flex pb-[100px] sm:pb-12 w-full mx-auto flex-wrap items-center h-auto sticky top-[170px] sm:top-[100px]' >
                        <div className='w-1/2 h-[560px] sm:w-full sm:min-h-[310px] sm:max-h-[330px]  bg-white shadow-lg p-6 sm:p-3 flex flex-col justify-center rounded-tl-2xl rounded-bl-2xl sm:rounded-t-2xl sm:rounded-bl-none'>
                            <h3 className='text-2xl text-brand font-semibold mb-3 sm:text-lg'>{item.heading}</h3>
                            <p className='text-lg sm:text-base font-normal'>{item.text}</p>
                            <Link href={item.href} className='theme-btn mt-4 w-[220px]'>Learn More <ChevronRight className='ml-2 inline-block align-middle' size={20}/> </Link>
                        </div>
                        <div className='w-1/2 h-[560px] sm:w-full sm:h-[300px] shadow-lg px-6 sm:px-3 py-4  rounded-tr-2xl rounded-br-2xl sm:rounded-b-2xl sm:rounded-tr-none' style={{ backgroundColor: item.background }}>
                            <Image src={item.image} width={563} height={520} alt={item.heading} className='sm:mb-3 sm:max-w-full w-full h-[510px] sm:h-[250px]'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Jurisdictions;
