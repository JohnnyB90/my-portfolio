import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';
import CalorieTracker from '../../Assets/images/CalorieTracker.png';
import APIPlayground from '../../Assets/images/apiplayground.png';
import JATE from '../../Assets/images/JATE.png';

export default function Projects() {
  return (
    <section>
      <h1 className="text-center">Projects</h1>
      <div className="projects-grid p-5">
        <div className="p-5">
          <Card className="project-card bg-secondary">
            <Card.Body>
            <a className="text-dark" href="https://gabrielaortiz6.github.io/calorie-tracker/">
              <Card.Title>Calorie-Tracker</Card.Title>
              <Card.Text>An application that helps users track their daily calorie intake and expenditure by allowing the input of food type and quantity to make calculations to calories consumed as well as fine macros.</Card.Text>
              <Card.Img src={CalorieTracker} alt="Calorie Tracker" />
            </a>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5">
          <Card className="project-card bg-secondary">
            <Card.Body>
            <a className="text-dark" href="https://arcane-reaches-06891.herokuapp.com/">
              <Card.Title>API-Playground</Card.Title>
              <Card.Text>API Playground is a learning tool created in a sandbox style where novice and beginner web developers can learn about and test APIs safely in the browser window.</Card.Text>
              <Card.Img src={APIPlayground} alt="API Playground" />
            </a>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5">
          <Card className="project-card bg-secondary">
            <Card.Body>
            <a className="text-dark" href="https://jate-just-another-editor-0cbe0f3e2698.herokuapp.com/">
              <Card.Title>JATE/Just Another Text Editor</Card.Title>
              <Card.Text>Description of Project 3</Card.Text>
              <Card.Img src={JATE} alt="JATE" />
            </a>
            </Card.Body>
          </Card>
        </div>
        <div className="p-5">
          <Card className="project-card bg-secondary">
            <Card.Body>
              <a className="text-dark" href="https://johnnyb90.github.io/bill-tracker/">
                <Card.Title>Simple Bill Tracker</Card.Title>
                <Card.Text>Description of Project 4</Card.Text>
                <Card.Img src={CalorieTracker} alt="Bill Tracker" />
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

