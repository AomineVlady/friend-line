import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import { Paper, Tab, Tabs, Grid, AppBar, Box, Typography } from '@material-ui/core';
import FriendItem from "../FriendItem/FriendItem";
import "./Friends.css";


const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = index => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Friends = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Paper spacing={2}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Все друзья" {...a11yProps(0)} />
                            <Tab label="Друзья онлайн" {...a11yProps(1)} />
                            <Tab label="Подписчики" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className="friend__list">
                                <FriendItem online={false}/>
                                <FriendItem online={false}/>
                                <FriendItem online={true}/>
                                <FriendItem online={true}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div className="friend__list">
                                <FriendItem online={true}/>
                                <FriendItem online={true}/>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div className="friend__list">
                                <FriendItem online={false}/>
                                <FriendItem online={true}/>
                                <FriendItem online={false}/>
                                <FriendItem online={true}/>
                                <FriendItem online={false}/>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper spacing={2}>
                    <div className="friend__details">
                        <input type="text" aria-label="строка поискпа друзей" placeholder="поиск друзей..." className="friend__search"/>
                    </div>
                </Paper>
            </Grid>
        </Grid>


    )
}

export default Friends;