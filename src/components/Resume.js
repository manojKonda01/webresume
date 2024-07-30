function Resume() {
  return (
    <>
      <div className="w-auto h-auto" style={{ backgroundColor: '#e6e6ff' }}>
        <div className="text-center fs-1 p-5 w-auto">RESUME</div>
        <div className="container">
          <div className="row" style={{ left: '305px' }}>
            <a
              href="https://drive.google.com/file/d/1qJf64YqXtsYZU4QIvyoE8mNL6yHpVEqO/view?usp=sharing"
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
            {/* <img
              src="https://manojkonda01.github.io/webresume/data/img/resume.jpg"
              alt="manoj-konda-resume"
              height={1200}
            /> */}
            <iframe
              title="Manoj-Konda_resume"
              src="https://drive.google.com/file/d/1qJf64YqXtsYZU4QIvyoE8mNL6yHpVEqO/preview"
              width="80%"
              height="480"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
