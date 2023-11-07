import React from "react"
import 'bootstrap/dist/css/bootstrap-grid.rtl.css'
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <div className="offset-1 col-10 container-fluid footer-title">
                footer title
            </div>
            <div className="offset-2 col-8 container-fluid">
                <div className="email-field-wrapper">
                    <label className="field-label" htmlFor="email">Email:</label>
                    <input className="email-field" type="email" id="email" name="email"/>
                </div>
                <div className="subject-field-wrapper">
                    <label className="field-label" htmlFor="title">Subject: </label>
                    <input className="subject-field" type="text" id="title" name="title"/>
                </div>
                <div className="body-field-wrapper">
                    <label className="field-label" htmlFor="body">Body:</label>
                    <textarea className="body-field" id="body" name="body"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;