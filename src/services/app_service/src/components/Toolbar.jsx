import React from "react";


function Header({header}){
    return(
        <div className="toolbar bkg-white">
            <div className="container-fluid">
                <div className="row tool-wrapper">
                    <div className="intro-text">
                        <h1>{header}</h1>
                    </div>

                    <div className="nav-badge">
                        Imptel-Online
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;