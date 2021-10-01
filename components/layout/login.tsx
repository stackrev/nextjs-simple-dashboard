import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        direction: 'rtl',
    },
}));

export default function LoginLayout({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main>{children}</main>
        </div>
    );
}
