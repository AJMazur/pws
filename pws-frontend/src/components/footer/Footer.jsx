import React from "react"
import 'bootstrap/dist/css/bootstrap-grid.rtl.css'
import './Footer.css'

const Footer = () => {


    return (
        <div className="footer">
            <label htmlFor="title">Subject: </label>
            <input type="text" id="title" name="title"/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/>
            <label htmlFor="body">Body:</label>
            <input type="text" id="body" name="body"/>
        </div>
    )
}

export default Footer;