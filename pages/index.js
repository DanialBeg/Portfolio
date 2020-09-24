import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Profile extends React.Component {
  render() {
    return (
      <div id='profile-photo'>

      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
    <div id="header-banner">
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
        <p>
          <h2>Experience 💻</h2>
        </p>
      </section>

      <Accordion defaultActiveKey="0" className ="accordion">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            NASA Jet Propulsion Laboratory, June 2020 - September 2020
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {/* <section className={utilStyles.headingMd} id='experience'>
        <p>
          <h2>Experience 💻</h2>
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
      </section> */}
      </Container>
    </div>
  )
}
