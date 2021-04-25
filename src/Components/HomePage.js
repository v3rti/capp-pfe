import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Cards from './TestCards/Cards';

const useStyles = makeStyles({
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center"
    
  },
  cardExample: {
    margin: 15,
    maxWidth: 320,
  },
  cardMediaImage: {
    height: 180,
    
  },
  cardButtons: {
    justifyContent: "center",
    
    padding: 10
  },
  buttons:{
    width: '50%',
    
  },
  descriptionText: {
    lineHeight: 1.5,
    height: 60,      /* height is 2x line-height, so two lines will display */
    overflow: "hidden"  /* prevents extra lines from being visible */
  }
  
})


function HomePage(){

  const classes = useStyles();

  return( 

      


    <div className={classes.cardsWrapper}>
      {Cards.map(card => {
        return (
        
        <Card className={classes.cardExample}>
          <CardMedia className={classes.cardMediaImage} image={card.image} />
          <CardContent>
            <Typography variant="h5">
              {card.title}
            </Typography>
            <Typography className={classes.descriptionText}  variant="body2" color="textSecondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardButtons}>
            <Button className={classes.buttons} color="secondary" variant="outlined">
              Join Convo
            </Button>
            <Button className={classes.buttons} color="secondary" variant="outlined">
              More Details
            </Button>
          </CardActions>
        </Card>
        
        )
      })}

      
    </div>
  )
}

export default HomePage;