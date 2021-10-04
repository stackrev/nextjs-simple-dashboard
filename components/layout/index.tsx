import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Link from 'next/link';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

import ImageIcon from '@material-ui/icons/Image';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PagesSharpIcon from '@material-ui/icons/PagesSharp';
import LoginIcon from '@material-ui/icons/InputOutlined';

import { rdxGetArticlesCount, useAppSelector } from '@shared/store';

const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100vw - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        ...theme.mixins.toolbar,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        paddingTop: theme.spacing(7),
        width: '100vw',
    },
    listItemText: {
        marginLeft: '-10px',
    },
    listItemAvatar: {
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    badge: {
        position: 'absolute',
        right: '25px',
        top: '25px',
    },
}));

export default function Layout({ children }) {
    const classes = useStyles();

    const articlesCount = useAppSelector(rdxGetArticlesCount);

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Simple Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}>
                    <ListItem className={classes.listItemAvatar}>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            primary="Mostafa Gholami"
                            secondary="09365895522"
                        />
                    </ListItem>
                </div>

                <Divider />

                <List>
                    <Link href="/">
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.listItemText}
                                primary="Dashboard"
                            />
                        </ListItem>
                    </Link>

                    <Link href="/articles">
                        <ListItem button>
                            <ListItemIcon>
                                <PagesSharpIcon />
                            </ListItemIcon>
                            <ListItemText className={classes.listItemText}>
                                Articles
                                <Badge
                                    className={classes.badge}
                                    badgeContent={articlesCount}
                                    color="primary"
                                />
                            </ListItemText>
                        </ListItem>
                    </Link>

                    <Link href="/login">
                        <ListItem button>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.listItemText}
                                primary="Login"
                            />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>

            <main className={classes.content}>{children}</main>
        </div>
    );
}
