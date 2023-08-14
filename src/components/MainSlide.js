import { CheckIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'We help them get their branding right.',
    description:
      '',
    icon: CheckIcon,
  },
  {
    name: 'Help your business to create a unique name.',
    description: '',
    icon: CheckIcon,
  },
  {
    name: 'Help to set your business goals and objectives.',
    description: '',
    icon: CheckIcon,
  },
]

export default function Example() {
  return (
    <div className="py-24 overflow-hidden text-white bg-center bg-cover sm:py-32" style={{ backgroundImage: "url('https://websitedesignengine.com/assets/images/brand-banner.jpg')" }}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto text-left gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-6xl">BRAND DESIGN PROTOTYPE</p>
              <p className="mt-6 text-lg leading-8">
                We help businesses grow, launch products, and build enduring relationships with their communities
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon className="absolute w-5 h-5 text-yellow-300 left-1 top-1" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex flex-row items-center w-full'>
            <button className="w-1/3 h-[60px] ml-7 bg-gradient-to-r from-[#f0562d] to-[#E81081] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-bold py-2 px-4 rounded">
                LET'S BUILD YOUR BRAND TO LIFE
            </button>
            <img src="https://websitedesignengine.com/assets/images/rateimg.png" className='w-32 h-10 ml-7'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
