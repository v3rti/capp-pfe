// NEW

{userConvos ? userConvos.map(usrConvo => {
    currentUser.convos_joined.map(currJoined => {
      if(usrConvo.cuid === currJoined.convo_id){
        return <Card onClick={() => {
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
      }
    })
  }) : null}



  ////// OLD

  {userConvos ? userConvos.map(usrConvo => {
      return usrConvo.users_joined.map(usr => {
      if(usr.username === currentUser.username){
        return <Card onClick={() => {
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
      }
      else{
        
      }})}) : null}


      // OLD

      const userJoiningConvo = (convId) => {
        userConvos.map(convo => {
        if(convo.cuid === convId){
            return convo.users_joined.map(usrs => {
            if(usrs.username === currentUser.username){
              setAlreadyJoined(true);
              return;
            }
          })
        }
        
        })
      }
        // NEW

        const userJoiningConvo = (convId) => {
          userConvos.map(usrConv => {
          currentUser.convos_joined.map(currUsr => {
            if(currUsr.convo_id === usrConv.cuid){
              console.log("yes");
            }
          })
          
          })
        }


        currentUser.convos_joined.map(currConv => {
          if(currConv.convo_id === convId){
            setAlreadyJoined(true);
            return;
          }
        })




      // { currentConvosJoined ? currentConvosJoined.map(currConv => {
      //   return <Card onClick={() => {
      //             history.push(`/conversations/${usrCo.cuid}`)
      //          }} className={classes.convoCard}>
      //                <CardHeader avatar={
      //                  <Avatar className={classes.avatarColor}>
      //                    {usrCo.title[0]}
      //                  </Avatar>
      //                }
      //                title={<Typography variant="body2">{usrCo.title}</Typography>}
      //                subheader={<Typography variant="body2" color="textSecondary" noWrap>{usrCo.description} </Typography>}
      //                />
      //     </Card> )}}
  


//   {currentConvosJoined ? currentConvosJoined.map((currConv) => {
//     return <Card onClick={() => {
//       history.push(`/conversations/${currConv.cuid}`)
//    }} className={classes.convoCard}>
//          <CardHeader avatar={
//            <Avatar className={classes.avatarColor}>
//              {currConv.title[0]}
//            </Avatar>
//          }
//          title={<Typography variant="body2">{currConv.title}</Typography>}
//          subheader={<Typography variant="body2" color="textSecondary" noWrap>{currConv.description} </Typography>}
//          />
// </Card>
//   })
// : null }



// Original



{userConvos && currentConvosJoined ? userConvos.map(usrCo => {
  return currentConvosJoined.map(currJoined => {
    if(currJoined.convo_id === usrCo.cuid){
        return <Card onClick={() => {
          history.push(`/conversations/${usrCo.cuid}`)
       }} className={classes.convoCard}>
             <CardHeader avatar={
               <Avatar className={classes.avatarColor}>
                 {usrCo.title[0]}
               </Avatar>
             }
             title={<Typography variant="body2">{usrCo.title}</Typography>}
             subheader={<Typography variant="body2" color="textSecondary" noWrap>{usrCo.description} </Typography>}
             />
        </Card>
    }
  })
})

: null}

{testCurr !== null ? testCurr.map(conv => {
  return <Card onClick={() => {
    history.push(`/conversations/${conv.cuid}`)
 }} className={classes.convoCard}>
       <CardHeader avatar={
         <Avatar className={classes.avatarColor}>
           {conv.title[0]}
         </Avatar>
       }
       title={<Typography variant="body2">{conv.title}</Typography>}
       subheader={<Typography variant="body2" color="textSecondary" noWrap>{conv.description} </Typography>}
       />
  </Card>
})
: null}