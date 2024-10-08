import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom';

export default function Navbar(props) {

  return (
   
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <a  className="navbar-brand" href='#'>{props.home}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-a active" aria-current="page" href="">{props.home}</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-a"href="#">{props.about} </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`} >
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
  {/* <a href={'about'}>
  <button>About</button>
  </a> */}
</nav>


    
  )
}


Navbar.propTypes={
                    about: PropTypes.string.isRequired,
                    home: PropTypes.string.isRequired 
                    } ;

// Navbar.defaultProps = {   // agar props nhi bheje  to ye set honge
//   title:'set title here',
//   about:'About us'
// }