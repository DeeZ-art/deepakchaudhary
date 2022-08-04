import React from 'react'
import {Link} from "react-scroll";
export default function Footer() {
  return (
    <div>
      <div className="container">
  <footer className="py-3 my-4 ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="home" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="about" className="nav-link px-2 text-muted">About</Link></li>
      <li className="nav-item"><Link to="skills" className="nav-link px-2 text-muted">Skills</Link></li>
      <li className="nav-item"><Link to="contact" className="nav-link px-2 text-muted">Contact</Link></li>
      
    </ul>
    <p className="text-center ">DeeZArts © 2022 Company, Inc</p>
  </footer>
</div>
    </div>
  )
}
