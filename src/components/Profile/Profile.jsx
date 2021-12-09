import { BottomNavigation, BottomNavigationAction, Grid, IconButton, Paper, Tooltip } from "@material-ui/core";
import TuneIcon from '@material-ui/icons/Tune';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PeopleIcon from '@material-ui/icons/People';
import React from "react";
import "./Profile.css"
import UserDetails from "../UserDetails/UserDetails"

const Profile = () => {
    return (
        <section className="profile">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="profile__avatar">
                        <img src="http://placehold.it/200x300" alt="avatar of user" />
                    </div>
                </Grid>

                <Grid item xs={8}>
                    <Paper elevation={3}>
                        <div className="profile__information">
                            <div className="profile__information__header">
                                <h2 className="profile__name">Surname Name</h2>
                                <Tooltip title="Settings" size="small">
                                    <IconButton aria-label="Settings">
                                        <TuneIcon color="inherit" fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="profile__information__body">
                                <UserDetails />
                            </div>
                            <BottomNavigation
                                showLabels
                            >
                                <BottomNavigationAction label="Друзья" icon={<PeopleIcon />} />
                                <BottomNavigationAction label="Подписчики" icon={<AccessibilityNewIcon />} />
                                <BottomNavigationAction label="Фотографии" icon={<PhotoLibraryIcon />} />
                            </BottomNavigation>
                        </div>
                    </Paper>
                </Grid>
            </Grid>

        </section>
    )
}

export default Profile;
