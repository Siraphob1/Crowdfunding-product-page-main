import AboutComponent from "./AboutComponent";
import PriceComponent from "./PriceComponent";
import TopicComponent from "./TopicComponent";



const MainComponent=()=>{
    return(
        <main className=" absolute z-[1] top-60 left-1/2 -translate-x-1/2 w-11/12 py-[5rem]
                          sm:w-2/4">
        <TopicComponent/>   
        <PriceComponent/>   
        <AboutComponent/>   
       


        </main>
    )
}

export default MainComponent;