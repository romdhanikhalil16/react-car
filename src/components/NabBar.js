import React from 'react'
import {Link } from 'react-router-dom'

function NabBar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/AddCar">Add Car</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link" to="/Modification">Modification</Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li>
      <Link className="nav-link" to="/SignUp">SignUp</Link>

      </li>
      <li>
      <Link className="nav-link" to="/SignIn">SignIn</Link>
      </li>
    </ul>
   
  </div>
</nav>  
        </div>
    )
}

export default NabBar
