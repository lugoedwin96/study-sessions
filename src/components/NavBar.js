import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolBar: {
        backgroundColor: '#1B5299'
    }
}))


export default function NavBar() {
    const classes = makeStyles();

    return( 
        <AppBar position="static" className={classes.toolBar}>
            <Toolbar>
                <Typography variant="h6">
                    Smart Study Sessions
                </Typography>
            </Toolbar>
        </AppBar>
      )
}