import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
   <Link to = "/" > <h2 style={{color: "black"}}> Blue Ocean </h2> </Link>
    <div id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/reception"><button  className="btn btn-outline-info">Reception</button></Link>
        </li>
        
        <li className="nav-item">
        <Link to="/kitchen"><button  className="btn btn-outline-info">kitchen</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar