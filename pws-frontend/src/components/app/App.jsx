import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Plaintext from "../plaintext/Plaintext";

const App = () => {

    const [portaltexts, setPortaltexts] = useState([]);
    var portaltextsMap = new Map();


    useEffect(() => {
        axios.get('/portaltext/getPortalTexts')
            .then(response => setPortaltexts(response.data))
    }, [])

    useEffect(() => {
        portaltexts.map(portaltext => portaltextsMap.set(portaltext.key, portaltext.body))
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
            <Plaintext />
            <Footer />
        </div>

    )
}
export default App;