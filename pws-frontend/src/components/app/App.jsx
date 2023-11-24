import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Plaintext from "../plaintext/Plaintext";

const App = () => {

    const [portaltexts, setPortaltexts] = useState([]);

    const [portaltextsMap, setPortaltextsMap] = useState(new Map());

    useEffect(() => {
        axios.get('/portaltext/getPortalTexts')
            .then(response => setPortaltexts(response.data));
    }, [])

    useEffect(() => {
        const map = new Map();
        portaltexts.map(portaltext => map.set(portaltext.key, portaltext.body));
        setPortaltextsMap(map)
    }, [portaltexts]);


    return (
        <div className="App">
            <header className="App-header">
                <Header
                    titlePt={portaltextsMap.get("title")}
                    githubPt={portaltextsMap.get("github")}
                    linkedinPt={portaltextsMap.get("linkedin")}
                    emailPt={portaltextsMap.get("email")}
                />
            </header>
            <div className="body-wrapper">
                <Plaintext
                    bodyPt={portaltextsMap.get("profile-text")}
                    isLeftSided={true}
                />
                <Plaintext
                    bodyPt={portaltextsMap.get("education-text-1")}
                    isLeftSided={false}
                />
                <Plaintext
                    bodyPt={portaltextsMap.get("education-text-2")}
                    isLeftSided={false}
                />
                <Plaintext
                    bodyPt={portaltextsMap.get("employment-text-1")}
                    isLeftSided={true}
                />
                <Plaintext
                    bodyPt={portaltextsMap.get("employment-text-2")}
                    isLeftSided={true}
                />
                <Plaintext
                    bodyPt={portaltextsMap.get("employment-text-3")}
                    isLeftSided={true}
                />
            </div>
            <Footer
                titlePt={portaltextsMap.get("footer-title")}
                emailInputPt={portaltextsMap.get("email-input")}
                subjectInputPt={portaltextsMap.get("subject-input")}
                msgInputPt={portaltextsMap.get("msg-input")}
                sendEmailBtnPt={portaltextsMap.get("send-email-btn")}
                sendEmailBannerPt={portaltextsMap.get("send-email-banner")}
            />
        </div>

    )
}
export default App;