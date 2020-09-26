import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap'


class Profile extends React.Component {
  render() {
    return (
      <div id='profile-photo'>

      </div>
    )
  }
}

class ProjectCard extends React.Component {
  render() {
    return (
      <Card onClick={ () => {
        let win = window.open(this.props.url, '_blank');
        win.focus()
      }} target="_blank">
            <Card.Body>
              <Card.Title>
                {this.props.title}
                <br />
                <span className="desc">{this.props.date}</span>
              </Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
            </Card.Body>
          </Card>
    )
  }
}

class HomeNav extends React.Component {
  render(){
    return (
      <div>
        <Navbar bg="light" expand="lg" id="nav">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#link">Experience</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
    }
}


class Header extends React.Component {
  render() {
    return (
      <div>
      
    <div id="header-banner">
    <HomeNav/>
      <header className={styles.header}>
        
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} id={'profile-image'}
              alt={''}
            />
            <h1 className={utilStyles.heading2Xl}>{'Danial Beg'}</h1>
            <a href={'#about-me'}><img src={"images/arrow-down-1.png"}></img></a>
      </header>
    </div>
    </div>
    )
  }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Danial's Portfolio</title>
      </Head>
      
      <Header/>
    <Container id={'main-content'}>
      <section className={utilStyles.headingMd} id='about-me'>
        <p>
          <h2>Hello! 👋</h2>
        </p>
        <p>
          I'm a 3rd year Computer Science major at the University of California, Riverside. 
          <br/>
          <br/>
          Currently, I'm looking for a summer 2021 Software Engineering Internship opportunity!
        </p>
        <p>
          Feel free to reach out if you would like to connect 
          through  <a href="mailto:dbeg001@ucr.edu" target="_blank">email</a> or <a href="https://www.linkedin.com/in/danialbeg/" 
            target="_blank">LinkedIn</a>!
        </p>
        <br />
        <p>
          Here you can find out more about my work experience as well as the personal projects I've worked on!
        </p>
      </section>

      <section className={utilStyles.headingMd} id='experience'>
          <p><h2>Experience 💻</h2></p>

          <Accordion defaultActiveKey="">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span className ="exp-header">🚀 NASA Jet Propulsion Laboratory</span>, June 2020 - September 2020
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li> Worked on the Europa Clipper mission where the main task was to translate over 50 English based flight rules into formal first-order logic to 
                    assist future software development teams in translating flight rules into modeling code. </li> 
                    <br />
                    <li> Created various different states as well as utilized interval algebra to create time-based logic statements, necessary for time-critical flight rules. </li> 
                    <br />
                    <li> Utilized Modelica to model the impacts of flight rule violations on various different spacecraft components in order to gain an understanding of the 
                      ”worst possible outcome” of a violated flight rule.</li>
                      <br />
                    <li>Assisted a fellow design intern team in drafting up a front-end tool that utilized HTML, CSS, and Javascript, 
                      in order to lead to a more intuitive display of various flight rules for engineers not familiar with the current way flight rules, were expressed.</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span className ="exp-header">🔬 General Atomics</span>, June 2019 - September 2019
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li> Deployed on-site at Lawrence Livermore National Laboratory working for the Nation Ignition Facility group (NIF). </li> 
                    <br />
                    <li> Utilized Python to develop automated image analysis software for X-Ray spectroscopy from experiments conducted at NIF. </li> 
                    <br />
                    <li> Increased efficiency and reduced processing time by over 80% by only downloading data that was pertinent to the analysis, 
                      thus allowing data collection and analysis to be done within a minute.</li>
                    <br />
                    <li> Reduced analysis times while increasing accuracy to about 90% for image analysis done on a wide range of experimental 
                      data spanning over 5 years of experiments.</li>
                    <br />
                    <li> Created a poster for the 2019 Lawrence Livermore National Lab Poster Symposium that was selected for the Top 5 of all the 
                      projects from the National Ignition Facility (NIF)</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span className ="exp-header">☀️ University of California, San Diego</span> Center for Energy Research, July 2017 - August 2017
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ul>
                    <li> Designed, tested, and implemented code that uses ComputerVision in Python to help identify the 
                      position of the sun and other objects in the sky with 75% accuracy. </li> 
                    <br />
                    <li> The program, using a camera's live feed to get input, detected the 
                      brightest spots in the given scenario to help identify the location of the sun. </li> 
                    <br />
                    <li> This was used to help improve weather predictions for solar power plants in order to change power 
                      output in anticipation of weather events.</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </section>

      <section className={utilStyles.headingMd} id='experience'>
        <p>
          <h2>Projects 🚧</h2>
        </p>
        <CardDeck>
          <ProjectCard title="Personal Website" date="September 2020 - Current" description="Working on adding new 
            features to this website! Built using a React framework, NextJS and hosted through Vercel!"/>
          <ProjectCard title="F1 Predictions" date="August 2020 - Current" description="Taking user input of F1 qualifying positions 
            and comparing it to data from previous races in order to create a model that will predict the results of the race. All built 
            out into a nice front-end website!"/>
          <ProjectCard title="ACM@UCR Website" date="April 2020 - Current" description="Responsible for maintenance, adding new additions,
           and new implementing new features for ACM@UCR's website built with Node.JS, HTML, and SCSS." 
           url = "https://acmucr.org/"/>
        </CardDeck>
        <CardDeck>
          <ProjectCard title="Car Bazaar" date="Rose Hack 2020 Winner" description="Website that would take in user input to create a car 
            sale listing as well as adding a social media aspect where users could share car-related media. 
            Built with Flask, HTML, CSS, and Google Firebase. " 
            url = "https://devpost.com/software/car-space-0qj8fo"/>

          <ProjectCard title="R'Shell" date="September 2019 - December 2019" description="UNIX-sylle shell that we had to create using C++ 
            for CS100 (Object Oriented Design). This project helped us learn how to build something from the ground up, using design 
            patterns that helped make the project extensible." 
            url = "https://github.com/DanialBeg/RShell-CS100-Fall-2019"/>

          <ProjectCard title="Dealectable" date="Submitted for Cutie Hack 2018" description="Android Application that would translate a 
            printed menu into a text file on the application using OpenCV and Google Firebase." 
            url = "https://devpost.com/software/dealectable"/>
        </CardDeck>
      </section>
      </Container>
    </div>
  )
}
