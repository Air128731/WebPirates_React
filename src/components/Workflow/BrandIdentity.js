import { CheckIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Effective Logo Design',
    description:
      'Your logo design is the one thing that helps people to identify your business and services. Get it right, and you’ll gain recognition.',
    icon: CheckIcon,
    image: "https://websitedesignengine.com/assets/images/iq-test-icon1.webp",
  },
  {
    name: 'Stationery Design',
    description: 'Effective stationery design is a marketing tool that helps you stand out from the crowd, differentiate from your competition, and win your ideal customers or clients.',
    icon: CheckIcon,
    image: "https://websitedesignengine.com/assets/images/channels-icon1.webp",
  },
  {
    name: 'Packaging design',
    description: 'Effective packaging design can help sell your products, make your product easy to recognise, and differentiate you from your competition.',
    icon: CheckIcon,
    image: "https://websitedesignengine.com/assets/images/hands-on-learning-icon1.webp",
  },
]

export default function Example() {
  return (
    <div className="pb-3 overflow-hidden text-white bg-center bg-cover sm:pb-32">
      <div className="px-6 max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto text-left gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-6xl">DEVELOP YOUR BRAND IDENTITY</p>
              <p className="mt-6 text-lg leading-8">
                Your brand identity design gets your business recognised. We work with businesses from around the world on their brand identity design.
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col gap-3 lg:flex-row pl-9">
                      <img src={feature.image} className='w-10 h-10 mr-10'></img>
                      <div className='flex flex-col'>
                          <p className='text-xl'>{feature.name}</p>
                          <p>{feature.description}</p>
                      </div>
                  </div>
                ))}
              </dl>
            </div>
            <div className='flex flex-row items-center w-full'>
            <button className="w-full lg:w-3/4 mt-10 h-[60px] ml-7 bg-gradient-to-r from-[#f0562d] to-[#E81081] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-bold py-2 px-4 rounded">
                GET YOUR ECOMMERCE PROJECT STARTED
            </button>
          </div>
          </div>
          <img src="https://websitedesignengine.com/assets/images/brand-identity-services.png" className='lg:mt-32'></img>
        </div>
      </div>
    </div>
  )
}
