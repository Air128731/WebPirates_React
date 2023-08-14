import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabData = ["Hotels", "Beauty", "CBD", "Lifestyle", "Food", "E-commerce", "Consultation", "Crypto", "NFT", "Event", "Management"];
const imageUrl = [
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-01.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-02.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-03.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-04.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-05.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-06.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-07.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-08.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-09.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-10.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-11.webp",
    "https://websitedesignengine.com/assets/images/portfolio/hotel/portfolio-img-12.webp"
];

const tabContent = [(
    <Tab.Panel>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-3'>
            {imageUrl.map((category) => (
                <div className='relative'>
                    <img src={category} className='w-full h-auto'></img>
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-gray-500 opacity-0 hover:opacity-75"><EyeIcon className='w-14 h-14 hover:cursor-pointer'/></div>     
                    </div>
            ))}
        </div>
    </Tab.Panel>
)]

export default function Example() {

  return (
    <div className='w-full bg-[#1A1A1A] flex items-center justify-center'>
        <div className="w-3/4 px-2 py-16 sm:px-0">
        <Tab.Group>
            <Tab.List className="grid grid-cols-3 p-1 space-x-1 border border-white lg:grid-cols-11 rounded-3xl">
            {tabData.map((category) => (
                <Tab className={({ selected }) =>
                    classNames(
                    'w-full rounded-3xl py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                }>
                    {category}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels className="mt-20 text-white">
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
                {tabContent}
            </Tab.Panels>
        </Tab.Group>
        </div>
    </div>
  )
}
