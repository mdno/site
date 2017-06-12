import React from 'react'
// import FeedbackModal from '../../fragments/FeedbackModal'
import FooterBetaCTA from '../../fragments/FooterBetaCTA'
import styles from './index.css'
import { Link } from 'react-router'

const Footer = (props) => {
  let cta
  if (typeof window !== 'undefined') {
    const url = window.location.pathname
    if (url === '/blog/' || url === '/' || url.match(/\/framework\//)) {
      cta = <FooterBetaCTA />
    }
    if (url.match(/\/docs\//)) {
      cta = null
      return null
    }
  }
  const year = new Date().getFullYear()
  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contentWrap}>
          <div className={styles.projectBlock}>
            <Link to='/' className={styles.logo} title='Serverless logo'>ß <span className={styles.logoText}>Serverless</span></Link>
            <p className={styles.projectDescription}>We’re the leading development framework for building serverless architecture. We looked at the status quo and created a better solution. In doing so, we started a movement.</p>
          </div>
          <nav className={styles.footerLinks}>
            <div className={styles.linksBlock}>
              <Link to='/documentation'>Documentation</Link>
              <Link to='/about'>About Serverless</Link>
              <Link to='/framework/'>Framework Doc</Link>
              <Link to='/status'>Project Status</Link>
              <Link to='/beta'>Join Beta</Link>
            </div>
            <div className={styles.linksBlock}>
              <a href='https://gitter.im/serverless/serverless'>Chat on Gitter</a>
              <a href='https://forum.serverless.com'>Discuss on Forum</a>
              <Link to='/community/meetups/'>Join a Meetup</Link>
              <Link to='/partners'>Partners</Link>
            </div>
            <div className={styles.linksBlock}>
              <Link to='/company/team'>Meet our Team</Link>
              <Link to='/company/jobs'>We're Hiring</Link>
              <Link to='/blog'>Blog</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
