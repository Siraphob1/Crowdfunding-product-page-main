import desktop from "../images/image-hero-mobile.jpg";

const Header=()=>{
    return(
        <header>            
        {/* <div style={{backgroundImage:'url(../images/image-hero-desktop.jpg)'}} className="w-full h-96"></div> */}
        <img src={desktop} alt="BigCo Inc. logo"/>
        </header>
    )
}

export default Header;