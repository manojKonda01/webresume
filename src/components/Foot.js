import ContactDetails from "./ContactDetails";
function Foot() {
  return (
    <>
      <div className="text-center text-lg-start bg-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center fw-normal">
                  Write:<br></br>
                  <span className="fw-light"> mosesmanoj01@gmail.com</span>
                </div>
              </div>
              <div className="col">
                <div className="text-center fw-normal ">
                  Call:<br></br>
                  <span className="fw-light">+91 7702127158</span>
                </div>
              </div>
              <div className="col">
                <ContactDetails width="40px" height="40px"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Foot;
