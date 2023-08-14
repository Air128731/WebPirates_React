import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabData = ["Web Packages",
    "E-commerce Packages",
    "Combo Packages",
    "Web App Packages",
    "Shopify Packages",
    "Video Animation",
    "SEO",
    "SMM"];

export default function Example() {
    const [tabContent, setTabContent] = useState([]);
  
    useEffect(() => {
        let temp = [];
        for(let i = 0; i < 9; i ++){
            temp = [...temp, (
                <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="text-white py-10 text-center rounded-2xl bg-[#222222] ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="max-w-xs px-8 mx-auto">
                            <p className="text-base font-semibold">Web Bronze</p>
                            <p className="flex items-baseline justify-center mt-6 gap-x-2">
                            <span className="text-5xl font-bold tracking-tight">$349</span>
                            <span className="text-sm font-semibold leading-6 tracking-wide">USD</span>
                            </p>
                            <button className="text-base mt-10 w-[150px] h-[40px] bg-gradient-to-r from-[#f0562d] to-[#E81081] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-medium py-2 px-4 rounded">
                                VIEW DETAILS
                            </button>
                            <p className="mt-6 text-sm leading-5">
                            Suitable for potential super-startups and brand revamps for companies.
                            </p>
                        </div>
                    </div>
                </div>          
            )];
        }
        setTabContent(temp);
    }, []);

  return (
    <div className='w-full bg-[#1A1A1A] pt-20'>
        <div className='text-xl font-bold text-white lg:text-4xl'>EXPLORE NEW WAYS TO ATTRACT</div>
        <div className='flex flex-row justify-center mt-5 text-xl font-bold text-white lg:text-4xl'><p className='text-yellow-500'>CAPTIVATE&nbsp;</p>YOUR CUSTOMERS</div>
        <div className='flex items-center justify-center w-full'>
            
            <div className="w-3/4 px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="grid grid-cols-4 p-1 space-x-1 border border-white lg:grid-cols-8 rounded-3xl">
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
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-3">{tabContent}</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            </div>
        </div>
    </div>
  )
}
