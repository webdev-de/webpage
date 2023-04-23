import navLinks from "../../data/navigation";


function MainNav(){
    
    return (
        <nav className="main-nav">
            {navLinks.main.map((link) =><span key={link.lable}>{link.lable}</span>)}
        </nav>
    )
}

export default MainNav;