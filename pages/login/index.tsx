import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const useStyles = makeStyles({
    card: {
        maxWidth: 445,
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '20px',
        marginTop: '30vh',
    },
});

const Login: FunctionComponent = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div dir="ltr">
            <Container>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Card className={classes.card} raised>
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <h3>Enter your username and password</h3>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="username"
                                    variant="outlined"
                                    size="small"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="password"
                                    variant="outlined"
                                    size="small"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Link href="/">
                                    <Button
                                        className="weight-700 mt-5"
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                    >
                                        Login
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Container>
        </div>
    );
};

Login['layout'] = 'login';
export default Login;
