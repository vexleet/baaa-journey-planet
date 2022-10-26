import PropTypes from 'prop-types';
import { Children } from 'react';
import './index.styles.css';
import TabPanel from '@/components/Tabs/TabPanel.jsx';
import Tab from '@/components/Tabs/Tab.jsx';

const Tabs = ({ children, className, value, onChange }) => {
  const tabIsSelected = (tabValue) => {
    return value === tabValue;
  };

  const getActiveClassForTab = (tabValue) => {
    return tabIsSelected(tabValue) ? 'selected-tab' : '';
  };

  const mapTabs = (child) => {
    const { value } = child.props;

    return (
      <div className={getActiveClassForTab(value)} onClick={() => onChange(value)}>
        {child}
      </div>
    );
  };

  const mapTabPanels = (child) => {
    const { value: propValue } = child.props;

    return propValue === value ? child : null;
  };

  const tabsComponents = Children.map(children, (child) =>
    child.type.name === 'Tab' ? mapTabs(child) : null
  );

  const tabPanelComponents = Children.map(children, (child) =>
    child.type.name === 'TabPanel' ? mapTabPanels(child) : null
  );

  return (
    <div>
      <div className={'tabs ' + className}>{tabsComponents}</div>
      {tabPanelComponents}
    </div>
  );
};

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

Tabs.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.instanceOf(Tab), PropTypes.instanceOf(TabPanel)])
  ),
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};

export default Tabs;
