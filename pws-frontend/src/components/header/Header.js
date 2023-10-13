import {Component} from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap-grid.rtl.css'

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper container-fluid col-10 offset-1">
                <div className="header-title">
                    Header Title is here
                </div>
                <div className="header-navigation row-cols-3 ">
                    <div className="header-navigation-button">
                        item 1
                    </div>
                    <div className="header-navigation-button middle-button">
                        item 2
                    </div>
                    <div className="header-navigation-button">
                        item 3
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;