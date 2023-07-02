import React from 'react';
import Resume from '../../Assets/files/resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ResumePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-dark text-center">Resume</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="pdf-viewer">
            <iframe src={Resume} title="Resume" width="100%" height="600px"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}



