import React from "react";
import PropType from "prop-types";

//create your first component
const NavBar = (props) => {
	return (
    <div id="NavBar">
		<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">{props.Titulo1}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{props.Titulo2}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{props.Titulo3}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{props.Titulo4}</a>
  </li>
</ul>
</div>
	);
};

NavBar.propTypes = {
	Titulo1: PropType.string,
	Titulo2: PropType.string,
    Titulo3: PropType.string,
    Titulo4: PropType.string
}
export default NavBar;
