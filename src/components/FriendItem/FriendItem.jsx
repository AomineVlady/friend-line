import React, { useState } from "react";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import "./FriendItem.css";
import { Link } from "react-router-dom";
import PATH_LIST from "../../common/pathList"
import { Fade, IconButton, Menu, MenuItem, Tooltip } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        position: "relative",
        right: "50px",
        boxShadow: `0 0 0 5px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '2px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const FriendItem = ({ online }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="friend__item">
            {online ?
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Link to={PATH_LIST.profile}><img src="https://instagrammi.ru/wp-content/uploads/ivan-urgant.jpg" alt="Друг" className="friend__item-avatar" /></Link>
                </StyledBadge>
                : <Link to={PATH_LIST.profile}><img src="https://instagrammi.ru/wp-content/uploads/ivan-urgant.jpg" alt="Друг" className="friend__item-avatar" /></Link>
            }
            <div className="friend__item-description">
                <Link to={PATH_LIST.profile} className="friend__item-name">Иван Ургант</Link>
                {online ? <span className="friend__item-online">Online</span> : <span className="friend__item-online"> </span>}
                <button className="friend_item__message-button">Написать сообщение</button>
            </div>
            <div className="friend__item__settings-button">
                <Tooltip title="Settings" size="small" onClick={handleClick}>
                    <IconButton aria-label="Settings">
                        <MoreVertIcon color="disabled"/>
                    </IconButton>
                </Tooltip>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Просмотр друзей</MenuItem>
                    <MenuItem onClick={handleClose}>Удалить из друзей</MenuItem>
                    <MenuItem onClick={handleClose}>Заблокировать</MenuItem>
                    <MenuItem onClick={handleClose}>Настроить</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default FriendItem;