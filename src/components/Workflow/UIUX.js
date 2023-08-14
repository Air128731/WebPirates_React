import { CheckIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Information Architecture',
    description:
      'We are devoted strategists and believe that thoughtful information architecture lays the groundwork for an intuitive, efficient, and effective website.',
    icon: CheckIcon,
    image: "https://websitedesignengine.com/assets/images/iq-test-icon1.webp",
  },
  {
    name: 'UI Design',
    description: 'Implementing fast, clean, simple yet trendy design concepts, we specialize in creating amazing graphical user experiences.',
    icon: CheckIcon,
    image: "https://websitedesignengine.com/assets/images/channels-icon1.webp",
  },
  {
    name: 'UX Design',
    description: 'Crafting remarkable user interfaces using style guides, grid systems, typography, mood boards and much more.',
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
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-6xl">IMPROVE YOUR USER INTERFACE</p>
              <p className="mt-6 text-lg leading-8">
                Your user interface dictates your user experience. If you’re looking to build complex web app or software product, then you’ll want to consider in-depth user experience and interaction design.
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
            <button className="w-full lg:w-3/4  mt-10 h-[60px] ml-7 bg-gradient-to-r from-[#f0562d] to-[#E81081] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-bold py-2 px-4 rounded">
                GET YOUR ECOMMERCE PROJECT STARTED
            </button>
          </div>
          </div>
          <img src="https://websitedesignengine.com/assets/images/interactive-prototype-services.png" className='lg:mt-32'></img>
        </div>
      </div>
    </div>
  )
}
