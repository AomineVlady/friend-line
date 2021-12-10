import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
    tab: {
        fontSize: "0.8em",
        color: "var(--color-oliveGray)"
    },
});

const NewsSettings = () => {
    const [value, setValue] = useState(0);

    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Paper>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                centered
            >
                <Tab className={classes.tab} label="Новости" />
                <Tab className={classes.tab} label="Рекомендации" />
                <Tab className={classes.tab} label="Коментарии" />
            </Tabs>
        </Paper>
    );
}

export default NewsSettings;