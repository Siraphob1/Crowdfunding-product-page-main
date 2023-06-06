

const PriceComponent = () => {
  return (
    <section className=" bg-white rounded-lg text-center px-5 py-8 mt-6
                            sm:px-10 sm:py-10">
      <div className="xl:flex ">
        <section className="flex flex-col items-center
                            xl:border-r xl:h-2/4 xl:pr-10">
            <div className=" text-[2.5rem] font-bold">$89,914</div>
            <div className=" text-[#147b74]">of $100,000 backed</div>
            <div className=" border-b w-1/3 my-4
                            xl:hidden"></div>
        </section>
        <section className=" flex flex-col items-center
                            xl:border-r xl:h-2/4 xl:pl-10 xl:pr-20">
            <div className=" text-[2.5rem] font-bold">5,007</div>
            <div className=" text-[#147b74]">total backers</div>
            <div className=" border-b w-1/3 my-4
                            xl:hidden"></div>
        </section>
        <section className=" flex flex-col items-center mb-8
                            xl:px-10">
            <div className=" text-[2.5rem] font-bold">56</div>
            <div className=" text-[#147b74]">days left</div>
        </section>
      </div>
      <div className=" relative w-full h-3 bg-[#3cb4ac39]  rounded-xl">
        <div className=" absolute top-0 left-0  w-4/5 h-3 bg-[#3cb4ac]  rounded-xl"></div>
      </div>
    </section>
  )
}

export default PriceComponent;
