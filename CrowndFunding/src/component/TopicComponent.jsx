import logo_mastercraft from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";


function TopicComponent() {
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
            <span className=" text-white font-medium bg-[#3cb4ac] px-8 py-3 mr-4 rounded-3xl ">Back this project</span>
            <img src={bookmark} alt="bookmark" className="lg:hidden"/>
            <span className="hidden lg:block lg:relative lg:px-10 lg:py-4 lg:bg-[#3cb4ac44] lg:rounded-r-3xl lg:text-[#7a7a7a] lg:font-bold">
                Bookmark
                <img src={bookmark} alt="bookmark" className="lg:absolute lg:left-0 lg:-translate-x-1/2 lg:top-0"/>
            </span>

        </div>
    </section>
  )
}

export default TopicComponent;
