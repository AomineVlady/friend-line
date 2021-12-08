import React from "react";
import { Container } from "@material-ui/core"
import PATH_LIST from "../../common/pathList";
import { Link } from "react-router-dom"
import "./Header.css"
import mainLogo from "./friends.png"

const Header = () => {
    return (
        <header className="header">
            <Container maxWidth="md">
                <div className="header__inner">
                    <Link to={PATH_LIST.default} className="header__legend-link">
                        <img src={mainLogo} alt="site logo" className="header__icon" width="50px" height="50px" />
                        <h1 className="header__label">friend line</h1>
                    </Link>
                </div>
            </Container>
        </header>
    );
}

export default Header;