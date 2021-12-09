import React from "react";
import { Link } from "react-router-dom";
import PATH_LIST from "../../common/pathList";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar__nav">
            <Link to={PATH_LIST.profile} className="sidebar__nav__link" ><PersonIcon /> Профиль</Link>
            <Link to={PATH_LIST.news} className="sidebar__nav__link" ><LibraryBooksIcon /> Новости</Link>
            <Link to={PATH_LIST.friends} className="sidebar__nav__link" ><PeopleIcon /> Друзья</Link>
            <Link to={PATH_LIST.message} className="sidebar__nav__link" ><EmailIcon /> Сообщения</Link>
        </div>
    );
};

export default Sidebar;
