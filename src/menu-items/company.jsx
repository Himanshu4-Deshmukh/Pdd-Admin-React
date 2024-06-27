// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const company = {
  id: 'authentication',
  title: 'Company Management',
  type: 'group',
  children: [
    {
      id: 'Customer',
      title: 'Customer',
      type: 'item',
      url: '/company',
      icon: icons.LoginOutlined,
      
    },
    // {
    //   id: 'register1',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/register',
    //   icon: icons.ProfileOutlined,
    //   target: true
    // }
  ]
};

export default company;
