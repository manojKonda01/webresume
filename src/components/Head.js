import {useState} from 'react';
import { Link } from "react-scroll";
function Head(props){
    const menuItems = ['about','experience','education','skills'];
    const [shadow, setShadow] = useState(true);
    const [isActive, setIsActive] = useState({active:'about'});
    const handleActive = (e) => {
        setIsActive({active:e.target.attributes.name.value});
        setShadow(true);
    }
    
    return(<>
        <nav className={shadow ? "navbar navbar-expand-lg bg-light fixed-top position-relative h-auto shadow p-3 mb-2 bg-body rounded" : "navbar navbar-expand-lg fixed-top position-relative h-auto p-3 mb-2"} id="nav-bar">
            <div className="container-fluid p-2">
                <a className="navbar-brand display-1" href="/"><span className="fs-1"  style={shadow ? {fontWeight:"350", fontFamily:"Saira"} :{fontWeight:"400", fontFamily:"Saira"}}>Manoj Konda</span><br></br><span className="fs-6 font-monospace">Software Engineer</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {menuItems.map(item=>
                        <li className="nav-item"  key = {item}>
                            <Link to={item} delay={0} className={isActive.active === item ?"nav-link active text-primary" : "nav-link"} aria-current="page" name={item} onClick={(e)=>{handleActive(e);props.onMenuClicks();}}>{item.toUpperCase()}</Link>
                        </li> 
                    )}
                    <li className="nav-item"  key = "resume">
                        <div className={isActive.active === "resume" ?"nav-link active text-primary" : "nav-link"} aria-current="page" name="resume" onClick={(e)=>{handleActive(e);props.onResumeClick();setShadow(false);}}>RESUME</div>
                    </li>
                </ul>
            </div>
            
        </nav>
    </>)
}
export default Head;