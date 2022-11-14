import React from "react";
import PropType from "prop-types";

//create your first component
const Jumb = (props) => {
	return (
        
		<div id='Jumb'>
            <div id="ContJum">
            
            <h1>{props.JumbTitle}</h1>
            
            
            <span>
                {props.JumbMensaje}
            </span>
            <p></p>
            <a href="#" className="btn btn-primary">Call to action</a>
            <br />
            </div>
            
        </div>
        
	);
};

Jumb.propTypes = {
	JumbTitle: PropType.string,
	JumbMensaje: PropType.string,
  
}
export default Jumb;
