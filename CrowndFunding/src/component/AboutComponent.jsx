import { useContext } from "react"
import CardComponent from "./CardComponent"
import DataContext from "../Data/DataContext"

const AboutComponent = () => {

  const [btnBackthisproject,setbtnBackthisproject,person] = useContext(DataContext);
  
  return (
    <section className=" bg-white rounded-lg  px-5 pt-8 py-4 mt-6 
                        sm:px-10 sm:pt-10 "
              id="about">
        <h1 className=" text-[1.3rem] font-bold mb-8">About this project</h1>
        <div className="text-[text-[#7a7a7a]]">
            <p className="mb-8 ">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="mb-8" id="getstart">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
        </div>
        <CardComponent {...person[0]} key={1} />   
        <CardComponent {...person[1]} key={2} />  
        <CardComponent {...person[2]} key={3} /> 
    </section>

  )
}


export default AboutComponent
