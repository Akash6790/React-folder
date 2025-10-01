import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'

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
                <Link className={`nav-link  text-${props.mode === 'light'?'dark':'light'}`} to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  text-${props.mode === 'light'?'dark':'light'}`} to="/about">about</Link>
              </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success bg-warning  my-2 my-sm-0  text-dark pe-3" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch px-5 text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input " onClick={props.enable} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label " htmlFor="switchCheckDefault">  {props.mode === 'light' ? ' Dark ' : ' Light'}</label>
            </div>
            <div className={`form-check form-switch px-5 text-${props.mode === 'light'?'yellow':'blue'}`}>
              <input className="form-check-input " onClick={props.enablemode} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label " htmlFor="switchCheckDefault">{props.mode == 'blue' ? 'yellow':'blue'} </label>
             </div>
          </div>
        </nav>
      </>
    </div>
  )
}
