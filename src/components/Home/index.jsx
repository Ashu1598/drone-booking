import React, { useState } from "react"
import logo from "../../assets/logo-white/M-Drone.png"
import heroImg from "../../assets/hero-img.svg"
import "./home.scss"

const Index = () => {
  const [scroll, setScrolled] = useState(false)

  const navbarCollapse = () => {
    if (window.scrollY === 0) {
      setScrolled(false)
    } else {
      setScrolled(true)
    }
  }
  window.addEventListener("scroll", navbarCollapse)
  return (
    <>
      <div className='layoutDefault'>
        <div className='layoutDefault_content'>
          <main>
            <nav
              className={`navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top ${
                scroll ? "navbar-scrolled" : ""
              }`}
            >
              <div className='container'>
                <a className='navbar-brand text-white' href='/'>
                  <img src={logo} alt='' />
                </a>
                <button
                  className='navbar-toggler collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className='navbar-collapse collapse'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav ms-auto me-lg-5'>
                    <li className='nav-item'>
                      <a className='nav-link' href='/signup'>
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <header className='hero-header bg-gradient'>
              <div className='hero-content'>
                <div className='container px-5'>
                  <div className='row gx-5 align-items-center'>
                    <div className='col-lg-6'>
                      <h1 className='hero-title text-white'>M-Drone</h1>
                      <p className='hero-text mb-5'>
                        Welcome to M-Drone, you can avail the drone services
                        here!
                      </p>
                      <a
                        className='btn btn-light fw-500 me-2 btn-lg'
                        href='/signup'
                      >
                        Get Started
                      </a>
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'>
                      <img className='img-fluid' src={heroImg} alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='svg-border-rounded text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 144.54 17.34'
                  preserveAspectRatio='none'
                  fill='currentColor'
                >
                  <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0'></path>
                </svg>
              </div>
            </header>
            <section className='bg-white py-5'>
              <div className='container px-5'>
                <div className='row gx-5 text-center'>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-5 mb-lg-0'>
                    <div className='icon-stack icon-stack-xl bg-gradient text-white mb-4'>
                      <i className='bi bi-layers-fill'></i>
                    </div>
                    <h3>Built for developers</h3>
                    <p className='mb-0'>
                      Our customizable, block-based build system makes creating
                      your next project fast and easy!
                    </p>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-5 mb-lg-0'>
                    <div className='icon-stack icon-stack-xl bg-gradient text-white mb-4'>
                      <i className='bi bi-phone-fill'></i>
                    </div>
                    <h3>Modern responsive design</h3>
                    <p className='mb-0'>
                      Featuring carefully crafted, mobile-first components, your
                      end product will function beautifully on any device!
                    </p>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                    <div className='icon-stack icon-stack-xl bg-gradient text-white mb-4'>
                      <i className='bi bi-phone-fill'></i>
                    </div>
                    <h3>Complete documentation</h3>
                    <p className='mb-0'>
                      All of the layouts, page sections, components, and
                      utilities are fully covered in this products docs.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className='svg-border-rounded text-light'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 144.54 17.34'
                  preserveAspectRatio='none'
                  fill='currentColor'
                >
                  <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0'></path>
                </svg>
              </div> */}
            </section>
          </main>
        </div>
        <div className='layoutDefault_footer'></div>
      </div>
    </>
  )
}

export default Index
