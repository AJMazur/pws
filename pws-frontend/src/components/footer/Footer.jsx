import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap-grid.rtl.css'
import './Footer.css'
import axios from 'axios';

const Footer = () => {

    const [email, setEmail] = useState('');

    const [subject, setSubject] = useState('');

    const [body, setBody] = useState('');

    const [emailDelivered, setEmailDelivered] = useState(false);

    const sendEmail = () => {
        axios.post('/email/sendEmail', {
            emailAddress: email,
            emailTitle: subject,
            emailBody: body})
            .then(res => setEmailDelivered(true))
            .catch(err => setEmailDelivered(false))
    }

    return (
        <div id="footer" className="footer">
            <div className="offset-1 col-10 container-fluid footer-title">
                footer title
            </div>
            <div className="offset-2 col-8 container-fluid">
                <div className="email-field-wrapper">
                    <label className="field-label" htmlFor="email">email</label>
                    <input
                        className="email-field"
                        type="email"
                        id="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="subject-field-wrapper">
                    <label className="field-label" htmlFor="title">subject</label>
                    <input
                        className="subject-field"
                        type="text"
                        id="title"
                        name="title"
                        onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <div className="body-field-wrapper">
                    <label className="field-label" htmlFor="body">message</label>
                    <textarea
                        className="body-field"
                        id="body"
                        name="body"
                        onChange={e => setBody(e.target.value)}
                    />
                </div>
                <div className="send-email-wrapper">
                    {emailDelivered ?
                        <div className="send-email-banner">
                            Email has been sent
                        </div> :
                        <button
                            className="send-email-button"
                            onClick={sendEmail}>
                            <div className='button-label'>
                                send email
                            </div>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;