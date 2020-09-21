import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'


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
            <a href={'#header-text'}><img src={"images/arrow-down-1.png"}></img></a>
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
    <Container>
      <section className={utilStyles.headingMd} id='header-text'>
        <p>
          <h2>Experience 💻</h2>
        </p>
        <p>
          I'm a 3rd year Computer Science major at the University of California, Riverside.
        </p>
          Currently, I'm looking for a summer 2021 Software Engineering Internship opportunity!
        <p>
          Feel free to reach out if you would like to connect 
          through  <a href="mailto:dbeg001@ucr.edu" target="_blank">email</a> or <a href="https://www.linkedin.com/in/danialbeg/" 
            target="_blank">LinkedIn</a>!
        </p>
      </section>
      </Container>
    </div>
  )
}
