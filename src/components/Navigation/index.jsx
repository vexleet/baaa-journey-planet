import NavigationItem from '@/src/components/Navigation/NavigationItem.jsx';
import './index.styles.css';

const Navigation = () => {
  const navigationItems = [
    {
      linkTo: '/',
      icon: '/icons/search.svg'
    },
    {
      linkTo: '/discover',
      icon: '/icons/home.svg'
    },
    {
      linkTo: '/',
      icon: '/icons/send.svg'
    },
    {
      linkTo: '/profile',
      icon: '/icons/user.svg'
    }
  ];
  return (
    <div className="navigation-wrapper">
      {navigationItems.map((item) => (
        <NavigationItem key={item.linkTo} linkTo={item.linkTo} src={item.icon} />
      ))}
    </div>
  );
};

export default Navigation;
