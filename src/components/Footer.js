const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
  export default function Example() {
    return (
      <div className="py-12 bg-[#222222] sm:py-10">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-4">
            <div className="flex flex-col text-center text-[#727273] lg:text-left">
              <div className="mb-3 text-lg text-white">Mailing Address</div>
              <div className="mb-1">18th and 19th Floors, 515 South</div>
              <div className="mb-1">Flower Street,Los Angeles, CA</div>
              <div className="mb-1">90071 United States</div>
              <div className="mt-4">+1-877-347-8106</div>
            </div>
            <div className="flex items-center justify-center"><img src="https://websitedesignengine.com/assets/images/footer.png" className="w-[260px] h-[70px]"></img></div>
            <div className="flex items-center justify-center"><img src="https://websitedesignengine.com/assets/images/dmc.png" className="w-[100px] h-[100px]"></img></div>
            <div className="flex flex-row items-center justify-center">
              <button className="text-sm w-[180px] h-[40px] ml-7 bg-gradient-to-r from-[#f0562d] to-[#E81081] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-bold py-2 px-4 rounded">
                CONTACT
              </button>
              <button className="text-sm w-[200px] h-[40px] ml-2 bg-transparent border border-[#f0562d] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-bold py-2 px-4 rounded">
                GET STARTED
              </button>
            </div>
          </dl>
        </div>
        <div className="mt-20 text-center text-[#727273] pt-6 text-base font-medium">Copyright © 2023 Pirates Web. All Rights Reserved.</div>
      </div>
    )
  }
  