<div>
      <Card className={classes.cardExample}>
        <CardMedia className={classes.cardMediaImage} image="https://source.unsplash.com/1600x900/?animal" />
        <CardContent>
          <Typography variant="h5">
            Conversation Title
          </Typography>
          <Typography variant="body2" color="textSecondary">
            All the conversation details will go in here
          </Typography>
        </CardContent>
        <CardActions className={classes.cardButtons}>
          <Button className={classes.buttons} color="secondary" variant="outlined">
            Join Convo
          </Button>
          <Button color="secondary" variant="outlined">
            More Details
          </Button>
        </CardActions>
      </Card>
</div>