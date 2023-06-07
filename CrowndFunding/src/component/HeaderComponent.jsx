import bg_desktop from "../images/image-hero-desktop.jpg";
import bg_mobile from "../images/image-hero-mobile.jpg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close_menu from "../images/icon-close-menu.svg";
import { useState } from "react";


const HeaderComponent=()=>{
    const [clickhamburger,Setclickhamburger] = useState(false);

    const Switchhamburger=()=>{
        const prevstatus = clickhamburger;        
        Setclickhamburger(!prevstatus);
    }
    return(
        <header className=" w-full font-Commissioner font-medium sm:font-normal sm:text-white ">
            <img src={bg_mobile} alt="bg_mobile" className=" sm:hidden" />
            <img src={bg_desktop} alt="bg_desktop" className=" hidden  sm:block sm:w-full sm:h-auto" />
            <div className=" absolute top-0 flex justify-between w-full px-5 pt-8
                             sm:px-28   lg:px-40 lg:pt-10">
                <img src={logo} alt="logo" className=" z-50 h-5 hover:cursor-pointer"/>
                <img src={hamburger} alt="hamburger" className={clickhamburger?"hidden  sm:hidden":"z-10 block w-4 h-4 hover:cursor-pointer sm:hidden"} onClick={Switchhamburger}/>
                <img src={close_menu} alt="close_menu" className={clickhamburger?"z-50 block w-4 h-4 hover:cursor-pointer sm:hidden":"hidden sm:hidden"} onClick={Switchhamburger}/>
                <div className={clickhamburger
                                            ?"bg-mordal-dark sm:hidden"
                                            :"hidden"}>                                                     
                </div>               
                <nav className=" absolute z-50 top-24 w-11/12 left-1/2 -translate-x-1/2  
                                 sm:static sm:z-0 sm:top-auto sm:left-auto sm:w-auto  sm:translate-x-0 ">
                    <ul className={clickhamburger
                                                ?`flex flex-col w-full bg-white rounded-lg 
                                                  sm:flex-row sm:bg-transparent `
                                                :"hidden sm:flex sm:flex-row"}>

                        <li className=" border-b sm:border-b-0"><a href="" className="nava-tag">About</a></li>
                        <li className=" border-b sm:border-b-0"><a href="" className="nava-tag">Discover</a></li>
                        <li><a href="" className="nava-tag">Get Started</a></li>                                       
                       
                    </ul>
                </nav>
            </div>  

        </header>
    )
}

export default HeaderComponent;