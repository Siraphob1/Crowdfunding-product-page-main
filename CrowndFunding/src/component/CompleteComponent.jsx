import icheck from "../images/icon-check.svg";


const CompleteComponent = () => {
  return (
    <section>
        <div className="bg-mordal-dark z-50 "></div>
        <div className=" absolute z-[51]  top-[9rem] left-1/2 -translate-x-1/2 w-11/12   bg-white rounded-lg text-center px-4 pt-8 py-12
                        xl:top-[30rem] xl:w-2/5 xl:px-16 xl:pt-10 xl:pb-16">
            <img src={icheck} alt="icheck" className="mx-auto" />
            <h1 className="my-4 text-[1.25rem] font-bold
                            xl:mt-12">Thanks for your support!</h1>
            <p className="my-8 text-[#147b74]
                            xl:mt-4"> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <button className="btn-click mx-auto">Got it!</button>
        </div>
    </section>
  )
}

export default CompleteComponent
