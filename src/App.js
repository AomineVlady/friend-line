import React from 'react';
import { Routes, Route } from 'react-router';
import PATH_LIST from "./common/pathList";
import { Container, Grid } from '@material-ui/core';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import Default from './components/Default/Default';
import Profile from './components/Profile/Profile';
import Message from './components/Message/Message';
import News from './components/News/News';
import Friends from './components/Friends/Friends';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
              <Routes>
                <Route path={PATH_LIST.default} element={<Default />} />
                <Route path={PATH_LIST.profile} element={<Profile />} />
                <Route path={PATH_LIST.news} element={<News />} />
                <Route path={PATH_LIST.friends} element={<Friends />} />
                <Route path={PATH_LIST.message} element={<Message />} />
              </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
