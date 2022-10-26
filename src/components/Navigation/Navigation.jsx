import NavigationItem from '@/components/Navigation/NavigationItem.jsx';

const Navigation = () => {
  const navigationItems = [
    {
      linkTo: '/',
      icon: 'src/assets/icons/home.svg'
    },
    {
      linkTo: '/create-pin',
      icon: 'src/assets/icons/suitcase.svg'
    },
    {
      linkTo: '/',
      icon: 'src/assets/icons/send.svg'
    },
    {
      linkTo: '/',
      icon: 'src/assets/icons/user.svg'
    }
  ];
  return (
    <div
      style={{
        display: 'flex',
        background: '#355959',
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5
      }}>
      {navigationItems.map((item) => (
        <NavigationItem key={item.linkTo} linkTo={item.linkTo} src={item.icon} />
      ))}
    </div>
  );
};

export default Navigation;
