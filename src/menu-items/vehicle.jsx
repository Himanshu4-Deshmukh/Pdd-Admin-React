// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const vehicle = {
  id: 'vehicle',
  title: 'Vehicle Managemet',
  type: 'group',
  children: [
    {
      id: 'vehicle',
      title: 'Vehicle',
      type: 'item',
      url: '/vehicle',
      icon: icons.ChromeOutlined
    },
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true
    // }
  ]
};

export default vehicle;
