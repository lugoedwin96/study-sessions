import React from 'react';
import NavBar from '../src/components/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#E3DEE5',
  },
  gridContainer: {
    backgroundColor: 'black',
    padding: '0px',
    alignItems: 'center',
    textAlign: 'center'
  },
  grid: {
    marginTop: '50px',
    backgroundColor: 'blue',
    padding: '0px'
  },
  mainGrid: {
    justifyContent: 'center'
  },
  paper: {
    height: 'auto',
    textAlign: 'center',
    height: '50px'
  }
}));
// background color: #E3DEE5
// toolbar color: #1B5299
// table color: #DBCDDA
export default function App() {
  const classes = useStyles();

  return (  
    <div className={classes.root}>
      <NavBar />
        <Container className={classes.gridContainer}>
          <Grid container spacing={8} className={classes.mainGrid}>
            <Grid item xs={11} sm={4} className={classes.grid}>
              <TextField fullWidth id="standard-basic" label="Subject" />
            </Grid>
            <Grid item xs={11} sm={4} className={classes.grid}>
            <Typography>How long is this class?</Typography>
                <TextField inputProps={{ min: "0", max: "10", step: "1" }} type="number" label="HH" />
                <TextField inputProps={{ min: "30", max: "59", step: "1" }} type="number" label="MM" />
            </Grid>

            <Grid item  xs={10} className={classes.grid}>
              <Paper className={classes.paper}>s</Paper>
            </Grid>

            <Grid  item xs={6} sm={3} className={classes.grid}>
              <Paper className={classes.paper}>s</Paper>
            </Grid>
          </Grid>
        </Container>
    </div>
  );
}