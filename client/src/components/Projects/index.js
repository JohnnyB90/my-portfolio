import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import CalorieTracker from '../../Assets/images/CalorieTracker.png';
import Scheduli from '../../Assets/images/Scheduli.png';
import JATE from '../../Assets/images/JATE.png';
import BillTracker from '../../Assets/images/BillTracker.png';

export default function Projects() {
  return (
    <section>
      <h1 className="text-center text-white" id="header-color">Projects</h1>
      <div className="projects-grid p-5">
        <div className="p-3">
          <Card className="project-card">
          <a className="text-dark" href="https://gabrielaortiz6.github.io/calorie-tracker/">
            <Card.Img variant="top" src={CalorieTracker} alt="Calorie Tracker" />
            <Card.Body>
              <Card.Title>Calorie-Tracker</Card.Title>
              <Card.Text className="project-description">
                An application that helps users track their daily calorie intake and expenditure by allowing the input of
                food type and quantity to make calculations to calories consumed as well as fine macros.
              </Card.Text>
            </Card.Body>
          </a>
          </Card>
        </div>
        <div className="p-3">
          <Card className="project-card">
          <a className="text-dark" href="https://scheduli-adfba105dbbc.herokuapp.com/">
            <Card.Img variant="top" src={Scheduli} alt="Scheduli" />
            <Card.Body>
              <Card.Title>Scheduli</Card.Title>
              <Card.Text className="project-description">
                Scheduli is a full-stack MERN application that allows business owners to create accounts and manage their schedule through a calendar that can be shared with clients so they can also add themselves to the owners schedule. The owner can schedule or the client can schedule by seeing available times and dates and putting it on the calendar. The client will get an email confirmation.
              </Card.Text>
            </Card.Body>
          </a>
          </Card>
        </div>
        <div className="p-3">
          <Card className="project-card">
          <a className="text-dark" href="https://jate-just-another-editor-0cbe0f3e2698.herokuapp.com/">
            <Card.Img variant="top" src={JATE} alt="JATE" />
            <Card.Body>
              <Card.Title>JATE/Just Another Text Editor</Card.Title>
              <Card.Text className="project-description">
              A tool great for keeping notes, or making lists
              </Card.Text>
            </Card.Body>
          </a>
          </Card>
        </div>
        <div className="p-3">
          <Card className="project-card">
          <a className="text-dark" href="https://johnnyb90.github.io/bill-tracker/">
            <Card.Img variant="top" src={BillTracker} alt="Bill Tracker" />
            <Card.Body>
              <Card.Title>Simple Bill Tracker</Card.Title>
              <Card.Text className="project-description">
                This is a simple bill tracker that allows the user to input their bills and the amount of the bill. The user will then be able to edit the dates and amounts of the bills to keep track their bills coming due and paid. It is color coded to show the user which bills are coming up, due today, and past due.
              </Card.Text>
            </Card.Body>
          </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
