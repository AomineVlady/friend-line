import { Grid, Paper } from "@material-ui/core";
import PostList from "../PostList/PostList";
import React from "react";
import NewsSettings from "../NewsSettings/NewsSettings";

const News = () => {
    return (
        <section className="news">
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <PostList />
                </Grid>

                <Grid item xs={4}>
                    <Paper elevation={3}>
                        <NewsSettings />
                    </Paper>
                </Grid>

            </Grid>
        </section>
    )
}

export default News;
