import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core/';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));
const theme = createMuiTheme({

});
const mainGrid = {
  maxWidth: "90%",
  margin: 'auto',
}
const paper = {
  background: 'green'
}
export default function CartHeading() {
  // const classes = useStyles();

  return (
        <ThemeProvider theme={theme}>
          <Grid style={mainGrid} container spacing={5}>
            <Grid item lg={12}>
            <AppBar position="static">
              <Toolbar>
                <Typography style={{margin: 'auto'}} variant="h6">
                  Your Cart
                </Typography>
              </Toolbar>
            </AppBar>
        </Grid>
      </Grid>
        </ThemeProvider>
  );
}
