import { AddCircleOutline} from '@material-ui/icons';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

const sitePages = [
  
    {
      title: 'Home',
      icon: <HomeOutlinedIcon color="secondary" />,
      path: '/'
    },
    {
      title: 'New Conversation',
      icon: <AddCircleOutline color="secondary" />,
      path: '/create'
    },
    {
      title: 'View Conversations',
      icon: <MessageOutlinedIcon color="secondary" />,
      path: '/conversations'
    },
    {
      title: 'Friends',
      icon: <GroupOutlinedIcon color="secondary" />,
      path: '/friends'
    }
  
]

export default sitePages;