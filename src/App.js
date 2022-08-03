import Head from "./components/Head";
import Foot from "./components/Foot";
import { useState } from "react";
import Resume from "./components/Resume";
import Details from "./components/Details";
import "./components/style/style.css"
import ScrollTop from "./components/ScrollTop";

function App() {
  const [resume, isResume] = useState(false);
  const handleResume = ()=>{
    isResume(true);
  }
  const handleMenus = () => {
    isResume(false);
  }
  return (
    <div className="main-body position-relative">
        <Head onResumeClick={handleResume} onMenuClicks={handleMenus}/>
          <div >
          {resume ? <Resume/> : <Details/> }
          </div>
        <ScrollTop />
        <Foot />
    </div>
  );
}

export default App;
