import { useContext } from "react";
import DataContext from "../Data/DataContext";
import icheck from "../images/icon-check.svg";


const CompleteComponent = () => {

  const [btnBackthisproject,setbtnBackthisproject,person,pagethankyou,setPagethankyou] = useContext(DataContext)

  const ShowPagethankyou=()=>{
    const currentclick = !pagethankyou
    setPagethankyou(currentclick)
  }

  

  return (
    <section className={pagethankyou  ?""
                                      :"hidden"}>
        <div className="bg-mordal-dark z-50 "></div>
        <div className=" absolute z-[51]  top-[9rem] left-1/2 -translate-x-1/2 w-11/12   bg-white rounded-lg text-center px-4 pt-8 py-12
                        xl:top-[30rem] xl:w-[37%] xl:px-10 xl:pt-10 xl:pb-12"
            id="thankyou">
            <img src={icheck} alt="icheck" className="mx-auto" />
            <h1 className="my-4 text-[1.25rem] font-bold
                            xl:mt-12">Thanks for your support!</h1>
            <p className="my-8 text-[#147b74]
                            xl:mt-4"> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <a href="#" className="btn-click mx-auto" onClick={ShowPagethankyou}>Got it!</a>
        </div>
    </section>
  )
}

export default CompleteComponent
