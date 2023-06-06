import logo_mastercraft from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import { useState } from "react";


function TopicComponent() {
  const [clickbookmark,Setclickbookmark] = useState(false);
  const ClickBookmark=()=>{
    const prevclick = clickbookmark;
    Setclickbookmark(!prevclick)
  }
  return (
    <section className=" bg-white rounded-lg text-center px-5 pb-8
                           sm:px-10 sm:pb-10">
        <div className=" relative w-full h-12">
                <img src={logo_mastercraft} alt="logo_mastercraft" className=" absolute -top-full left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12" />
        </div>
        <h1 className=" text-[1.3rem] font-bold px-8
                        sm:text-[1.8rem]">
            Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" pt-4 text-[#147b74] font-medium">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="pt-4 flex justify-center items-center
                        lg:pt-8 lg:justify-between">
            <button className=" btn-click ">Back this project</button>
            <img src={bookmark} alt="bookmark" className={clickbookmark ?"brightness-[150%] opacity-80 btn-bookmark hover:cursor-pointer lg:hidden"
                                                                        :"btn-bookmark hover:cursor-pointer lg:hidden"}
                onClick={ClickBookmark}/>
            <button className="hidden hover:cursor-pointer  lg:block lg:relative lg:px-10 lg:py-4 lg:bg-[#3cb4ac44] lg:rounded-r-full lg:text-[#7a7a7a] lg:font-bold" 
                onClick={ClickBookmark}>
                Bookmark
                <img src={bookmark} alt="bookmark" className={clickbookmark ?"brightness-[150%] opacity-80 btn-bookmark"
                                                                            :"btn-bookmark"}/>
            </button>

        </div>
    </section>
  )
}

export default TopicComponent;
