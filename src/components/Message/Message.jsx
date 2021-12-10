import { makeStyles, Grid, Tab, Tabs, Paper, Tooltip, IconButton, Menu, MenuItem, Fade } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Message.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MessageChat from "../MessageChat/MessageChat"

const useStyles = makeStyles({
    message__tab: {
        fontSize: "0.8em",
        color: "var(--color-oliveGray)"
    },
});

const Message = () => {
    const [value, setValue] = useState(0);

    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid container spacing={2} component="section" className="message">
            <Grid item xs={9}>
                <Paper spacing={2}>
                    <div className="message__header">
                        <div className="message__side">
                            <SearchIcon color="disabled" /><input type="text" className="message__search-field" placeholder="Поиск..." />
                        </div>
                        <div className="message__side">
                                <Tooltip title="Settings" size="small" onClick={handleClick}>
                                    <IconButton aria-label="Settings">
                                        <MoreVertIcon color="disabled" />
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
                                    <MenuItem onClick={handleClose}>Архив</MenuItem>
                                    <MenuItem onClick={handleClose}>Спам</MenuItem>
                                    <MenuItem onClick={handleClose}>Настройки</MenuItem>
                                </Menu>
                        </div>
                    </div>
                    <div className="message__body">
                        <MessageChat/>
                        <MessageChat/>
                        <MessageChat/>
                        <MessageChat/>
                        <MessageChat/>
                        <MessageChat/>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper spacing={2}>
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        centered
                    >
                        <Tab className={classes.message__tab} label="Все чаты" />
                        <Tab className={classes.message__tab} label="Непрочитанные" />
                        <Tab className={classes.message__tab} label="Отмеченные" />
                        <span className="split-border"></span>
                        <Tab className={classes.message__tab} label="Беседы" />
                    </Tabs>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Message;



