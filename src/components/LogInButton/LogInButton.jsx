import React from "react";
import { Link } from "react-router-dom";
import "./LogInButton.css";
import PATH_LIST from "../../common/pathList"

const LogInButton = () =>{
    return(
        <Link to={PATH_LIST.default} className="login__button">
            Войти
        </Link>
    )
}

export default LogInButton