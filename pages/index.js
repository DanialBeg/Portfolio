import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Danial's Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <strong>Hello! 👋</strong>
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
    </Layout>
  )
}
