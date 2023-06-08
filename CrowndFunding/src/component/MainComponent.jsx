import AboutComponent from "./AboutComponent";
import PriceComponent from "./PriceComponent";
import TopicComponent from "./TopicComponent";



const MainComponent=()=>{
    return(
        <main className=" absolute z-[1] top-40 left-1/2 -translate-x-1/2 w-11/12 py-[5rem]
                          sm:w-2/4 sm:top-20 lg:top-40 xl:top-52">
        <TopicComponent/>   
        <PriceComponent/>   
        <AboutComponent/>   
       


        </main>
    )
}

export default MainComponent;