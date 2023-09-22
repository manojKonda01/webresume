function Resume() {
  return (
    <>
      <div className="w-auto h-auto" style={{ backgroundColor: '#e6e6ff' }}>
        <div className="text-center fs-1 p-5 w-auto">RESUME</div>
        <div className="container" style={{ width: 'fit-content' }}>
          <div className="row" style={{ left: '305px' }}>
            <a
              href="https://drive.google.com/file/d/1I-kjeTFrE73AXoA3SJn1T74UwRPsKR9Z/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://manojkonda01.github.io/webresume/data/img/download.png"
                alt="download-png"
              />
            </a>
          </div>
          <div className="row text-center pb-5 ">
            <img
              src="https://manojkonda01.github.io/webresume/data/img/resume.jpg"
              alt="manoj-konda-resume"
              height={1200}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
