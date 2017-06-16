import React from 'react'
import Default from '../../layouts/Default'
import styles from './Framework.css'
import Button from '../../components/Button/Button'

const FrameworkPage = (props) => {
  return (
    <Default {...props}>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>Build more, manage less</h1>
          <p className={styles.heroDescription}>The Serverless Framework is the world’s leading development framework for building serverless, event-driven applications.</p>
          <Button className={styles.button} kind='red' href='/framework/docs/'>Get Started</Button>
        </div>
        <img className={styles.heroImage} src='/assets/images/icon-framework.png' />
      </div>
      <div className={styles.section}>
        <h2 className={styles.featuresHeader}>Features</h2>
        <div className={styles.featureBox}>
          <div className={styles.feature}>
            <img role='presentation' src='/assets/images/icon-extensible.svg' />
            <h3>Extensible</h3>
            <p>Build with a plugin architecture, the Serverless Frame is easily extensible with Servelss Plugins. Add custom functionality with a custom plugin or use one of the dozens of plugins the community has already created.</p>
          </div>
          <div className={styles.feature}>
            <img role='presentation' src='/assets/images/icon-provider-agnostic.svg' />
            <h3>Provider Agnostic</h3>
            <p>Avoid vendor lockin and deploy apps on any cloud provider. Currently supported providers include AWS, Microsoft Azure, Google Cloud Platform, and IBM OpenWhisk.</p>
          </div>
          <div className={styles.feature}>
            <img role='presentation' src='/assets/images/icon-opensource.svg' />
            <h3>Open Source</h3>
            <p>The Serverless Framework is an MIT open source project, actively maintained by a vibrant and engaged community of developers.</p>
          </div>
          <div className={styles.feature}>
            <img role='presentation' src='/assets/images/icon-simple-devops.svg' />
            <h3>Simple DevOps</h3>
            <p>Build with a plugin architecture, the Serverless Frame is easily extensible with Servelss Plugins. Add custom functionality with a custom plugin or use one of the dozens of plugins the community has already created.</p>
          </div>
          <div className={styles.feature}>
            <img role='presentation' src='/assets/images/icon-commandline.svg' />
            <h3>Command Line</h3>
            <p>Avoid vendor lockin and deploy apps on any cloud provider. Currently supported providers include AWS, Microsoft Azure, Google Cloud Platform, and IBM OpenWhisk.</p>
          </div>
          <div className={styles.feature}>
            <img role='presentation' src='/assets/images/icon-multilanguage.svg' />
            <h3>Multilanguage</h3>
            <p>The Serverless Framework is an MIT open source project, actively maintained by a vibrant and engaged community of developers.</p>
          </div>
        </div>
      </div>
      <div className={styles.customers + " " + styles.section}>
        <h2 className={styles.heading}>Trusted by</h2>
        <div className={styles.customerLogos}>
          <img className={styles.customerLogo} src='/assets/images/customer-nordstrom.png' />
          <img className={styles.customerLogo} src='/assets/images/customer-coke.png' />
          <img className={styles.customerLogo} src='/assets/images/customer-nike.png' />
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.linksHeading}>Join the Serverless Community</h2>
        <div className={styles.links}>
          <a className={styles.link}>Serverless Newsletter</a>
          <a className={styles.link} href='https://forum.serverless.com/'>Serverless Forum</a>
          <a className={styles.link} href='https://gitter.im/serverless/serverless'>Serverless Gitter</a>
          <a className={styles.link} href='https://www.github.com/serverless/serverless'>GitHub 16,540 Stars</a>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.casesHeading}>Use Cases</h2>
        <div className={styles.cases}>
          <div className={styles.case}>
            <img role='presentation' src='/assets/images/icon-web-backend.svg' />
            <h3>Web Backend</h3>
            <p>Whether you’re building a public API or an internal backend for your app, the Serverless Framework is the easiest and most cost-effective way to build a production ready backend.</p>
            <div className={styles.caseButtons}>
              <Button kind='primary'>View Example</Button>
              <Button kind='secondary'>Case Study</Button>
            </div>
          </div>
          <div className={styles.case}>
            <img role='presentation' src='/assets/images/icon-mobile-backend.svg' />
            <h3>Mobile Backend</h3>
            <p>The Serverless Framework is an easy and affordable way for mobile developers to spin-up an auto-scaling backend for their app. No maintenance or previous cloud experience required.</p>
            <div className={styles.caseButtons}>
              <Button kind='primary'>View Example</Button>
              <Button kind='secondary'>Case Study</Button>
            </div>
          </div>
          <div className={styles.case}>
            <img role='presentation' src='/assets/images/icon-data-processing.svg' />
            <h3>Data Processing</h3>
            <p>The event-driven nature of the Serverless Framework makes it great for stream-based data processing. Continous scaling and subsecond metering mean it’s affordable and low-maintenence.</p>
            <div className={styles.caseButtons}>
              <Button kind='primary' className={styles.button}>View Example</Button>
              <Button kind='secondary'>Case Study</Button>
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}
FrameworkPage.hasLoadingState = true

export default FrameworkPage
