function Landing () {
    return (
      <div className="bg-[#E80A89] w-full grid grid-cols-1 lg:grid-cols-2 text-white sm:px-40 px-10 py-24">
        <img src="https://websitedesignengine.com/assets/images/solution-img-01.webp"></img>
        <div className="flex flex-col p-5 text-left sm:p-20">
           <div className="text-2xl font-bold sm:text-5xl">OUR DESIGNS REFLECT YOUR BRAND PERSONA</div> 
           <div className="mt-5 mb-20 text-base sm:text-xl">Our futuristic design strategy helps you achieve the most desirable and interactive visual experience.</div> 
           <button className="w-[300px] sm:w-1/2 h-[50px] bg-gradient-to-r from-[#f0562d] to-[#E81081] hover:translate-y-[-10px] transition-transform duration-700 ease-in-out text-white font-bold py-2 px-4 rounded">
                LET'S BUILDING BRAND IDEAS
            </button>
        </div>
      </div>
    );
}

export default Landing;
