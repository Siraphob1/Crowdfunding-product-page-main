import { useContext, useState } from "react"
import DataContext from "../Data/DataContext"
import iclose from "../images/icon-close-modal.svg";
import CardMordalComponent from "./CardMordalComponent";
const MordalComponent = () => {
    const [btnBackthisproject,setbtnBackthisproject,person] = useContext(DataContext)
    const [cardselect,Setcardselect] = useState(-1)

    const ClickBackthisproject=()=>{
        const currentclick =!btnBackthisproject;
        setbtnBackthisproject(currentclick);
    }

    const Selectcard= (cardindex) =>{
        Setcardselect(cardindex);
    }

    return (
        <div className={btnBackthisproject ?"":"hidden"}>
            <div className={btnBackthisproject  ?"bg-mordal-dark"
                                                :"hidden"}>
            </div>
            <div className="  z-50 absolute top-[8rem] left-1/2 -translate-x-1/2 bg-white w-11/12 h-auto rounded-lg px-4 py-8
                            xl:top-[11.5rem] xl:px-8 xl:w-[50%]">
                <div className="flex justify-between items-center">
                    <h1 className=" text-[1.3rem] font-bold xl:text-[1.5rem]">Back this project</h1>
                    <img src={iclose} alt="iclose" className="  hover:cursor-pointer xl:self-start" onClick={ClickBackthisproject}/>
                </div>
                <p className="mt-8 mb-8 xl:mt-4">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </p>
                <CardMordalComponent {...person[3]} cardSelect={cardselect} SelectCard={Selectcard} key={4} />   
                <CardMordalComponent {...person[0]} cardSelect={cardselect} SelectCard={Selectcard} key={1} />   
                <CardMordalComponent {...person[1]} cardSelect={cardselect} SelectCard={Selectcard} key={2} />  
                <CardMordalComponent {...person[2]} cardSelect={cardselect} SelectCard={Selectcard} key={3} /> 
            </div>
        
        </div>
    )
}

export default MordalComponent
