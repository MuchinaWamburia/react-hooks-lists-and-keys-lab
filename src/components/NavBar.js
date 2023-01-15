import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  const linksList =links.map((link) => {
    return <a key={link} href={"#"+link} >{link}</a>
    })
    return<nav>{linksList}</nav>
}

export default NavBar;
