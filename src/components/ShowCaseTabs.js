import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabData = ["Hotels", "Beauty", "CBD", "Lifestyle", "Food", "E-commerce", "Consultation", "Crypto", "NFT", "Event", "Management"];

export default function Example() {

  return (
    <div className='w-full bg-[#1A1A1A] flex items-center justify-center'>
        <div className="w-3/4 px-2 py-16 sm:px-0">
        <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 border border-white rounded-3xl">
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
            <Tab.Panels className="mt-2 text-white">
                <Tab.Panel>Tab 1</Tab.Panel>
                <Tab.Panel>Tab 2</Tab.Panel>
                <Tab.Panel>Tab 3</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
        </div>
    </div>
  )
}
