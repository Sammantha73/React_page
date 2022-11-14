import React from "react";

import Navbar from "./component/NavBar.jsx";
import Card from "./component/Card.jsx";



import PropType from "prop-types";
import Jumb from "./component/Jumb.jsx";
import Footer from "./component/Footer.jsx";




const App = () => {

	return (
        <div>
            
                <Navbar Titulo1='home' Titulo2='About' Titulo3='Services' Titulo4='Contact' />
           

                <div id='contenedor'>
                    
                            <Jumb  
                            JumbTitle= 'A Warm Welcome'
                            JumbMensaje='On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that '
                            
                            />
                    

                    <div id='cards'>
                            <Card Cardtitle='Mi foto1' 
                                Cardtext='Lorem ipsum dod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                                />
                            <Card Cardtitle='Mi foto2' 
                                Cardtext='Lorem ipsum dolorididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                                />
                            <Card Cardtitle='Mi foto3' 
                                Cardtext='Lorem ipsum dolor minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                                />
                            <Card Cardtitle='Mi foro' 
                                Cardtext='Lorem ips magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ifugiat nulla pariatur'
                                />
                     </div>    

                </div>

                
                    <Footer 
                    FooterAnio='2022' 
                    Company='MY4geeks2022'/>
                




        </div>
       
	);
};

export default App;

