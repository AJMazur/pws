import {useEffect, useState} from "react";
import './App.css';
import Header from "../header/Header";
import axios from 'axios';
import Footer from "../footer/Footer";

const App = () => {

    const [portaltexts, setPortaltexts] = useState([]);
    var portaltextsMap = new Map();


    useEffect(() => {
        axios.get('/portaltext/getPortalTexts')
            .then(response => setPortaltexts(response.data))

    }, [])

    useEffect(() => {
        portaltexts.map(portaltext => portaltextsMap.set(portaltext.key, portaltext.body))
        console.log("map: ", portaltextsMap)
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
            <Footer />
        </div>

    )
}
export default App;