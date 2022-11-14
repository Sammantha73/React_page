import React from "react";
import PropType from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = (props) => {
	return (
        
		<div className="card" >
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-title">{props.Cardtitle}</h4>
           <div className="card-text">
           <p >{props.Cardtext}</p>
            </div> 
           
            <div className="card-footer">
            <a href="#" className="btn btn-primary">Find out More</a>
        </div>
        </div>
        </div>
        
	);
};

Card.propTypes = {
	Cardtitle: PropType.string,
	Cardtext: PropType.string,
  
}
export default Card;
