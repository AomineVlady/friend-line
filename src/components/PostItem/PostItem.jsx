import React, { useState } from "react";
import { Avatar, Paper, Tooltip, IconButton, Menu, MenuItem, Fade } from "@material-ui/core";
import "./PostItem.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PostItem = ({ text, picture }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Paper elevation={2}>
            <div className="news__post">
                <div className="news__post__header">
                    <div className="news__post__creator">
                    <Avatar src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/eb718db5-920f-45c9-9e80-dfa6acbbfa36/280x420" alt="post creator" className="message__chat-avatar" width="50px"/>
                        <span className="news__post__creator-name">Иван Ургант</span>
                    </div>

                    <div>
                        <Tooltip title="Settings" size="small" onClick={handleClick}>
                            <IconButton aria-label="Settings">
                                <MoreVertIcon color="disabled" fontSize="small" />
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
                            <MenuItem onClick={handleClose}>Сохранить в закладках</MenuItem>
                            <MenuItem onClick={handleClose}>Это не интересно</MenuItem>
                            <MenuItem onClick={handleClose}>Пожаловаться</MenuItem>
                            <MenuItem onClick={handleClose}>Подписаться</MenuItem>
                        </Menu>
                    </div>
                </div>
                <div className="news__post__body">
                    {picture?.length ?
                        <img src={picture} alt="post img" width="400px" className="new__post-image" />
                        : <img src={"http://placehold.it/800x150"} alt="post img" width="400px" className="new__post-image" />}
                    {text?.length ? <p className="new__post-text">{text}</p> : null}
                </div>
                <div className="news__post__footer">
                    <button className="news__post__like button__post-uses"><FavoriteBorderIcon color="disabled" fontSize="small" /></button>
                    <button className="news__post__comments button__post-uses"><CommentIcon color="disabled" fontSize="small" /></button>
                </div>
            </div>
        </Paper>
    )
}

export default PostItem;