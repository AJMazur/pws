import {Component} from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap-grid.rtl.css'
import githubLogo from '../../resources/github-mark-white.svg'
import linkedinLogo from '../../resources/linkedin.svg'

class Header extends Component {

    openGitWindow = () => {
        window.open('https://github.com/AJMazur', '_blank')
    }

    openLinkedinWindow = () => {
        window.open('https://www.linkedin.com/in/adam-mazur-49ab74195/', '_blank')
    }

    render() {
        return (
            <div className="header-wrapper container-fluid col-10 offset-1">
                <div className="header-title">
                    Header Title is here
                </div>
                <div className="header-navigation row-cols-3 ">
                    <button onClick={this.openGitWindow} className="header-navigation-button">
                        <img src={githubLogo} alt='github-mark' className='github-logo'></img>
                        <div className='button-label'>
                            item 1
                        </div>
                    </button>
                    <button onClick={this.openLinkedinWindow} className="header-navigation-button middle-button">
                        <img src={linkedinLogo} alt='linkedin' className='linkedin-logo'></img>
                        <div className='button-label'>
                            item 2
                        </div>
                    </button>
                    <div className="header-navigation-button">
                        item 3
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;