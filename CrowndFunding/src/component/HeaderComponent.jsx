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
        <header className=" w-full ">
            <img src={bg_mobile} alt="bg_mobile" className=" sm:hidden" />
            <img src={bg_desktop} alt="bg_desktop" className=" hidden sm:block" />
            <div className=" absolute top-0 flex justify-between w-full px-5 pt-8">
                <img src={logo} alt="logo" className=""/>
                <img src={hamburger} alt="hamburger" className={clickhamburger?"hidden sm:hidden":"block sm:hidden"} onClick={Switchhamburger}/>
                <img src={close_menu} alt="close_menu" className={clickhamburger?"block sm:hidden":"hidden sm:hidden"} onClick={Switchhamburger}/>
            </div>  

        </header>
    )
}

export default HeaderComponent;