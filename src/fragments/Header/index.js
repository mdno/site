import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import handleClickAway from '../../utils/handleClickAway'
import styles from './Header.css'
import Auth from '../../components/Auth/Auth'

const propTypes = {
  fullWidth: PropTypes.bool
}

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  componentDidMount() {
    document.body.addEventListener('click', this.closeNav)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeNav)
  }
  closeNav(e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render() {
    const { fullWidth } = this.props
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    const containerStyle = (fullWidth) ? styles.fullWidth : ''
    return (
      <header className={styles.header}>
        <div className={styles.navFixed}>
          <div className={`${styles.navWrapper} ${containerStyle}`}>
            <div className={styles.navLeft}>
              <Link to='/' className={styles.logo} title='Serverless logo'>ß <span className={styles.logoText}>Serverless</span></Link>
            </div>
            <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
              <div className={styles.ham}>
                <div className={`${styles.bar} ${openClass}`} />
              </div>
            </div>
            <nav className={`${styles.navRight} ${mobileNav}`}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link to='/products' className={styles.link}>Products</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/framework' className={styles.link}>Enterprise</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/community/' className={styles.link}>Community</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/blog' className={styles.link}>Blog</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/company' className={styles.link}>Company</Link>
                </li>
                <Auth className={styles.auth} loggedInComponent={<span />}>
                  <li className={styles.navItem}>
                    <span className={`${styles.link} ${styles.yellowLink}`}>Sign-Up</span>
                  </li>
                </Auth>

              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = propTypes
