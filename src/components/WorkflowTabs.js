import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { EyeIcon } from '@heroicons/react/20/solid'
import BrandIdentity from './Workflow/BrandIdentity';
import WebDesign from './Workflow/WebDesign';
import UIUX from './Workflow/UIUX';
import Protytype from './Workflow/Prototype';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabData = [{title: "Brand Identity", image: "https://websitedesignengine.com/assets/images/icon-img-13.png"},
    {title: "Website Design", image: "https://websitedesignengine.com/assets/images/icon-img-14.png"},
    {title: "UX & UI Design", image: "https://websitedesignengine.com/assets/images/icon-img-15.png"},
    {title: "Interative prototypes", image: "https://websitedesignengine.com/assets/images/icon-img-16.png"},
];

export default function Example() {

  return (
    <div className='w-full bg-[#181818] flex items-center justify-center'>
        <div className="w-3/4 px-2 py-16 sm:px-0">
        <Tab.Group>
            <Tab.List className="h-[60px] grid grid-cols-2 p-1 space-x-1 gap-2 lg:grid-cols-4">
            {tabData.map((category) => (
                <Tab className={({ selected }) =>
                    classNames(
                    'w-full py-2.5 text-sm font-medium leading-5 flex justify-center items-center flex-row',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white bg-[#222222]'
                    )
                }>
                    <img src={category.image} className='w-10 h-10'></img>
                    {category.title}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels className="mt-20 text-white">
                <Tab.Panel><BrandIdentity /></Tab.Panel>
                <Tab.Panel><WebDesign /></Tab.Panel>
                <Tab.Panel><UIUX /></Tab.Panel>
                <Tab.Panel><Protytype /></Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
        </div>
    </div>
  )
}
