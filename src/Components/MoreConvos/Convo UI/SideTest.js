<Card onClick={() => {
         history.push(`/conversations/${usrConvo.cuid}`)
      }} className={classes.convoCard}>
            <CardHeader avatar={
              <Avatar className={classes.avatarColor}>
                {usrConvo.title[0]}
              </Avatar>
            }
            title={<Typography variant="body2">{usrConvo.title}</Typography>}
            subheader={<Typography variant="body2" color="textSecondary" noWrap>{usrConvo.description} </Typography>}
            />
</Card>