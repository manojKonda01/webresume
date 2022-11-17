import ContactDetails from "./ContactDetails";
import VerticalLineContent from "./VerticalLine/VerticalLineContent";
import VerticalLineWrapper from "./VerticalLine/VerticalLineWrapper";
import ProgressBar from "./Skills";
import { useState, useEffect } from "react";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Details() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const style = {
    personal_card: { width: "60%" },
    image_dimensions: { width: "20rem", height: "20rem" },
    bg_className: "d-flex justify-content-center align-items-center p-5",
    textAlign: "justify",
    fontSize: { heading: "60px", paragraph: "20px" },
    leftAlign: "right",
    skills:{className:"p-5 text-white"}
  };
  if (windowDimensions.width <= 800) {
    style.personal_card.width = "100%";
    style.image_dimensions.width = "15rem";
    style.image_dimensions.height = "15rem";
    style.bg_className = "d-flex justify-content-center align-items-center p-4";
    style.textAlign = "left";
    style.fontSize = { heading: "40px", paragraph: "18px" };
    style.leftAlign = "left";
    style.skills.className = "p-2 text-white"
  }

  const [hoverColor, setHoverColor] = useState({ color: "white" });
   const handleMouseEnter = () => {
      setHoverColor({color : "blue"});
   };
   const handleMouseLeave = () => {
      setHoverColor({color : "white"});
   };
  return (
    <>
      <div className="h-auto w-auto m-0">
        <div
          style={{
            fontFamily: "Saira",
            textAlign: style.textAlign,
            overflowY: "auto",
          }}
        >
          <div
            className={style.bg_className}
            style={{
              height: "auto",
              backgroundImage: `url("https://manojkonda01.github.io/webresume/data/img/main_bg.png")`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "block",
            }}
          >
            <div
              className="shadow container m-0"
              id="personal-card"
              style={{
                backgroundColor: "white",
                width: style.personal_card.width,
              }}
            >
              <div className="row p-4">
                <div className="col d-flex justify-content-center align-items-center">
                  <img
                    className="rounded-circle p-2"
                    src="https://manojkonda01.github.io/webresume/data/img/Manoj.jpg"
                    alt="iam-ugly"
                    style={{
                      width: style.image_dimensions.width,
                      height: style.image_dimensions.height,
                      float: "left",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col">
                  <h1
                    className=" p-3 pb-0 text-center"
                    style={{ fontSize: "80px" }}
                  >
                    Manoj<br></br>Konda
                  </h1>
                  <h6
                    className="p-0 text-center"
                    style={{ fontFamily: "Saira" }}
                  >
                    Software Engineer
                  </h6>
                  <div className="p-3">
                    <ContactDetails width="25px" height="25px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <section>
              <div
                id="profile"
                className="p-5 bg-white text-white"
                style={{
                  backgroundImage: `url("https://manojkonda01.github.io/webresume/data/img/skills.png")`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <div
                  className="container text-centre"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div
                    className="row d-flex justify-content-center align-items-center"
                    style={{ fontWeight: "bold" }}
                  >
                    <div id="about" className="">
                      <h1 style={{ fontSize: style.fontSize.heading }}>
                        {" "}
                        About{" "}
                      </h1>
                      <hr style={{ height: "5px", background: "white" }} />
                      <p style={{ fontSize: style.fontSize.paragraph }}>
                        Software Engineer, with a passion for developing
                        innovative programs that expedite the efficiency seeking
                        to pursue a successfull career in a company where my
                        skills can be most effectively utilized. Quick learner,
                        Strategic thinker, and innovative creator to develop
                        software that is customized to meet a company’s
                        organizational needs. I can contribute towards the goals
                        of your company, building my career along the way.
                      </p>
                    </div>

                    <div id="experience" className="pt-5">
                      <h1 style={{ fontSize: style.fontSize.heading }}>
                        {" "}
                        Experience{" "}
                      </h1>
                      <hr style={{ height: "5px", background: "white" }} />

                      <div style={{ fontSize: style.fontSize.paragraph }}>
                        <VerticalLineWrapper color="red">
                          <VerticalLineContent position="left">
                            <strong>2021 Oct - present</strong>
                            <h5>POKKT</h5>
                            <p style={{ textAlign: style.leftAlign }}>
                              Currently Working as Software Engineer for the
                              product at POKKT.<br></br>
                            </p>
                            <p
                              style={{
                                textAlign: "right",
                                fontWeight: "lighter",
                              }}
                            >
                              <span
                                style={{ fontWeight: "bold", fontStyle: "un" }}
                              >
                                <u>Back- End:</u>
                              </span>{" "}
                              PHP | CodeIgniter 3 {"&"} 4 ||||| Ktor<br></br>
                              <span style={{ fontWeight: "bold" }}>
                                <u>Front- End:</u>
                              </span>{" "}
                              HTML, CSS, JS, JQuery, React JS
                            </p>
                          </VerticalLineContent>
                          <VerticalLineContent position="right">
                            <strong>26 May 2021 - 9 July 2021</strong>
                            <a
                              href="https://drive.google.com/file/d/1OV6rSa5DZIMm7DVCDS7o8ZlG26Zdewzj/view?usp=sharing"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <h5>PIE INFOCOMM</h5>
                            </a>
                            <p>
                              Worked as Intern in "Python with ML"<br></br>
                            </p>
                          </VerticalLineContent>
                        </VerticalLineWrapper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div
                className="p-5 bg-white text-white"
                style={{
                  backgroundImage: `url("https://manojkonda01.github.io/webresume/data/img/education.png")`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <div id="education" className="p-5">
                  <h1 style={{ fontSize: style.fontSize.heading }}>
                    {" "}
                    Education{" "}
                  </h1>
                  <hr style={{ height: "5px", background: "white" }} />
                  <div style={{ fontSize: style.fontSize.paragraph }}>
                    <VerticalLineWrapper color="red">
                      <VerticalLineContent position="left">
                        <strong>2017 - 2021</strong>
                        <h5>NIT Warangal</h5>
                        <p style={{ textAlign: style.leftAlign }}>
                          Bachelor's Degree<br></br>
                          CSE Dept.<br></br>
                          CGPA : 5.87
                        </p>
                      </VerticalLineContent>
                      <VerticalLineContent position="right">
                        <strong>2015 - 2017</strong>
                        <h5>Sri Chaitanya Junior Kalasala</h5>
                        <p>
                          Intermediate, MPC<br></br>
                          97.8%
                        </p>
                      </VerticalLineContent>
                      <VerticalLineContent position="left">
                        <strong>2014-2015</strong>
                        <h5>Nagarjuna High School</h5>
                        <p>
                          10<sup>th</sup> SSC<br></br>
                          CGPA : 9.5
                        </p>
                      </VerticalLineContent>
                    </VerticalLineWrapper>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div
                id="skills"
                className={style.skills.className}
                style={{
                  backgroundImage: `url("https://manojkonda01.github.io/webresume/data/img/profile.png")`,
                  backgroundPosition: "bottom",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "block",
                }}
              >
                <h1 style={{ fontSize: style.fontSize.heading }}> Skills </h1>

                <hr style={{ height: "5px", background: "white" }} />
                <div
                  style={{ fontSize: style.fontSize.paragraph }}
                  className="container p-3 w-75"
                >
                  <ProgressBar name="HTML, CSS" value="75" />
                  <ProgressBar name="React Js" value="80" color="#fda206" />
                  <ProgressBar
                    name="JavaScript, JQuery"
                    value="85"
                    color="#d71ca4"
                  />
                  <ProgressBar
                    name="PHP CODEIGNITER 3, 4"
                    value="85"
                    color="#4805f4"
                  />
                  <ProgressBar name="PYTHON" value="85" color="#e92c3e" />
                  <ProgressBar name="C++" value="80" color="#0d13fd8f" />
                  <ProgressBar name="DJANGO" value="65" color="#0dfdce" />
                  <ProgressBar name="JAVA" value="70" />
                  <ProgressBar name="KTOR" value="75" color="#fd0d85" />
                  <ProgressBar
                    name="MySQl, MongoDB, "
                    component = {<a href='https://drive.google.com/drive/u/0/folders/1BvM1_t8Kz2_SYJn50Ozltt16IXylnmgr' target="_blank" rel="noreferrer" style={hoverColor}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Google BigQuery</a>}
                    value="80"
                    color="#4805f4"
                  />
                  <ProgressBar name="GCP, AWS" value="60" color="#0dfdce" />
                  <ProgressBar
                    name="Linux, MacOs, Windows"
                    value="80"
                    color="#ffe707"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
