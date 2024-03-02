import React from "react";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <p>Nisha Kinha © {currentYear}</p>
    )

};

export default Footer;