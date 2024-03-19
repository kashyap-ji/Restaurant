import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">Foodhub</div>
      <div className={show ? "navLink showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={()=> setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
}

export default Navbar;
