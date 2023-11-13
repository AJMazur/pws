import React, {useEffect, useRef, useState} from "react"
import './Header.css';
import 'bootstrap/dist/css/bootstrap-grid.rtl.css'
import githubLogo from '../../resources/github-mark-white.svg'
import linkedinLogo from '../../resources/linkedin.svg'
import emailLogo from '../../resources/email-svgrepo-com.svg'

const Header = ({
    titlePt,
    githubPt,
    linkedinPt,
    emailPt
}) => {

    const MAX_MOBILE_WIDTH = 768;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= MAX_MOBILE_WIDTH)

    const prevWidth = useRef(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            const currWidth = window.innerWidth
            if (currWidth <= MAX_MOBILE_WIDTH && prevWidth.current > MAX_MOBILE_WIDTH){
                setIsMobile(true)
            } else if (currWidth > MAX_MOBILE_WIDTH && prevWidth.current <= MAX_MOBILE_WIDTH) {
                setIsMobile(false)
            }
            prevWidth.current = currWidth
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const openGitWindow = () => {
        window.open('https://github.com/AJMazur', '_blank')
    }
    const openLinkedinWindow = () => {
        window.open('https://www.linkedin.com/in/adam-mazur-49ab74195/', '_blank')
    }

    const scrollToTheFooter = () => {
        document.getElementById("footer").scrollIntoView()
    }

    return (
        <div className="header">
            <div className="header-wrapper container-fluid col-10 offset-1">
                <div className="header-title-wrapper col-4">
                    <div className="header-title">
                        {titlePt}
                    </div>
                </div>
                <div className="header-navigation col-8 row-cols-3">
                    <button onClick={openGitWindow} className="header-navigation-button">
                        <img src={githubLogo} alt='github-mark' className='github-logo'></img>
                        {!isMobile &&
                            <div className='button-label'>
                                {githubPt}
                            </div>}
                    </button>
                    <button onClick={openLinkedinWindow} className="header-navigation-button middle-button">
                        <img src={linkedinLogo} alt='linkedin' className='linkedin-logo'></img>
                        {!isMobile &&
                            <div className='button-label'>
                                {linkedinPt}
                            </div>}
                    </button>
                    <button onClick={scrollToTheFooter} className="header-navigation-button">
                        <img src={emailLogo} alt='email' className='email-logo'></img>
                        {!isMobile &&
                            <div className='button-label'>
                                {emailPt}
                            </div>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;