import React from "react";
import Resume from "../../Assets/files/resume.pdf";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ResumePage() {
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-white text-center">Resume</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="pdf-viewer">
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                Resume
              )}&embedded=true`}
              title="Resume"
              style={{ width: "100%", height: "80vh" }}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
