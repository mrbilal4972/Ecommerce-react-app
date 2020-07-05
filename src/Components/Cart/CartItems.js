import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {productContext} from '../../App';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '1rem'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CartItems() {
  const classes = useStyles();
  const {productAdded} = useContext(productContext);

  return (
      <>
        <Grid container direction='row' justify='center'>
    {

    productAdded.map((cartItem) =>
        <Grid item lg={5}>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={cartItem.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {cartItem.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {cartItem.detail} 
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {cartItem.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rs. {cartItem.prize}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </Grid>
    )  
}
    </Grid>
</>

  );
}
