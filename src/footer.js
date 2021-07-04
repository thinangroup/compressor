import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky"><div>
            <CopyrightIcon /> 2021 - img-compress.com</div><br></br>
                <div>Contact us</div>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <a align='right' style={{ color: "inherit" }} href="https://www.facebook.com/Thinan-Groups-100486115645862">
                            <FacebookIcon fontSize='large' />
                        </a>

                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
