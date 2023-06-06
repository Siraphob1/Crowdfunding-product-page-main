import AboutComponent from "./AboutComponent";
import CardComponent from "./CardComponent";
import PriceComponent from "./PriceComponent";
import TopicComponent from "./TopicComponent";



const MainComponent=()=>{
    return(
        <main className=" absolute z-[1] top-60 left-1/2 -translate-x-1/2 w-11/12
                          sm:w-2/4">
        <TopicComponent/>   
        <PriceComponent/>   
        <AboutComponent/>   
        <CardComponent topicname="Top"/>   


        </main>
    )
}

export default MainComponent;