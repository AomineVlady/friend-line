import React from "react";
import { Link } from "react-router-dom";
import PATH_LIST from "../../common/pathList";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar__nav">
            <Link to={PATH_LIST.profile} className="sidebar__nav__link" >Профиль</Link>
            <Link to={PATH_LIST.news} className="sidebar__nav__link" >Новости</Link>
            <Link to={PATH_LIST.message} className="sidebar__nav__link" >Сообщения</Link>
        </div>
    );
};

export default Sidebar;
