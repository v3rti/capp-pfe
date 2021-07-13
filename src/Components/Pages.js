import { AddCircleOutline} from '@material-ui/icons';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const sitePages = [
  
    {
      title: 'Home',
      icon: <HomeOutlinedIcon color="secondary" />,
      path: '/'
    },
    {
      title: 'Create Conversation',
      icon: <AddCircleOutline color="secondary" />,
      path: '/create'
    },
    {
      title: 'View Conversations',
      icon: <MessageOutlinedIcon color="secondary" />,
      path: '/conversations'
    },
    
    {
      title: 'Requests',
      icon: <GroupOutlinedIcon color="secondary" />,
      path: '/requests'
    },
    {
      title: 'Search',
      icon: <SearchOutlinedIcon color="secondary" />,
      path: '/search'
    },
    {
      title: 'Log out',
      icon: <ExitToAppOutlinedIcon color="secondary" />,
      path: '/logout'
    },
    
  
]

export default sitePages;