import React from 'react';
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import "./MessageChat.css"
import ClearIcon from '@material-ui/icons/Clear';

const MessageChat = () => {
    return (
        <ul className="message__chat-list">
            <li className="message__chat-item">
                <Avatar src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/eb718db5-920f-45c9-9e80-dfa6acbbfa36/280x420" alt="post creator" className="message__chat-avatar" width="50px"/>
                <div className="message__chat-pref">
                    <h4 className="message__chat-name">
                        Иван Ургант
                    </h4>
                    <span className="message__chat__last-message">Приветствую! И приглашаю тебя на программу "Вечерний Ургант"</span>
                </div>
                <Tooltip title="Удалить" component="button" className="message__chat__delete-button">
                    <IconButton aria-label="Удалить" size='small'>
                        <ClearIcon fontSize="small" color="disabled"/>
                    </IconButton>
                </Tooltip>
            </li>
        </ul>
    )
}

export default MessageChat