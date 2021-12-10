import React from "react";
import { Paper, TextField, Box, Button } from '@material-ui/core';
import "./Default.css"

const Default = () => {
    return (
        <section className="log-in">
            <h2 className="log-in__name">Добро пожаловать!</h2>
            <Paper component="section" className="log-in__login form">
                <span className="log-in__desc">Вход</span>
                <Box>
                    <TextField id="outlined-basic" label="Логин" variant="outlined" className="log-in__field" />
                    <TextField id="outlined-basic" label="Пароль" variant="outlined" className="log-in__field" />
                </Box>
                <Box className="log-in__login-button">
                    <Button
                        variant="contained"
                        color="primary">
                        Войти
                    </Button>
                </Box>
            </Paper>

            <Paper component="section" className="log-in__registration form">
                <span className="log-in__desc">Регистрация</span>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }} />
                < Box className="log-in__registration-fields">
                    <TextField id="outlined-basic" label="Ваше имя" variant="outlined" className="log-in__field" />
                    <TextField id="outlined-basic" label="Ваша фамиля" variant="outlined" className="log-in__field" />
                </Box>
                <Box className="log-in__login-button">
                    <Button
                        variant="contained"
                        color="primary">
                        Продолжить регистрацию
                    </Button>
                </Box>
            </Paper>
        </section >
    )
}

export default Default;