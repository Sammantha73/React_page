import React from "react";
import PropType from "prop-types";

//create your first component
const Footer = (props) => {
	return (
        <div id='footer'>
         <footer> <small>&copy; Copyright {props.FooterAnio}, {props.Company}</small> </footer> 
        
    </div>
       
	);
};

Footer.propTypes = {
	FooterAnio: PropType.string,
	Company: PropType.string,
  
}
export default Footer;
