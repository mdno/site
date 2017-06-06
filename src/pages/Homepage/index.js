import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import Button from '../../components/Button'
// import Button from '@serverless/components/Button'
import Default from '../../layouts/Default'
import Terminal from '../../components/Terminal'
import ContentBlock from '../../components/ContentBlock'
import terminalCommands from './terminalCommands'
import styles from './Homepage.css'
import playSvg from '../../assets/icons/play.svg'
import docsSvg from '../../assets/icons/book2.svg'

export default class Homepage extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.bg}>
            <div className={styles.hero}>
              <div className={`${styles.heroLeft} fadeIn fadeInShort`}>

                <div className={styles.heroFramework}>
                  <div className={styles.heroStrip1}>Build serverless, event-driven apps</div>
                  <div className={styles.heroStrip2}>with the <span className={styles.colored}>serverless framework</span> and <span className={styles.colored}>platform</span></div>
                </div>

                <div className={styles.logoWrapper}>
                  <img className={styles.providerLogos} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/providers_black.png'} alt='aws Lambda' />
                </div>
                <div className={styles.cta}>
                  <Button kind='black' href='/beta'>
                        <span className={styles.ctaInner}>
                          <span className={styles.ctaText}>Join the serverless platform beta</span>
                        </span>
                  </Button>
                </div>
              </div>
              <div ref='animDiv' className={`${styles.heroRight} zoomxIn zoomInxLong`}>
                <Terminal commands={terminalCommands} />
              </div>
            </div>
          </div>

          <div className={styles.customers}>
            <h2 className={styles.heading}>Trusted by</h2>
            <div className={styles.customerLogos}>
              <img className={styles.customerLogo} src='/assets/images/customer-nordstrom.png' />
              <img className={styles.customerLogo} src='/assets/images/customer-coke.png' />
              <img className={styles.customerLogo} src='/assets/images/customer-nike.png' />
            </div>
          </div>

          <div className={styles.events}>
            <div className={styles.event}>
              <div className={styles.eventLogo}>
                <img src='/assets/images/emit-logo.png' />
              </div>
              <div className={styles.eventContent}>
                <h4 className={styles.eventName}>Announcing emit 2017</h4>
                <p className={styles.eventDescription}>The first conference on event-driven architectures.</p>
                <Link className={styles.eventAction} to={'https://emitconference.com/'}>register here</Link>
              </div>
            </div>
          </div>

          <ContentBlock title='Framework' image={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/architecture.gif'}>
            <p>Build web, mobile, IoT apps and event-driven automation with the open-source serverless application framework.</p>
          </ContentBlock>

          <ContentBlock title='Platform' image={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/framework.gif'}>
            <p>The event-driven platform-as-a-service. Easily publish events from your apps & integrations, and react to them with serverless functions located anywhere.</p>
            <p>
              <Link to='/framework'>
                View the framework
              </Link>
            </p>
          </ContentBlock>

        </div>
      </Default>
    )
  }
}
