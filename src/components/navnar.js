import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function NavBar(props) {
  return (
    <div>
      <>
        <nav className={`navbar navbar-expand-lg  navbar text-${props.mode === 'light'?'dark':'light'} bg-${props.mode} `}>
          <a className={`navbar-brand  nav-link  text-${props.mode === 'light'?'dark':'light'} href="/"`}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className={`nav-link  text-${props.mode === 'light'?'dark':'light'}`} href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link  text-${props.mode === 'light'?'dark':'light'}`} href="/">about</a>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success bg-warning  my-2 my-sm-0  text-dark pe-3" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch px-5 text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input " onClick={props.enable} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label " htmlFor="switchCheckDefault">Enable Dark mode</label>
            </div>
          </div>
        </nav>
      </>
    </div>
  )
}
