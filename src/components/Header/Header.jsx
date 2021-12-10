import React from "react";
import { Container } from "@material-ui/core";
import "./Header.css";
import mainLogo from "./friends.png";
import LogInButton from "../LogInButton/LogInButton";

const Header = () => {
    return (
        <header className="header">
            <Container maxWidth="md">
                <div className="header__inner">
                    <div className="header__side">
                        <div className="header__legend-link">
                            <img src={mainLogo} alt="site logo" className="header__icon" width="50px" height="50px" />
                            <h1 className="header__label">friend line</h1>
                        </div>
                        <input type="text" className="header__search-field" placeholder="Найти" />
                    </div>
                    <div className="header__side">
                        <LogInButton />
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;