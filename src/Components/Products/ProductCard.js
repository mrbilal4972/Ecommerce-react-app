import React from 'react';
import AddBtn from './AddBtn';
import { createMuiTheme } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


const theme = createMuiTheme();
const card = {paddingBottom: theme.spacing(2), width: "18rem"}

export default function ProductCard({product}) {

  return (
    <Card style= {card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AddBtn prod={product}/>
      </CardActions>
    </Card>
  );
}
