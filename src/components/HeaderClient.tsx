import React from 'react'
import { Link } from 'react-router-dom'

const HeaderClient = () => {
  return (
    <div>
    <header role="banner" className="probootstrap-header">
  {/* <div class="container"> */}
  <div className="row">
    <a href="index.html" className="probootstrap-logo visible-xs"><img src="img/logo_sm.png" className="hires" width={120} height={33} alt="Free Bootstrap Template by uicookies.com" /></a>
    <a href="#" className="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
    <div className="mobile-menu-overlay" />
    <nav role="navigation" className="probootstrap-nav hidden-xs">
      <ul className="probootstrap-main-nav">
        <li className="">
          <Link to={'/'}>
          <a href="index.html">Home</a>
          </Link>
        </li>
        <li>
        <Link to={'/products'}>
          <a href="index.html">Products</a>
          </Link>
        </li>
        <li>
        <Link to={'/posts'}>
          <a href="index.html">Blog</a>
          </Link>
        </li>
        <li className="hidden-xs probootstrap-logo-center"><a href="index.html"><img src="img/logo_md.png" className="hires" width={181} height={50} alt="Free Bootstrap Template by uicookies.com" /></a></li>
        <li>
        <Link to={'/'}>
          <a href="index.html">About</a>
          </Link>
        </li>
        <li>
        <Link to={'/contact'}>
          <a href="index.html">Contact</a>
          </Link>
        </li>
        <li>
        <Link to={'/signin'}>
          <a href="index.html">Sign in</a>
          </Link>
        </li>
      </ul>
      <div className="extra-text visible-xs">
        <a href="#" className="probootstrap-burger-menu"><i>Menu</i></a>
        <h5>Connect With Us</h5>
        <ul className="social-buttons">
          <li><a href="#"><i className="icon-twitter" /></a></li>
          <li><a href="#"><i className="icon-facebook2" /></a></li>
          <li><a href="#"><i className="icon-instagram2" /></a></li>
        </ul>
      </div>
    </nav>
  </div>
  {/* </div> */}
</header>

    </div>
  )
}

export default HeaderClient
